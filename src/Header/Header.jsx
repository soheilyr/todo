import styles from "./Header.module.css";
const Header = () => {
  console.log(styles);
  return (
    <header className={styles.headerContainer}>
      <h1>Todo List</h1>
    </header>
  );
};
export default Header;
