import "./App.css";
import { Fragment, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Post from "./pages/Post";
import Write from "./pages/Write";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewsModal from "./components/NewsModal";
import { CatContext } from "./contexts/CatContext";
import { PostContext } from "./contexts/PostContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

/*
  Toggle show modal in modal component
  Set categories through context provider to navbar and home
*/

function App() {
  const Layout = () => {
    const [showModal, setShowModal] = useState(false);

    const [cat, setCat] = useState(0);
    const [currentPost, setCurrentPost] = useState(1);

    //If showModal is true prevent scrolling
    showModal
      ? (document.body.style = "hidden")
      : (document.body.style = "auto");

    return (
      <Fragment>
        <CatContext.Provider value={{ cat, setCat }}>
          <PostContext.Provider value={{ currentPost, setCurrentPost }}>
            <Navbar toggle={() => setShowModal(!showModal)} />
            {showModal && <NewsModal toggle={() => setShowModal(!showModal)} />}
            <Outlet />
            <Footer toggle={() => setShowModal(!showModal)} />
          </PostContext.Provider>
        </CatContext.Provider>
      </Fragment>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/post/:id",
          element: <Post />,
        },
        {
          path: "/write",
          element: <Write />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
