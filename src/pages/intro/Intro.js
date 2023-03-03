import React from "react";
import styles from "./Intro.module.css";
import logo from "./logo.svg";

import { useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("setTimeout");
      navigate("/");
    }, 1000);

    return () => {
      clearTimeout(timer);

      console.group("Intro");
      console.log("clearTimeout");
      console.groupEnd("Intro");
    };
  }, []);

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="logo" />
    </div>
  );
};

export default Intro;
