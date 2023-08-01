import React from "react";
import RightMainBar from "../components/RightMainBar";
import VideoCard from "../components/VideoCard";
import Videos from "../components/Videos";

const VideosPage = () => {
  return (
    <>
      <section class="main__content-pane">
        <div id="videos_modal" class="container-card">
          <div class="container-card__header">
            <h1 class="container-card__page">Videos</h1>
            <div class="container-card__tabs">
              <h4>All</h4>
              <h4>Following</h4>
            </div>
          </div>
          <div id="container-card__content" class="container-card__content">
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
