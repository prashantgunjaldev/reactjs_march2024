import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const isValid = sessionStorage.getItem("access_token");
  const navigate = useNavigate();
  const logOut = () => {
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <header data-bs-theme="dark">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="logo.png"
              alt="Logo"
              width="50"
              height="34"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {isValid?.length && (
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link className="nav-link" to={"/query"}>
                    Query
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/course"}>
                    All Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/newcourse"}>
                    New Course
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="btn btn-outline-success" onClick={logOut}>
                    Log Out
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
