import Image from "next/image";
import styles from "./page.module.css";
import Start from "./layout/start";

export default function Home() {
  return (
    <div className={styles.page}>
      <Start />
    </div>
  );
}
