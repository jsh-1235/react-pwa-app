import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Home.module.css";
import "../../Components.css";
import { AiFillQuestionCircle } from "react-icons/ai";

import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  const handleAbout = (e) => {
    e.preventDefault();

    navigate("/about");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>Select Mode</header>
      <main className={styles.menu}>
        <div className={styles.buttonStyle}>
          <div className="button">
            <div className="button" onClick={(e) => navigate("/main")}>
              Canvas Grid
            </div>
          </div>
        </div>
        <div className={styles.buttonStyle}>
          <div className="button" onClick={(e) => navigate("/intro")}>
            SVG Grid
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <AiFillQuestionCircle className="image-button" size="64" onClick={handleAbout} />
      </footer>
    </div>
  );
}
