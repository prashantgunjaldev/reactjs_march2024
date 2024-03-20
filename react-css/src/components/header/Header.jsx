import styles from "./Header.module.css";
export default function Header() {
  // Inline
  //Decide something and then apply css

  return (
    <>
      <h1 className={styles.purple}>Header of this App 1</h1>
      <h1 className={styles.blue}>Header of this App 2</h1>
    </>
  );
}
