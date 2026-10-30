/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_FORMSPREE_ENDPOINT?: string;
  readonly VITE_INSTAGRAM_FEED_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
