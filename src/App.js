import React, { Suspense } from "react";
import { useEffect } from "react";

import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

const Intro = React.lazy(() => import("./pages/intro/Intro"));
const Home = React.lazy(() => import("./pages/home/Home"));
const About = React.lazy(() => import("./pages/About"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export default function App() {
  const location = useLocation();

  useEffect(() => {
    console.group("App");
    console.log(location.pathname);
    console.groupEnd("App");

    // if (location.pathname === "/") navigate("/intro");
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home title="Home" />} />
        <Route path="/intro" element={<Intro title="Intro" />} />
        <Route path="/about" element={<About />} />
        <Route path="/none" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
