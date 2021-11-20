import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Haeder from "./Header";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Haeder />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
