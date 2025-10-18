// src/components/background/background.jsx
import React, { useEffect, useRef } from "react";
import "./background.css";

import video1 from "../../assets/video1.mp4";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

/**
 * Background component
 * - playStatus: Boolean -> when true plays the background video; when false shows images
 * - heroCount: 0|1|2 -> selects which background image to show
 *
 * Implementation notes:
 * - We render video + all images stacked and toggle `.visible` class to crossfade.
 * - Video is muted/playsInline/preload to improve autoplay reliability on mobile.
 * - On small screens the video is hidden to save data/CPU.
 */
const Background = ({ playStatus = false, heroCount = 0 }) => {
  const videoRef = useRef(null);

  // keep video play/pause in sync with playStatus
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (playStatus) {
      // try to play (browsers may block with sound; muted helps)
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {
        // autoplay blocked — video remains paused. That's ok.
      });
    } else {
      v.pause();
      // optional: rewind to start so when toggled it plays from beginning
      try { v.currentTime = 0; } catch (e) { /* ignore */ }
    }
  }, [playStatus]);

  const images = [image1, image2, image3];
  // sanitize heroCount
  const safeIndex = Number.isInteger(heroCount) && heroCount >= 0 && heroCount < images.length ? heroCount : 0;

  return (
    // aria-hidden true because this is decorative background
    <div className="bg-root" aria-hidden="true">
      {/* video layer */}
      <video
        ref={videoRef}
        className={`bg-media bg-video ${playStatus ? "visible" : ""}`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        // no inline children fallback needed (we provide source below)
      >
        <source src={video1} type="video/mp4" />
      </video>

      {/* image layers (stacked) — the visible one gets `.visible` */}
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`decorative background ${idx + 1}`}
          className={`bg-media bg-image ${!playStatus && idx === safeIndex ? "visible" : ""}`}
          loading={idx === safeIndex ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
};

export default Background;
