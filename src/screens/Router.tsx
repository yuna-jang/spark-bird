import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Header from "../components/Header";
import Home from "./Home";
import About from "./About";
import Root from "./Root";
import Explore from "./Explore";
import Trip from "./Trip";
import Reservation from "./Reservation";
import Contact from "./Contact";
import Gallery from "./Gallery";

// 이 방식은 createBrowserRouter 방식입니다.
const router = createBrowserRouter(
  [
    {
      // 전체 route들의 컴포넌트 같은 것
      path: "",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "explore",
          element: <Explore />,
        },
        {
          path: "trip",
          element: <Trip />,
        },
        {
          path: "gallery",
          element: <Gallery />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "reservation",
          element: <Reservation />,
        },
        // {
        //   path: "users/:userId",
        //   element: ,
        //   children: [
        //     {
        //       path: ,
        //       element:
        //     },
        //   ],
        // },
      ],
      // errorElement: ,
    },
  ],
  { basename: `${process.env.PUBLIC_URL}` }
);

export default router;
