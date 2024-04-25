import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import CreatePosts from "./components/Post/CreatePosts";
import AllPostList from "./components/Post/AllPostList";
import Navbar from "./components/Navbar/Navbar";
import SinglePost from "./components/Post/SinglePost";
import UpdatePost from "./components/Post/UpdatePost";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllPostList />} />
        <Route path="/create-post" element={<CreatePosts />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/update-post/:id" element={<UpdatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
