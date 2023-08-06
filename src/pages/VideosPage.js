import React, { useContext, useEffect, useState } from "react";
import RightMainBar from "../components/RightMainBar";
import ShareVideoForm from "../components/videos/ShareVideoForm";
import Search from "../components/Search";
import ShareButton from "../components/ShareButton";
import { MAIN_DOMAIN } from "../utils/constants";
import { VideosContext } from "../contexts/VideosContext";
import { Link, Outlet } from "react-router-dom";
import { getLinkStyle } from "../utils/functions";
import { AuthContext } from "../contexts/AuthContext";
import LoaderComponent from "../components/LoaderComponent";

const VideosPage = () => {
  const [showVideoForm, setShowVideoForm] = useState(false);
  const [videos, setVideos] = useState([]);
  const authUser = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const showForm = () => {
    setShowVideoForm(!showVideoForm);
  };

  const fetchVideosFromServer = () => {
    setIsLoading(true);
    fetch(`${MAIN_DOMAIN}/videos`)
      .then((resp) => resp.json())
      .then((videos) => {
        setIsLoading(false);
        setVideos(videos);
      });
  };

  const likeVideo = (video) => {
    const hasLiked = checkIfUserLikedVideo(video);
    let newData;
    if (hasLiked) {
      newData = {
        ...video,
        likes: [...video.likes.filter((id) => id !== authUser.id)],
      };
    } else {
      newData = { ...video, likes: [...video.likes, authUser.id] };
    }
    updateVideoOnServer(newData);
  };

  const followVideo = (video) => {
    const hasFollowed = checkIfUserFollowedVideo(video);
    let newData;
    if (hasFollowed) {
      newData = {
        ...video,
        followers: [...video.followers.filter((id) => id !== authUser.id)],
      };
    } else {
      newData = { ...video, followers: [...video.followers, authUser.id] };
    }
    updateVideoOnServer(newData);
  };

  const checkIfUserLikedVideo = (video) => {
    return video.likes.includes(authUser.id);
  };

  const checkIfUserFollowedVideo = (video) => {
    return video.followers.includes(authUser.id);
  };

  const updateVideoOnServer = (video) => {
    fetch(`${MAIN_DOMAIN}/videos/${video.id}`, {
      method: "PATCH",
      body: JSON.stringify(video),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((video) => updateVideo(video));
  };

  const updateVideo = (video) => {
    const newVideos = videos.map((v) => (v.id === video.id ? video : v));
    setVideos(newVideos);
  };

  useEffect(() => {
    fetchVideosFromServer();
  }, []);

  const addVideo = (video) => {
    setVideos([video, ...videos]);
  };

  return (
    <>
      <section className="main__content-pane">
        <div id="videos_modal" className="container-card">
          <div className="container-card__header">
            <h1 className="container-card__page">Videos</h1>
            <div className="container-card__tabs">
              <h4>
                <Link to="../videos" style={getLinkStyle()}>
                  All
                </Link>
              </h4>
              <h4>
                <Link to="followed_videos" style={getLinkStyle()}>
                  Following
                </Link>
              </h4>
            </div>
          </div>
          <div id="container-card__content" className="container-card__content">
            {/* <!-- Videos list goes here --> */}
            {isLoading ? (
              <LoaderComponent />
            ) : (
              <VideosContext.Provider value={videos}>
                <Outlet context={[likeVideo, followVideo]} />
              </VideosContext.Provider>
            )}
          </div>
        </div>
      </section>
      <RightMainBar showForm={showForm}>
        <Search placeholder="Search Videos" />
        <ShareButton
          onAction={showForm}
          name="Share Video"
          desc="Share video tutorial with others"
        />
      </RightMainBar>
      {showVideoForm ? (
        <ShareVideoForm showForm={showForm} onAddVideo={addVideo} />
      ) : null}
    </>
  );
};

export default VideosPage;
