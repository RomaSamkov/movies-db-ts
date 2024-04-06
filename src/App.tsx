import { Link, Outlet } from "react-router-dom";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <img className={styles.logo} src="/public/cinema-ico.png" alt="Logo" />
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/movies"}>Movies</Link>
          </li>
        </ul>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
