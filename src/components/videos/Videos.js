import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = () => {
    fetch("http://localhost:4000/videos")
      .then((r) => r.json())
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    getVideos();
  }, []);

  const renderVideos = videos.map((video) => {
    return <VideoCard key={video.id} video={video} />;
  });

  return <>{renderVideos}</>;
};

export default Videos;
