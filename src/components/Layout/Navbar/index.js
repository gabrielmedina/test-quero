import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayNavbarList: false,
    };
  }

  toggleNavbarList = (prevState) => {
    this.setState({
      displayNavbarList: !this.state.displayNavbarList,
    });
  };

  render() {
    const { displayNavbarList } = this.state;

    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar__content">
            <a className="navbar__link navbar__link_root" href="/">
              Minha conta
            </a>

            <button
              className="navbar__link navbar__link_expansive-button"
              aria-expanded={displayNavbarList}
              aria-haspopup={displayNavbarList}
              aria-controls="navbar-main"
              onClick={this.toggleNavbarList}
            >
              Menu
              <i
                className={`navbar__link-icon far ${
                  displayNavbarList ? "fa-angle-up" : "fa-angle-down"
                }`}
              ></i>
            </button>

            <ul
              id="navbar-main"
              className={`navbar__list navbar__list_expansive ${
                displayNavbarList ? "navbar__list_expanded" : ""
              }`}
            >
              <li className="navbar__item">
                <a className="navbar__link" href="/">
                  Pré-matrículas
                </a>
              </li>
              <li className="navbar__item">
                <a
                  className="navbar__link navbar__link_current"
                  aria-current="page"
                  href="/"
                >
                  Bolsas favoritas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
