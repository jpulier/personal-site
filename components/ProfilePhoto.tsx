"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";

const GAME_URL = "https://game-liart-tau.vercel.app";

export default function ProfilePhoto() {
  const imgRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    const el = imgRef.current;
    if (!el) return;

    el.classList.add("portrait-launch");

    el.addEventListener(
      "animationend",
      () => {
        window.location.href = GAME_URL;
      },
      { once: true }
    );
  }, []);

  return (
    <div
      ref={imgRef}
      className="profile-photo-wrapper"
      onClick={handleClick}
    >
      <Image
        src="/portrait.jpg"
        alt="PULYAY"
        width={200}
        height={200}
        priority
        className="profile-photo"
      />
    </div>
  );
}
