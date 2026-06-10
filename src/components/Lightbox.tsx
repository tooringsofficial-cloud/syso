"use client";

import { useEffect, useRef, useState, TouchEvent, MouseEvent } from "react";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  
  const imgRef = useRef<HTMLImageElement>(null);
  
  // Drag start positions
  const dragStart = useRef({ x: 0, y: 0 });
  
  // Pinch-to-zoom properties
  const initialDistance = useRef<number | null>(null);
  const initialScale = useRef(1);

  // Lock body scroll when open
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Escape key support
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Helper to get distance between two touch points
  const getTouchDistance = (touches: React.TouchList) => {
    if (touches.length < 2) return 0;
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Touch Events for Mobile Pinch-to-Zoom & Dragging
  const handleTouchStart = (e: TouchEvent<HTMLImageElement>) => {
    if (e.touches.length === 1) {
      // Single touch: setup drag
      setIsDragging(true);
      dragStart.current = {
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      };
    } else if (e.touches.length === 2) {
      // Multi touch: setup pinch zoom
      setIsDragging(false);
      const dist = getTouchDistance(e.touches);
      initialDistance.current = dist;
      initialScale.current = scale;
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLImageElement>) => {
    if (e.touches.length === 1 && isDragging && scale > 1) {
      // Dragging scaled image
      const newX = e.touches[0].clientX - dragStart.current.x;
      const newY = e.touches[0].clientY - dragStart.current.y;
      
      // Keep within bounds
      const maxDragX = (scale - 1) * (imgRef.current?.clientWidth ?? 0) / 2;
      const maxDragY = (scale - 1) * (imgRef.current?.clientHeight ?? 0) / 2;
      
      setPosition({
        x: Math.max(-maxDragX, Math.min(maxDragX, newX)),
        y: Math.max(-maxDragY, Math.min(maxDragY, newY))
      });
    } else if (e.touches.length === 2 && initialDistance.current !== null) {
      // Pinching
      const dist = getTouchDistance(e.touches);
      if (dist > 0) {
        const factor = dist / initialDistance.current;
        const newScale = Math.max(1, Math.min(4, initialScale.current * factor));
        setScale(newScale);
        
        // Reset position if we zoom out to 1
        if (newScale === 1) {
          setPosition({ x: 0, y: 0 });
        }
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    initialDistance.current = null;
    
    // Auto reset if scale is close to 1
    if (scale < 1.05) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  // Mouse Events for Desktop click-to-zoom & Dragging
  const handleMouseDown = (e: MouseEvent<HTMLImageElement>) => {
    if (e.button !== 0) return; // Only left click
    if (scale > 1) {
      setIsDragging(true);
      dragStart.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y
      };
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLImageElement>) => {
    if (isDragging && scale > 1) {
      const newX = e.clientX - dragStart.current.x;
      const newY = e.clientY - dragStart.current.y;
      
      const maxDragX = (scale - 1) * (imgRef.current?.clientWidth ?? 0) / 2;
      const maxDragY = (scale - 1) * (imgRef.current?.clientHeight ?? 0) / 2;
      
      setPosition({
        x: Math.max(-maxDragX, Math.min(maxDragX, newX)),
        y: Math.max(-maxDragY, Math.min(maxDragY, newY))
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleImageClick = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    // Toggle zoom on double click or quick single click
    if (scale === 1) {
      setScale(2.2);
    } else {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  // Wheel zoom support
  const handleWheel = (e: React.WheelEvent<HTMLImageElement>) => {
    const delta = e.deltaY;
    const factor = delta > 0 ? 0.9 : 1.1;
    const newScale = Math.max(1, Math.min(4, scale * factor));
    setScale(newScale);
    if (newScale === 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md cursor-zoom-out animate-in fade-in duration-200 select-none"
    >
      {/* Top action bar */}
      <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10">
        <div className="text-white/80 text-xs font-medium tracking-wide pointer-events-auto">
          {scale > 1 ? (
            <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
              {Math.round(scale * 100)}% 확대됨 • 드래그하여 이동
            </span>
          ) : (
            <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
              클릭/더블터치 시 확대 • 핀치 줌 지원
            </span>
          )}
        </div>
        <button
          onClick={onClose}
          className="text-white text-3xl font-light hover:text-stone-300 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 cursor-pointer pointer-events-auto transition-colors focus:outline-none"
          aria-label="닫기"
        >
          &times;
        </button>
      </div>

      {/* Image container */}
      <div 
        className="relative w-full h-full flex items-center justify-center p-4 overflow-hidden"
        onClick={onClose}
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: isDragging ? "none" : "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            touchAction: scale > 1 ? "none" : "pinch-zoom",
          }}
          className={`max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transition-transform ${
            scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
          }`}
          onClick={handleImageClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
        />
      </div>
    </div>
  );
}
