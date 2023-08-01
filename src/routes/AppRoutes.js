import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import VideosPage from "../pages/VideosPage";
import TopicsPage from "../pages/TopicsPage";
import BooksPage from "../pages/BooksPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/topics" element={<TopicsPage />} />
      <Route path="/videos" element={<VideosPage />} />
      <Route path="/books" element={<BooksPage />} />
    </Routes>
  );
};

export default AppRoutes;
