import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import CreatePosts from "./components/Post/CreatePosts";
import AllPostList from "./components/Post/AllPostList";
import Navbar from "./components/Navbar/Navbar";
import SinglePost from "./components/Post/SinglePost";
import UpdatePost from "./components/Post/UpdatePost";
import { Toaster } from "react-hot-toast";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<AllPostList />} />
        <Route path="/create-post" element={<CreatePosts />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/update-post/:id" element={<UpdatePost />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
