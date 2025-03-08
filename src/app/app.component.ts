import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubredditService } from './services/subreddit.service';
import { DeviceService } from './services/device.service';
import { Subject, debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs';

interface RedditPost {
  data: {
    title: string;
    author: string;
    ups: number;
    url: string;
    permalink: string;
    thumbnail: string;
    subreddit: string;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AppComponent implements OnInit, OnDestroy {
  posts: RedditPost[] = [];
  loading = true;
  error = '';
  isDarkMode = false;
  readonly DEFAULT_IMAGE = '/assets/generic-img.png';
  searchQuery = '';
  subredditFilter = '';
  subredditSuggestions: string[] = [];
  private searchTerms = new Subject<string>();
  private destroy$ = new Subject<void>();
  private after: string = '';
  private isLoading = false;
  private scrollThreshold = 0.8; // Load more when 80% scrolled
  isMobileDevice = false;
  isTabletDevice = false;
  showMenu = false;
  showNSFW = false;
  showAgeVerification = false;
  private hasVerifiedAge = false;

  constructor(
    private http: HttpClient,
    private subredditService: SubredditService,
    private deviceService: DeviceService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Load theme preference on component initialization
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = localStorage.getItem('darkMode') === 'true';
      this.showNSFW = localStorage.getItem('showNSFW') === 'true';
      this.hasVerifiedAge = localStorage.getItem('ageVerified') === 'true';
    }
    this.isMobileDevice = this.deviceService.isMobile();
    this.isTabletDevice = this.deviceService.isTablet();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('darkMode', this.isDarkMode.toString());
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleNSFW() {
    if (!this.showNSFW && !this.hasVerifiedAge) {
      this.showAgeVerification = true;
      return;
    }
    this.updateNSFWSetting(true);
  }

  verifyAge(isOver18: boolean) {
    this.showAgeVerification = false;
    if (isOver18) {
      this.hasVerifiedAge = true;
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('ageVerified', 'true');
      }
      this.updateNSFWSetting(true);
    } else {
      this.showMenu = false;
    }
  }

  private updateNSFWSetting(verified: boolean) {
    this.showNSFW = !this.showNSFW;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('showNSFW', this.showNSFW.toString());
    }
    this.searchPosts();
  }

  ngOnInit() {
    this.setupSubredditAutocomplete();
    this.fetchTrendingPosts();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  fetchTrendingPosts() {
    this.http.get<any>('https://www.reddit.com/r/popular/hot.json')
      .subscribe({
        next: (response) => {
          this.posts = response.data.children;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Failed to load posts';
          this.loading = false;
          console.error('Error fetching posts:', error);
        }
      });
  }

  searchPosts() {
    this.loading = true;
    this.posts = [];
    this.after = '';
    let url = 'https://www.reddit.com';
    
    // Add NSFW parameter if enabled
    const params = ['raw_json=1'];
    if (this.showNSFW) {
      params.push('include_over_18=1');
    }

    if (this.subredditFilter.trim()) {
      url += `/r/${encodeURIComponent(this.subredditFilter)}`;
    } else {
      url += '/r/popular';
    }

    if (this.searchQuery.trim()) {
      url += `/search.json?${params.join('&')}&q=${encodeURIComponent(this.searchQuery)}`;
    } else {
      url += `/hot.json?${params.join('&')}`;
    }

    this.http.get<any>(url)
      .subscribe({
        next: (response) => {
          this.posts = response.data.children;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Failed to load posts';
          this.loading = false;
          console.error('Error loading posts:', error);
        }
      });
  }

  filterBySubreddit() {
    // Now just call searchPosts which handles both filters
    this.searchPosts();
  }

  getPostThumbnail(post: RedditPost): string {
    if (!post.data.thumbnail || 
        post.data.thumbnail === 'self' || 
        post.data.thumbnail === 'default' ||
        post.data.thumbnail === 'nsfw' ||
        !post.data.thumbnail.startsWith('http')) {
      return this.DEFAULT_IMAGE;
    }
    return post.data.thumbnail;
  }

  handleImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.src = this.DEFAULT_IMAGE;
    }
  }

  onSubredditInput(term: string) {
    this.searchTerms.next(term);
  }

  private setupSubredditAutocomplete() {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => term ? this.subredditService.searchSubreddits(term) : []),
      takeUntil(this.destroy$)
    ).subscribe(suggestions => {
      this.subredditSuggestions = suggestions;
    });
  }

  selectSubreddit(subreddit: string) {
    this.subredditFilter = subreddit;
    this.subredditSuggestions = [];
    this.searchPosts(); // Use the combined search method
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop + windowHeight) / documentHeight;

      if (scrollPercentage > this.scrollThreshold && !this.isLoading) {
        this.loadMorePosts();
      }
    }
  }

  private loadMorePosts(): void {
    if (this.isLoading) return;
    
    this.isLoading = true;
    let url = 'https://www.reddit.com';
    
    if (this.subredditFilter.trim()) {
      url += `/r/${encodeURIComponent(this.subredditFilter)}`;
    } else {
      url += '/r/popular';
    }

    if (this.searchQuery.trim()) {
      url += `/search.json?q=${encodeURIComponent(this.searchQuery)}&restrict_sr=1`;
    } else {
      url += '/hot.json';
    }

    if (this.after) {
      url += `${url.includes('?') ? '&' : '?'}after=${this.after}`;
    }

    this.http.get<any>(url)
      .subscribe({
        next: (response) => {
          const newPosts = response.data.children;
          this.after = response.data.after;
          this.posts = [...this.posts, ...newPosts];
          this.isLoading = false;
        },
        error: (error) => {
          this.error = 'Failed to load more posts';
          this.isLoading = false;
          console.error('Error loading more posts:', error);
        }
      });
  }
}