import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface SubredditSearchResponse {
  data: {
    children: Array<{
      data: {
        display_name: string;
        subscribers: number;
      }
    }>
  }
}

@Injectable({
  providedIn: 'root'
})
export class SubredditService {
  constructor(private http: HttpClient) {}

  searchSubreddits(query: string): Observable<string[]> {
    return this.http.get<SubredditSearchResponse>(
      `https://www.reddit.com/subreddits/search.json?q=${query}&limit=5`
    ).pipe(
      map(response => response.data.children.map(child => child.data.display_name))
    );
  }
}