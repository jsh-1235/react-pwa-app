import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Home.module.css";
import "../../Components.css";
import { AiFillCloseCircle } from "react-icons/ai";

import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // const handleTabClose = (event) => {
    //   event.preventDefault();
    //   console.log("beforeunload event triggered");
    //   return (event.returnValue = "Are you sure you want to exit?");
    // };
    // window.addEventListener("beforeunload", handleTabClose);
    // return () => {
    //   window.removeEventListener("beforeunload", handleTabClose);
    // };
  }, []);

  const handleClose = (e) => {
    e.preventDefault();

    // window.close();

    // window.open("about:blank", "_self").close();
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>제품 선택</header>
      <main className={styles.menu}>
        <div className={styles.buttonStyle}>
          <div className="button">
            <div className="button" onClick={(e) => navigate("/main")}>
              Create
            </div>
          </div>
        </div>
        <div className={styles.buttonStyle}>
          <div className="button" onClick={(e) => navigate("/intro")}>
            Play
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <AiFillCloseCircle className="image-button" size="64" onClick={handleClose} />
      </footer>
    </div>
  );
}
