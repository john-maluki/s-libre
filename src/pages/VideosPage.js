import React,{useState, useEffect} from "react";
import RightMainBar from "../components/RightMainBar";
import Videos from "../components/videos/Videos";
import {MAIN_DOMAIN } from "../utils/constants"

const VideosPage = () => {
  const [videos, setVideos] = useState([]);
  const [videosComments, setVideoComments] =useState([]); 
  const fetchVideoCommentsFromServer = () => {
    fetch(`${ MAIN_DOMAIN }/videos_comments`)
      .then((resp) => resp.json())
      .then((videos_Comments) => setVideos(videos_Comments));
  };

  const fetchVideosFromServer = () => {
    fetch(`${ MAIN_DOMAIN }/videos`)
      .then((resp) => resp.json())
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    fetchVideoCommentsFromServer();
  }, []);

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
            <Videos />
          </div>
        </div>
      </section>
      <RightMainBar />
    </>
  );
};

export default VideosPage;
