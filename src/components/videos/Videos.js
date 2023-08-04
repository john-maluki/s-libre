import React, { useContext } from "react";
import VideoCard from "./VideoCard";
import { VideosContext } from "../../contexts/VideosContext";

const Videos = () => {
  const videos = useContext(VideosContext);
  const renderVideos = videos.map((video) => {
    return <VideoCard key={video.id} video={video} />;
  });

  return <>{renderVideos}</>;
};

export default Videos;
