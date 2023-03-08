import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Home.module.css";
import "../../Components.css";
import { AiFillQuestionCircle } from "react-icons/ai";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setCount, fetchAsync } from "../../store/slices/counter";

export default function Home() {
  const navigate = useNavigate();

  const reducer = useSelector((state) => state);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(reducer);
    console.log(count);

    return () => {};
  }, [count, reducer]);

  const handleAbout = (e) => {
    e.preventDefault();

    navigate("/about");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>Select Mode {count}</header>
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
        <AiFillQuestionCircle className="image-button" size="64" onClick={(e) => dispatch(setCount(count + 1))} />
        <AiFillQuestionCircle className="image-button" size="64" onClick={(e) => dispatch(fetchAsync("thunk"))} />
      </footer>
    </div>
  );
}
