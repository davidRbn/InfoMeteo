import React, { useEffect, useRef } from "react";
import "./videoBackground.scss";
import video from "../../assets/video/nuage.mp4";

const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Vous pouvez ajuster la valeur ici
      // videoRef.current.play(); // Pour lancer la lecture automatiquement
    }
  };

  useEffect(() => {
    const currentVideo: HTMLVideoElement | null = videoRef.current;

    if (currentVideo) {
      currentVideo.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      // Nettoyer les écouteurs d'événements lors du démontage du composant
      if (currentVideo) {
        currentVideo.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      }
    };
  }, []);

  return (
    <div className="video-background">
      <video
        src={video}
        autoPlay
        muted
        loop
        ref={videoRef}
        onLoadedMetadata={handleLoadedMetadata}
      />
      Your browser does not support the video tag.
    </div>
  );
};

export default VideoBackground;
