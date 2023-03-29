function Header() {
  return (
    <div className="row">
      <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
          <div className="container">
            <a href="/" className="navbar-brand">
              Mission13_jslaugh8
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
              <ul className="navbar-nav flex-grow-1">
                <li className="nav-item">
                  <a href="/" className="nav-link text-dark">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/Podcast" className="nav-link text-dark">
                    Podcast
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/Movies" className="nav-link text-dark">
                    Video Library
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
