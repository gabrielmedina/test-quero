import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__item">
            <a className="header__link header__link_help" href="/">
              <i className="header__link-icon fas fa-info-circle"></i>
              <span className="header__link-title u-show_lg u-show_xl">
                Como funciona
              </span>
              <span className="header__link-title u-show_xs u-show_sm u-show_md">
                Ajuda
              </span>
            </a>

            <a
              className="header__link header__link_whatsapp u-show_xl"
              target="_blank"
              rel="noopener noreferrer"
              href="https://web.whatsapp.com/send?l=pt&phone=5508001232222"
            >
              <i className="header__link-icon fab fa-whatsapp"></i>
              <div className="header__link-content">
                <span className="header__link-title">0800 123 2222</span>
                <span className="header__link-subtitle">
                  Envie mensagem ou ligue
                </span>
              </div>
            </a>
          </div>

          <h1 className="header__logo">
            <a className="header__logo-link" href="/">
              <img
                className="header__logo-image"
                src="/images/logo.svg"
                alt="Quero Bolsas"
              />
            </a>
          </h1>

          <div className="header__item">
            <a className="header__link header__link_account" href="/">
              <i className="header__link-icon fas fa-user-circle"></i>
              <span className="header__link-title u-show_lg u-show_xl">
                Gabriel Medina
              </span>
              <span className="header__link-title u-show_xs u-show_sm u-show_md">
                Conta
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
