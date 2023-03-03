import React from "react";

import styles from "./ECG.module.css";

export default function ECG() {
  return (
    <div class={styles.wrapper}>
      <header class={styles.header}>header</header>
      <main class={styles.main}>
        <aside class={styles.aside}>aside</aside>
        <section class={styles.contents}>contents</section>
      </main>
      <footer class={styles.footer}>
        <a href="/home">Home</a>
      </footer>
    </div>
  );
}
