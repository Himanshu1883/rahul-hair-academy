import { brandAssets, site } from "@/content";

export function preloadSiteMedia() {
  const images = [
    brandAssets.logoFull,
    brandAssets.logoMonogram,
    site.hero.images.dark.src,
    site.hero.images.light.src,
    site.founder.portrait,
    site.about.image,
    site.about.classroomImage,
    ...site.courses.items.map((c) => c.heroImage),
    ...site.gallery.items.map((g) => g.src),
    ...site.journey.stages.map((s) => s.image),
    ...site.team.members.map((m) => m.photo).filter(Boolean),
    site.services.image,
    site.certification.certificateImage,
  ].filter(Boolean);

  for (const src of new Set(images)) {
    const img = new Image();
    img.decoding = "async";
    img.src = src;
  }

  const videos = [
    ...site.igSection.reels.map((r) => r.video),
    ...site.beforeAfter.items.map((i) => i.video),
    site.team.reel.video,
    site.hero.video,
  ].filter(Boolean);

  const warm = () => {
    for (const src of new Set(videos)) {
      const v = document.createElement("video");
      v.muted = true;
      v.defaultMuted = true;
      v.playsInline = true;
      v.preload = "auto";
      v.src = src;
      v.load();
    }
  };

  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(warm, { timeout: 800 });
  } else {
    window.setTimeout(warm, 1);
  }
}
