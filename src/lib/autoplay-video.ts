/** Safari / iOS only autoplay when muted is an HTML attribute, not just a JS property. */
export function armMutedAutoplay(el: HTMLVideoElement) {
  el.defaultMuted = true;
  el.muted = true;
  el.playsInline = true;
  el.setAttribute("muted", "");
  el.setAttribute("playsinline", "");
  el.setAttribute("webkit-playsinline", "true");
  el.setAttribute("autoplay", "");
}

export function tryPlay(el: HTMLVideoElement) {
  const play = el.play();
  if (play) void play.catch(() => undefined);
}
