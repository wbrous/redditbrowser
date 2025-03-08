export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>Reddit Browser</title>
  <base href="/redditbrowser/">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <link rel="icon" type="image/x-icon" href="favicon.png">
  <style>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      min-height: 100vh;
      background-color: inherit;
    }
  </style>
<link rel="stylesheet" href="styles-5INURTSO.css"><style ng-app-id="ng">[_nghost-ng-c1006591452]{display:block;min-height:100vh;width:100%;margin:0;padding:0;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background-color:#fff;transition:background-color .3s ease}body[_ngcontent-ng-c1006591452]{margin:0;padding:0;min-height:100vh;width:100%;background-color:inherit}.main[_ngcontent-ng-c1006591452]{width:100%;min-height:100vh;margin:0;padding:20px;box-sizing:border-box;display:flex;flex-direction:column;background-color:inherit}.header[_ngcontent-ng-c1006591452]{display:flex;justify-content:space-between;align-items:center;width:100%;margin-bottom:2rem}.theme-toggle-wrapper[_ngcontent-ng-c1006591452]{display:flex;align-items:center;gap:8px}.switch[_ngcontent-ng-c1006591452]{position:relative;display:inline-block;width:60px;height:30px;cursor:pointer}.switch[_ngcontent-ng-c1006591452]   input[_ngcontent-ng-c1006591452]{opacity:0;width:0;height:0}.slider[_ngcontent-ng-c1006591452]{position:absolute;cursor:pointer;inset:0;background-color:#ccc;transition:.4s;border-radius:34px}.slider[_ngcontent-ng-c1006591452]:before{position:absolute;content:"";height:22px;width:22px;left:4px;bottom:4px;background-color:#fff;transition:.4s;border-radius:50%}input[_ngcontent-ng-c1006591452]:checked + .slider[_ngcontent-ng-c1006591452]{background-color:#ff4500}input[_ngcontent-ng-c1006591452]:focus + .slider[_ngcontent-ng-c1006591452]{box-shadow:0 0 1px #ff4500}input[_ngcontent-ng-c1006591452]:checked + .slider[_ngcontent-ng-c1006591452]:before{transform:translate(30px)}.toggle-label[_ngcontent-ng-c1006591452]{position:absolute;right:-30px;top:50%;transform:translateY(-50%);font-size:1.2rem}.dark-mode[_ngcontent-ng-c1006591452]   .slider[_ngcontent-ng-c1006591452]{background-color:#404040}.dark-mode[_ngcontent-ng-c1006591452]   input[_ngcontent-ng-c1006591452]:checked + .slider[_ngcontent-ng-c1006591452]{background-color:#ff4500}.dark-mode[_nghost-ng-c1006591452], .dark-mode   [_nghost-ng-c1006591452], .dark-mode[_ngcontent-ng-c1006591452]{background-color:#1a1a1b!important;color:#fff}.dark-mode[_ngcontent-ng-c1006591452]   .main[_ngcontent-ng-c1006591452], .dark-mode[_ngcontent-ng-c1006591452]   .content[_ngcontent-ng-c1006591452]{background-color:inherit}.dark-mode[_ngcontent-ng-c1006591452]   .post-card[_ngcontent-ng-c1006591452]{background-color:#272729;box-shadow:0 2px 4px #0003}.dark-mode[_ngcontent-ng-c1006591452]   .post-content[_ngcontent-ng-c1006591452]   h2[_ngcontent-ng-c1006591452]{color:#fff}.dark-mode[_ngcontent-ng-c1006591452]   .post-meta[_ngcontent-ng-c1006591452]{color:#818384}.dark-mode[_ngcontent-ng-c1006591452]   .theme-toggle[_ngcontent-ng-c1006591452]{border-color:#fff;color:#fff}.dark-mode[_ngcontent-ng-c1006591452]   .theme-toggle[_ngcontent-ng-c1006591452]:hover{background-color:#ff4500;color:#1a1a1b}.dark-mode[_ngcontent-ng-c1006591452]   h1[_ngcontent-ng-c1006591452], .dark-mode[_ngcontent-ng-c1006591452]   .post-content[_ngcontent-ng-c1006591452]   h2[_ngcontent-ng-c1006591452], .dark-mode[_ngcontent-ng-c1006591452]   .post-meta[_ngcontent-ng-c1006591452]   span[_ngcontent-ng-c1006591452]{color:#fff}.dark-mode[_ngcontent-ng-c1006591452]   .post-link[_ngcontent-ng-c1006591452]{color:#ff4500}.dark-mode[_ngcontent-ng-c1006591452]   .loading[_ngcontent-ng-c1006591452]{color:#fff}.dark-mode[_ngcontent-ng-c1006591452]   .error[_ngcontent-ng-c1006591452]{color:#ff4500}header[_ngcontent-ng-c1006591452]{text-align:center;margin-bottom:2rem}h1[_ngcontent-ng-c1006591452]{color:#ff4500;font-size:2.5rem;font-weight:500;margin:0}p[_ngcontent-ng-c1006591452]{margin:.5rem 0 0;color:#666}.loading[_ngcontent-ng-c1006591452], .error[_ngcontent-ng-c1006591452]{text-align:center;padding:2rem;font-size:1.2rem}.error[_ngcontent-ng-c1006591452]{color:#ff4500}.posts[_ngcontent-ng-c1006591452]{display:grid;gap:1.5rem}.post-card[_ngcontent-ng-c1006591452]{display:flex;gap:1rem;padding:1rem;background:#fff;border-radius:8px;box-shadow:0 2px 4px #0000001a;transition:transform .2s,background-color .3s ease;animation:_ngcontent-ng-c1006591452_fadeInUp .5s ease-out;will-change:transform,opacity}.post-card[_ngcontent-ng-c1006591452]:hover{transform:translateY(-2px)}.post-thumbnail[_ngcontent-ng-c1006591452]{width:100px;height:100px;object-fit:cover;border-radius:4px}.post-content[_ngcontent-ng-c1006591452]{flex:1}.post-content[_ngcontent-ng-c1006591452]   h2[_ngcontent-ng-c1006591452]{margin:0 0 .5rem;font-size:1.2rem;color:#1a1a1b}.post-meta[_ngcontent-ng-c1006591452]{display:flex;justify-content:space-between;align-items:center;font-size:.9rem;color:#7c7c7c;margin-bottom:.5rem;width:100%}.post-meta-author[_ngcontent-ng-c1006591452]{flex:1;text-align:left}.post-meta-votes[_ngcontent-ng-c1006591452]{flex:1;text-align:center;display:flex;align-items:center;justify-content:center;gap:.25rem}.post-meta-subreddit[_ngcontent-ng-c1006591452]{flex:1;text-align:right}.post-link[_ngcontent-ng-c1006591452]{display:block;color:#ff4500;text-decoration:none;font-weight:500;text-align:center;margin-top:.5rem}.post-link[_ngcontent-ng-c1006591452]:hover{text-decoration:underline}.content[_ngcontent-ng-c1006591452]{flex:1;width:100%;max-width:1000px;margin:0 auto;padding:0 20px;box-sizing:border-box}.search-section[_ngcontent-ng-c1006591452]{display:flex;flex-direction:row;gap:1rem;margin-bottom:2rem;width:100%}.search-bar[_ngcontent-ng-c1006591452], .subreddit-filter[_ngcontent-ng-c1006591452]{display:flex;gap:.5rem;flex:1}.search-input[_ngcontent-ng-c1006591452], .filter-input[_ngcontent-ng-c1006591452]{width:100%;padding:.5rem;border:2px solid #ff4500;border-radius:20px;font-size:1rem;background:transparent;color:inherit;box-sizing:border-box}.search-button[_ngcontent-ng-c1006591452], .filter-button[_ngcontent-ng-c1006591452]{padding:.5rem 1rem;border:2px solid #ff4500;border-radius:20px;background:transparent;color:#ff4500;cursor:pointer;transition:all .3s ease;white-space:nowrap}.search-button[_ngcontent-ng-c1006591452]:hover, .filter-button[_ngcontent-ng-c1006591452]:hover{background:#ff4500;color:#fff}.dark-mode[_ngcontent-ng-c1006591452]   .search-input[_ngcontent-ng-c1006591452], .dark-mode[_ngcontent-ng-c1006591452]   .filter-input[_ngcontent-ng-c1006591452]{background:#272729;color:#fff}.dark-mode[_ngcontent-ng-c1006591452]   .search-input[_ngcontent-ng-c1006591452]::placeholder, .dark-mode[_ngcontent-ng-c1006591452]   .filter-input[_ngcontent-ng-c1006591452]::placeholder{color:#818384}.autocomplete-container[_ngcontent-ng-c1006591452]{flex:1;position:relative}.suggestions-list[_ngcontent-ng-c1006591452]{position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #ccc;border-radius:4px;margin:0;padding:0;list-style:none;max-height:200px;overflow-y:auto;z-index:1000}.suggestions-list[_ngcontent-ng-c1006591452]   li[_ngcontent-ng-c1006591452]{padding:8px 12px;cursor:pointer;transition:background-color .2s}.suggestions-list[_ngcontent-ng-c1006591452]   li[_ngcontent-ng-c1006591452]:hover{background-color:#f5f5f5}.dark-mode[_ngcontent-ng-c1006591452]   .suggestions-list[_ngcontent-ng-c1006591452]{background:#272729;border-color:#404040}.dark-mode[_ngcontent-ng-c1006591452]   .suggestions-list[_ngcontent-ng-c1006591452]   li[_ngcontent-ng-c1006591452]{color:#fff}.dark-mode[_ngcontent-ng-c1006591452]   .suggestions-list[_ngcontent-ng-c1006591452]   li[_ngcontent-ng-c1006591452]:hover{background-color:#363636}@keyframes _ngcontent-ng-c1006591452_fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.loading-more[_ngcontent-ng-c1006591452]{text-align:center;padding:1rem;color:#ff4500}.dark-mode[_ngcontent-ng-c1006591452]   .loading-more[_ngcontent-ng-c1006591452]{color:#fff}.mobile[_ngcontent-ng-c1006591452]   .search-section[_ngcontent-ng-c1006591452]{flex-direction:column}.mobile[_ngcontent-ng-c1006591452]   .search-bar[_ngcontent-ng-c1006591452], .mobile[_ngcontent-ng-c1006591452]   .subreddit-filter[_ngcontent-ng-c1006591452]{width:100%}.mobile[_ngcontent-ng-c1006591452]   .post-card[_ngcontent-ng-c1006591452]{flex-direction:column}.mobile[_ngcontent-ng-c1006591452]   .post-thumbnail[_ngcontent-ng-c1006591452]{width:100%;height:200px}.mobile[_ngcontent-ng-c1006591452]   .post-meta[_ngcontent-ng-c1006591452]{flex-direction:column;gap:.5rem}.mobile[_ngcontent-ng-c1006591452]   .post-meta-author[_ngcontent-ng-c1006591452], .mobile[_ngcontent-ng-c1006591452]   .post-meta-votes[_ngcontent-ng-c1006591452], .mobile[_ngcontent-ng-c1006591452]   .post-meta-subreddit[_ngcontent-ng-c1006591452]{width:100%;text-align:center}.tablet[_ngcontent-ng-c1006591452]   .post-thumbnail[_ngcontent-ng-c1006591452]{width:150px;height:150px}.tablet[_ngcontent-ng-c1006591452]   .search-section[_ngcontent-ng-c1006591452]{gap:.75rem}.mobile[_ngcontent-ng-c1006591452]   h1[_ngcontent-ng-c1006591452]{font-size:1.8rem}.mobile[_ngcontent-ng-c1006591452]   .post-content[_ngcontent-ng-c1006591452]   h2[_ngcontent-ng-c1006591452]{font-size:1rem}.mobile[_ngcontent-ng-c1006591452]   .search-input[_ngcontent-ng-c1006591452], .mobile[_ngcontent-ng-c1006591452]   .filter-input[_ngcontent-ng-c1006591452], .mobile[_ngcontent-ng-c1006591452]   .search-button[_ngcontent-ng-c1006591452], .mobile[_ngcontent-ng-c1006591452]   .filter-button[_ngcontent-ng-c1006591452]{font-size:.9rem;padding:.75rem}.header-controls[_ngcontent-ng-c1006591452]{display:flex;align-items:center;gap:1rem}.menu-wrapper[_ngcontent-ng-c1006591452]{position:relative}.menu-button[_ngcontent-ng-c1006591452]{background:transparent;border:2px solid #ff4500;border-radius:50%;color:#ff4500;width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .3s ease;padding:0;margin-left:1rem}.menu-button[_ngcontent-ng-c1006591452]:hover{background-color:#ff4500;color:#fff}.dots[_ngcontent-ng-c1006591452]{font-size:1.4rem;line-height:1;transform:rotate(90deg);display:block}.menu-dropdown[_ngcontent-ng-c1006591452]{position:absolute;right:0;top:120%;background:#fff;border:2px solid #ff4500;border-radius:12px;padding:1rem;min-width:220px;box-shadow:0 4px 12px #0000001a;z-index:1000}.menu-item[_ngcontent-ng-c1006591452]{padding:.5rem}.nsfw-toggle[_ngcontent-ng-c1006591452]{display:flex;align-items:center;gap:.75rem;padding:.5rem;cursor:pointer;border-radius:8px;transition:all .2s ease}.nsfw-toggle[_ngcontent-ng-c1006591452]:hover{background-color:#ff45001a}.nsfw-toggle[_ngcontent-ng-c1006591452]   input[type=checkbox][_ngcontent-ng-c1006591452]{appearance:none;-webkit-appearance:none;width:20px;height:20px;border:2px solid #ff4500;border-radius:4px;cursor:pointer;position:relative;transition:all .2s ease}.nsfw-toggle[_ngcontent-ng-c1006591452]   input[type=checkbox][_ngcontent-ng-c1006591452]:checked{background-color:#ff4500}.nsfw-toggle[_ngcontent-ng-c1006591452]   input[type=checkbox][_ngcontent-ng-c1006591452]:checked:after{content:"\\2713";position:absolute;color:#fff;font-size:14px;left:3px;top:-1px}.nsfw-toggle[_ngcontent-ng-c1006591452]   span[_ngcontent-ng-c1006591452]{font-size:.95rem;font-weight:500}.dark-mode[_ngcontent-ng-c1006591452]   .menu-button[_ngcontent-ng-c1006591452]{border-color:#ff4500;color:#ff4500}.dark-mode[_ngcontent-ng-c1006591452]   .menu-button[_ngcontent-ng-c1006591452]:hover{background-color:#ff4500;color:#1a1a1b}.dark-mode[_ngcontent-ng-c1006591452]   .menu-dropdown[_ngcontent-ng-c1006591452]{background:#272729;border-color:#ff4500;box-shadow:0 4px 12px #0000004d}.dark-mode[_ngcontent-ng-c1006591452]   .nsfw-toggle[_ngcontent-ng-c1006591452]:hover{background-color:#ff450026}.dark-mode[_ngcontent-ng-c1006591452]   .nsfw-toggle[_ngcontent-ng-c1006591452]   input[type=checkbox][_ngcontent-ng-c1006591452]{border-color:#ff4500}.dark-mode[_ngcontent-ng-c1006591452]   .nsfw-toggle[_ngcontent-ng-c1006591452]   span[_ngcontent-ng-c1006591452]{color:#fff}.mobile[_ngcontent-ng-c1006591452]   .menu-dropdown[_ngcontent-ng-c1006591452]{position:fixed;right:1rem;min-width:unset;width:calc(100% - 2rem)}.age-verification-overlay[_ngcontent-ng-c1006591452]{position:fixed;inset:0;background-color:#000000b3;display:flex;justify-content:center;align-items:center;z-index:2000}.age-verification-modal[_ngcontent-ng-c1006591452]{background:#fff;padding:2rem;border-radius:12px;max-width:400px;width:90%;text-align:center}.dark-mode[_ngcontent-ng-c1006591452]   .age-verification-modal[_ngcontent-ng-c1006591452]{background:#272729;color:#fff}.age-verification-buttons[_ngcontent-ng-c1006591452]{display:flex;gap:1rem;justify-content:center;margin-top:1.5rem}.age-button[_ngcontent-ng-c1006591452]{padding:.5rem 1.5rem;border:2px solid #ff4500;border-radius:20px;background:transparent;color:#ff4500;cursor:pointer;transition:all .3s ease}.age-button[_ngcontent-ng-c1006591452]:hover{background:#ff4500;color:#fff}.dark-mode[_ngcontent-ng-c1006591452]   .age-button[_ngcontent-ng-c1006591452]{color:#ff4500;border-color:#ff4500}.dark-mode[_ngcontent-ng-c1006591452]   .age-button[_ngcontent-ng-c1006591452]:hover{background:#ff4500;color:#1a1a1b}.no-results[_ngcontent-ng-c1006591452]{text-align:center;padding:2rem;color:inherit}.nsfw-notice[_ngcontent-ng-c1006591452]{margin-top:1rem;padding:1rem;border-radius:8px;background-color:#ff45001a}.nsfw-toggle-button[_ngcontent-ng-c1006591452]{margin-top:.5rem;padding:.5rem 1rem;border:2px solid #ff4500;border-radius:20px;background:transparent;color:#ff4500;cursor:pointer;transition:all .3s ease;font-weight:500}.nsfw-toggle-button[_ngcontent-ng-c1006591452]:hover{background-color:#ff4500;color:#fff}.dark-mode[_ngcontent-ng-c1006591452]   .nsfw-notice[_ngcontent-ng-c1006591452]{background-color:#ff450026}.dark-mode[_ngcontent-ng-c1006591452]   .nsfw-toggle-button[_ngcontent-ng-c1006591452]:hover{color:#1a1a1b}</style></head>
<body>
  <app-root ng-version="19.2.1" _nghost-ng-c1006591452 ng-server-context="ssg"><main _ngcontent-ng-c1006591452 class="main"><div _ngcontent-ng-c1006591452 class="content"><header _ngcontent-ng-c1006591452 class="header"><h1 _ngcontent-ng-c1006591452>Reddit Browser</h1><div _ngcontent-ng-c1006591452 class="header-controls"><div _ngcontent-ng-c1006591452 class="theme-toggle-wrapper"><label _ngcontent-ng-c1006591452 class="switch"><input _ngcontent-ng-c1006591452 type="checkbox"><span _ngcontent-ng-c1006591452 class="slider"></span></label></div><div _ngcontent-ng-c1006591452 class="menu-wrapper"><button _ngcontent-ng-c1006591452 class="menu-button"><span _ngcontent-ng-c1006591452 class="dots">⋮</span></button><!----></div></div></header><div _ngcontent-ng-c1006591452 class="search-section"><div _ngcontent-ng-c1006591452 class="search-bar"><input _ngcontent-ng-c1006591452 type="text" placeholder="Search posts..." class="search-input ng-untouched ng-pristine ng-valid" value><button _ngcontent-ng-c1006591452 class="search-button">Search</button></div><div _ngcontent-ng-c1006591452 class="subreddit-filter"><div _ngcontent-ng-c1006591452 class="autocomplete-container"><input _ngcontent-ng-c1006591452 type="text" placeholder="Enter subreddit name" class="filter-input ng-untouched ng-pristine ng-valid" value><!----></div><button _ngcontent-ng-c1006591452 class="filter-button">Filter Subreddit</button></div></div><!----><!----><div _ngcontent-ng-c1006591452 class="posts"><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://a.thumbs.redditmedia.com/_s--_XFTGEkW-zhknwx08uHXDkR-kzsMkhoLBmhSyd0.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>Giveaway! Comment to enter. U.S. only (sorry). Fluance RT82 Reference Table w/ a Ortofon OM10 Cartridge</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/whyforyoulookmeonso</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">2,954 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/vinyl</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/vinyl/comments/1j6goi3/giveaway_comment_to_enter_us_only_sorry_fluance/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://b.thumbs.redditmedia.com/v4AkM32H5ZIlCImDRKURP0vESMytrjMSEv0hOsOa08I.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>Reddit’s automatic moderation tool is flagging the word ‘Luigi’ as potentially violent — even in a Nintendo context</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/marketrent</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">62,581 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/technology</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/technology/comments/1j6egru/reddits_automatic_moderation_tool_is_flagging_the/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://b.thumbs.redditmedia.com/41SodyHFRWm_tafAlhKKdCe-FONe2JEntPP7bHOmqlI.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>Charlottesville, Virginia (3-8-2025)</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/skeptoid79</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">17,299 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/pics</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/pics/comments/1j6l0y4/charlottesville_virginia_382025/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://b.thumbs.redditmedia.com/XVSC7qwCvbnv6wdF9HRZSA4EiQzU_FSoyJmkGNlooaM.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>Trump Turnberry Vandalised Overnight</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/paul_67</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">78,701 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/Scotland</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/Scotland/comments/1j6ealo/trump_turnberry_vandalised_overnight/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://b.thumbs.redditmedia.com/0Qtn_jiB6iGNO2JmyA663nK7IoY3615PqfHiLHoB3-k.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>never met an e-scooter owner I’ve liked</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/zor-zor</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">38,396 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/mildlyinfuriating</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/mildlyinfuriating/comments/1j63rov/never_met_an_escooter_owner_ive_liked/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://a.thumbs.redditmedia.com/_AbbBTd8jpGHJzHb-ISDJ96ZSNb-8-KG0S7BJenTnj8.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>When Henry Cavill had to prove to his nephews teachers that his Uncle was in fact Superman.</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/Lotion-Lover</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">25,956 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/interestingasfuck</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/interestingasfuck/comments/1j6l56o/when_henry_cavill_had_to_prove_to_his_nephews/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://b.thumbs.redditmedia.com/99wbD9geTYNjid10li_zzddn-Qt7fZCuj6V-bLodnZg.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>Elf's last stand</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/merrivius</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">23,840 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/comics</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/comics/comments/1j6ktx7/elfs_last_stand/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://b.thumbs.redditmedia.com/WCOpk4F2JWSFP-p2s2gpgJ2KpS6jHDmX_OAqTaKtbEc.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>Trump reacts to something he doesn’t like in the Oval Office on March 6th</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/Athena-NO</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">65,158 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/pics</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/pics/comments/1j6eljm/trump_reacts_to_something_he_doesnt_like_in_the/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://b.thumbs.redditmedia.com/eAozul5a3_Fyq54wegkuDqS5dY-NIiFOFHfqe_mHg7w.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>Giveaway! Original Ænima vinyl. Comment to enter.</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/whyforyoulookmeonso</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">2,265 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/ToolBand</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/ToolBand/comments/1j6g17j/giveaway_original_ænima_vinyl_comment_to_enter/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://b.thumbs.redditmedia.com/OdF6tSKhuYygUTYWhxqgKbsPgT9FoOZh3H9q_rKFMFo.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>What is the purpose of this</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/carrieminaj</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">38,274 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/DiWHY</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/DiWHY/comments/1j6fir8/what_is_the_purpose_of_this/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://b.thumbs.redditmedia.com/uS8SDsro2LiCpx85Wzp-pblkh8QE47UVODD3a8IN0zk.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>Britain blocks launch of Elon Musk’s self-driving Tesla</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/Snowfish52</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">30,093 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/worldnews</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/worldnews/comments/1j6isqx/britain_blocks_launch_of_elon_musks_selfdriving/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://b.thumbs.redditmedia.com/-SHOh1yUhXUr_fmkK2kPbIsKPCi459rhhft1Mlaa0bo.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>TIL there are an estimated 40.3 million enslaved people in the world today, three times greater than the number during the transatlantic slave trade</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/SlugOnAPumpkin</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">26,464 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/todayilearned</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/todayilearned/comments/1j6iyyp/til_there_are_an_estimated_403_million_enslaved/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://b.thumbs.redditmedia.com/-_SAHuJShhAUCvI2rFaCQw-_2y2fh_Jri8zULqQ5deE.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>Meirl</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/Anon-Zer0-Quazar</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">41,736 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/meirl</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/meirl/comments/1j6i97g/meirl/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="/assets/generic-img.png"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>What is your opinion on Canadians boycotting US goods, services and tourism?</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/icontact2011</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">2,617 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/AskReddit</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/AskReddit/comments/1j6e20f/what_is_your_opinion_on_canadians_boycotting_us/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://a.thumbs.redditmedia.com/_dOyeiS6i52caAsaYA54IH-VmFJmkGB0Wa7vw-uvp00.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>Russian mother of dead soldier received Meat Processor as gift from local authorities</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/Brilliant-Promise491</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">59,683 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/interestingasfuck</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/interestingasfuck/comments/1j6evpi/russian_mother_of_dead_soldier_received_meat/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="/assets/generic-img.png"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>Sweet vitriol's shocking rating on imdb just proves this</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/cassiopeia3636</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">2,891 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/SeveranceAppleTVPlus</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/SeveranceAppleTVPlus/comments/1j6gqxe/sweet_vitriols_shocking_rating_on_imdb_just/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://b.thumbs.redditmedia.com/6gG1iDYqAGRmRf7CaH8caXlF_gm6xb68yYDuewYkxLY.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>Tipping Culture getting out of hand day by day....</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/Roadtogateway1</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">7,126 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/SipsTea</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/SipsTea/comments/1j6k98f/tipping_culture_getting_out_of_hand_day_by_day/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="/assets/generic-img.png"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>Jokic, who was questionable tonight with an ankle injury, becomes the first player with 30 pts, 20 reb, 20 ast in a game in NBA history</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/Growsomedope</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">29,340 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/nba</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/nba/comments/1j6afil/jokic_who_was_questionable_tonight_with_an_ankle/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://b.thumbs.redditmedia.com/yVIlQXibJS7xzvQo30oRZ5GtOgNQSoEErjBqbIe8HtQ.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>EXCLUSIVE: Trump Makes Aggressive New Claim of Executive Power To Circumvent The Senate</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/BitterFuture</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">19,495 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/law</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/law/comments/1j66m89/exclusive_trump_makes_aggressive_new_claim_of/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://b.thumbs.redditmedia.com/MHTcZ_8tZ4JXFTNDHHjj715HSlj3q38xEsyM2Nwxz0I.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>When Henry Cavill had to prove to his nephews teachers that his Uncle was in fact Superman.</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/SnooWords4066</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">30,032 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/MadeMeSmile</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/MadeMeSmile/comments/1j6ir7j/when_henry_cavill_had_to_prove_to_his_nephews/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://b.thumbs.redditmedia.com/jcTZvvsrzr1lRhp5sp3VdBqM8F4cJ-PmHJZvmm-0c-M.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>Kremlin rejects possibility of compromise and refuses to discuss ceasefire</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/Party_Judgment5780</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">24,283 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/worldnews</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/worldnews/comments/1j6dh7h/kremlin_rejects_possibility_of_compromise_and/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://external-preview.redd.it/dHZ2NXM2d25sZW5lMUqEc1utY9qpfp8XjTBF4pFPedScQO3YECAT0wNzZGOo.png?width=140&amp;amp;height=140&amp;amp;crop=140:140,smart&amp;amp;format=jpg&amp;amp;v=enabled&amp;amp;lthumb=true&amp;amp;s=b5ceb0c48e34904216fb22bebc3d9dcfea04d760"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>how in the world</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/greedygarlic69</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">31,986 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/blackmagicfuckery</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/blackmagicfuckery/comments/1j6afk4/how_in_the_world/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://b.thumbs.redditmedia.com/wqTq2AvXjppVL-MXwXdmJ5_9dCtsuFgAFLjjCXtW7WU.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>We have a winner!</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/zzill6</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">7,825 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/BlackPeopleTwitter</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/BlackPeopleTwitter/comments/1j6m8es/we_have_a_winner/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="https://b.thumbs.redditmedia.com/lUSBqbvgpuJ0HEvt8XjAc2FOzKtVrPUSlzs-_uTuDBA.jpg"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>No hurricane has ever crossed the equator</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/spyalien</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">13,422 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/MapPorn</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/MapPorn/comments/1j6jq9w/no_hurricane_has_ever_crossed_the_equator/"> View on Reddit </a></div></article><article _ngcontent-ng-c1006591452 class="post-card"><img _ngcontent-ng-c1006591452 alt="Post thumbnail" class="post-thumbnail" src="/assets/generic-img.png"><div _ngcontent-ng-c1006591452 class="post-content"><h2 _ngcontent-ng-c1006591452>Trump Team Is Pivoting to No Pain, No Gain as Economic Message</h2><div _ngcontent-ng-c1006591452 class="post-meta"><span _ngcontent-ng-c1006591452 class="post-meta-author">Posted by u/DomesticErrorist22</span><span _ngcontent-ng-c1006591452 class="post-meta-votes">7,567 Upvotes</span><span _ngcontent-ng-c1006591452 class="post-meta-subreddit">r/Economics</span></div><a _ngcontent-ng-c1006591452 target="_blank" class="post-link" href="https://reddit.com/r/Economics/comments/1j6h25y/trump_team_is_pivoting_to_no_pain_no_gain_as/"> View on Reddit </a></div></article><!----></div><!----><!----></div><!----></main></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-6UCFUCVO.js" type="module"></script>
</body></html>`;