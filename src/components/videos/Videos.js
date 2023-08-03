import React from "react";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  const renderVideos = videos.map((video) => {
    return <VideoCard key={video.id} video={video} />;
  });

  return <>{renderVideos}</>;
};

export default Videos;
