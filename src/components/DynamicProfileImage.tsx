"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export default function DynamicProfileImage({ src, alt = "Profile image", className = "" }: Props) {
  const [aspect, setAspect] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      if (!mounted) return;
      if (img.naturalWidth && img.naturalHeight) {
        setAspect(img.naturalWidth / img.naturalHeight);
      }
    };
    img.onerror = () => {
      if (!mounted) return;
      setAspect(null);
    };

    return () => {
      mounted = false;
    };
  }, [src]);

  // Compute CSS aspect-ratio value when available
  const style = aspect ? { aspectRatio: `${aspect}` } : undefined;

  return (
    <div className={`w-full rounded-lg overflow-hidden relative ${className}`} style={style}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
