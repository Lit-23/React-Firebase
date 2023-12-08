import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/Home';
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="home">Home</Link>
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">Contact</a>
              <Link className="nav-link" to="login">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container p-5">
        <Outlet></Outlet>
      </div>
    </main>
  )
}

export default Layout
