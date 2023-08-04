import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import VideosPage from "../pages/VideosPage";
import TopicsPage from "../pages/TopicsPage";
import BooksPage from "../pages/BooksPage";
import Users from "../components/users/Users";
import FollowedUsers from "../components/users/FollowedUsers";
import Topics from "../components/topics/Topics";
import FollowedTopics from "../components/topics/FollowedTopics";
import Videos from "../components/videos/Videos";
import FollowedVideos from "../components/videos/FollowedVideos";
import Books from "../components/books/Books";
import FollowedBooks from "../components/books/FollowedBooks";

const AppRoutes = ({ setUsers }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage setUsers={setUsers} />}>
        <Route index element={<Users />} />
        <Route path="followed_users" element={<FollowedUsers />} />
      </Route>
      <Route path="topics" element={<TopicsPage />}>
        <Route index element={<Topics />} />
        <Route path="followed_topics" element={<FollowedTopics />} />
      </Route>
      <Route path="videos" element={<VideosPage />}>
        <Route index element={<Videos />} />
        <Route path="followed_videos" element={<FollowedVideos />} />
      </Route>
      <Route path="books" element={<BooksPage />}>
        <Route index element={<Books />} />
        <Route path="followed_books" element={<FollowedBooks />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
