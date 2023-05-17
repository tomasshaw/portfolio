import styles from "./grain.module.css";

export default function Grain() {
  return (
    <div
      className={styles.noise}
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}/noise.png)`,
      }}
    />
  );
}
