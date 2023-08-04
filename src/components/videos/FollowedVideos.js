import React, { useContext } from "react";
import { VideosContext } from "../../contexts/VideosContext";
import VideoCard from "./VideoCard";
import { AuthContext } from "../../contexts/AuthContext";

const FollowedVideos = () => {
  const videos = useContext(VideosContext);
  const authUser = useContext(AuthContext);

  const followedVideos = videos.filter((video) =>
    video.followers.includes(authUser.id)
  );
  const renderVideos = followedVideos.map((video) => {
    return <VideoCard key={video.id} video={video} />;
  });

  return <>{renderVideos.length !== 0 ? renderVideos : <p>No videos!!</p>}</>;
};

export default FollowedVideos;
