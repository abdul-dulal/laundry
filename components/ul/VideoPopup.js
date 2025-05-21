"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function VideoPopup({ isOpen, togglePopup }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      onClick={togglePopup}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75"
    >
      <button
        onClick={togglePopup}
        className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 p-[2px] rounded-full border border-solid border-gray-300 text-2xl text-white"
      >
        ×
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[90vw] h-[90vh] rounded bg-black"
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/SZEflIVnhH8?si=Bh49mJbQuwQ-VpmA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>,
    document.body
  );
}
