import { useId } from "react";

import { cn } from "@/lib/utils";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("shrink-0", className)} aria-hidden="true">
      <path
        fill="#25D366"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Z"
      />
      <path
        fill="#fff"
        d="M12.05 3.67a8.24 8.24 0 0 1 8.23 8.24c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.2 8.2 0 0 1-1.26-4.38 8.24 8.24 0 0 1 8.25-8.23m-3.52 3.66c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.09 0 1.24.89 2.42 1 2.58.12.17 1.76 2.82 4.39 3.82 2.19.83 2.64.67 3.11.62.48-.05 1.54-.63 1.76-1.24.22-.6.22-1.12.15-1.24-.07-.11-.26-.18-.54-.31s-1.54-.76-1.78-.85-.41-.13-.59.13-.67.85-.83 1.02-.3.19-.56.06c-.26-.13-1.06-.39-2.02-1.25-.75-.66-1.25-1.48-1.4-1.73-.14-.25-.02-.39.11-.51.12-.11.26-.3.39-.44.13-.15.17-.25.26-.41.09-.17.04-.31-.02-.44-.07-.13-.58-1.4-.8-1.92-.21-.51-.42-.44-.59-.44h-.5"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const gid = `ig-${uid}`;
  return (
    <svg viewBox="0 0 24 24" className={cn("shrink-0", className)} aria-hidden="true">
      <defs>
        <radialGradient id={gid} cx="0.3" cy="1.07" r="1.2">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6.2" fill={`url(#${gid})`} />
      <rect x="2.4" y="2.4" width="19.2" height="19.2" rx="5.2" fill="none" stroke="#fff" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.35" fill="none" stroke="#fff" strokeWidth="1.7" />
      <circle cx="17.35" cy="6.65" r="1.15" fill="#fff" />
    </svg>
  );
}
