import PropTypes from 'prop-types';

function Navbar({ setCategory }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News Point</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" style={{ cursor:"pointer" }}>
              <div className="nav-link" onClick={() => setCategory("Technology")}>Technology</div>
            </li>
            <li className="nav-item" style={{ cursor:"pointer"}}>
              <div className="nav-link" onClick={() => setCategory("Business")}>Business</div>
            </li>
            <li className="nav-item" style={{ cursor:"pointer" }}>
              <div className="nav-link" onClick={() => setCategory("Health")}>Health</div>
            </li>
            <li className="nav-item" style={{ cursor:"pointer"}}>
              <div className="nav-link" onClick={() => setCategory("Sports")}>Sports</div>
            </li>
            <li className="nav-item" style={{ cursor:"pointer" }}>
              <div className="nav-link" onClick={() => setCategory("Entertainment")}>Entertainment</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default Navbar;
