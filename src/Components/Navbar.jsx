import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg menu navbar-dark header">
        <div className="container-fluid enlaces">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul">
              <li className="nav-item">
                <Link to="/" className="text-white ms-3 text-decoration-none">
                  🏡 Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/favoritos"
                  className="text-white ms-3 text-decoration-none"
                >
                  📒Favorites
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
