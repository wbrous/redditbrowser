
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/redditbrowser/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/redditbrowser"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 706, hash: '571efd5ac8b13c5bd7e28296b42100d4d1bd519d4c152a40e21a0e1417a39055', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1219, hash: '667be8c14eaec560f5dcb289213f14d8676f0294bf7ed7c973823fb8f1c24615', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 37447, hash: 'aba76527b5b77b2ffd03ebe6d5858e4bc8d4aeac0cb6d954150e1c87b5696ec9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
