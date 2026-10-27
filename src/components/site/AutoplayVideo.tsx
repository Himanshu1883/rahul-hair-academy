import { useAutoplayVideo } from "@/hooks/use-autoplay-video";

export function AutoplayVideo({
  src,
  unmuted,
  className,
  label,
}: {
  src: string;
  unmuted: boolean;
  className?: string;
  label: string;
}) {
  const ref = useAutoplayVideo(unmuted);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      muted={!unmuted}
      loop
      playsInline
      preload="auto"
      controls={false}
      disablePictureInPicture
      className={className}
      aria-label={label}
    />
  );
}
