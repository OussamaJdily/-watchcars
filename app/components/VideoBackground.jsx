'use client';

import { useRef, useState, useEffect } from 'react';

export function VideoBackground() {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[var(--bg-primary)] via-graphite-800 to-[var(--bg-primary)]">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${loaded ? 'opacity-45' : 'opacity-0'}`}
      >
        <source src="https://videos.pexels.com/video-files/6872474/6872474-uhd_2160_3840_25fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/6872474/6872474-hd_1080_1920_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/80 via-transparent to-[var(--bg-primary)]" />
    </div>
  );
}

export default VideoBackground;
