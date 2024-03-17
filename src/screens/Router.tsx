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
import Travel from "./Travel";
import Gallery from "./Gallery";
import Reservation from "./Reservation";
import Contact from "./Contact";

// 이 방식은 createBrowserRouter 방식입니다.
const router = createBrowserRouter([
  {
    // 전체 route들의 컴포넌트 같은 것
    path: "/",
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
        path: "travel",
        element: <Travel />,
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
]);

export default router;
