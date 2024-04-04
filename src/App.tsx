import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
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
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
