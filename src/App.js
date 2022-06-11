import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Blog from "./Component/Blog/Blog";
import Home from "./Component/Home/Home";
import SingleProject from "./Component/Home/SingleProject";
import Footer from "./Component/Shared/Footer";
import Navbar from "./Component/Shared/Navbar";
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="singleProject/:id" element={<SingleProject />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
