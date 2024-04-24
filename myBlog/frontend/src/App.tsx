import logo from "./assets/logo.png";

import "./App.css";
import CreatePosts from "./components/Post/CreatePosts";

function App() {
  return (
    <>
      <img src={logo} width={200} alt="logo" />
      <h1>Hi Mom!</h1>
      <CreatePosts />
    </>
  );
}

export default App;
