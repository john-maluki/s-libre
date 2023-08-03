import React, { useEffect, useState } from "react";
import RightMainBar from "../components/RightMainBar";
import Videos from "../components/videos/Videos";
import ShareVideoForm from "../components/videos/ShareVideoForm";
import Search from "../components/Search";
import ShareButton from "../components/ShareButton";
import { MAIN_DOMAIN } from "../utils/constants";

const VideosPage = () => {
  const [showVideoForm, setShowVideoForm] = useState(false);
  const [videos, setVideos] = useState([]);
  // const [videosComments, setVideoComments] = useState([]);

  const showForm = () => {
    setShowVideoForm(!showVideoForm);
  };

  // const fetchVideoCommentsFromServer = () => {
  //   fetch(`${MAIN_DOMAIN}/videos_comments`)
  //     .then((resp) => resp.json())
  //     .then((videosComments) => setVideoComments(videosComments));
  // };

  const fetchVideosFromServer = () => {
    fetch(`${MAIN_DOMAIN}/videos`)
      .then((resp) => resp.json())
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    fetchVideosFromServer();
    // fetchVideoCommentsFromServer();
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
              <h4>All</h4>
              <h4>Following</h4>
            </div>
          </div>
          <div id="container-card__content" className="container-card__content">
            {/* <!-- Videos list goes here --> */}
            <Videos videos={videos} />
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
