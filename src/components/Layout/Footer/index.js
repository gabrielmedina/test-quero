import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <div className="container">
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <a
                className="footer__contact-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://web.whatsapp.com/send?l=pt&phone=5508001232222"
              >
                <i className="footer__contact-link-icon fab fa-whatsapp"></i>
                <div className="footer__contact-link-content">
                  <span className="footer__contact-link-title">0800 123 2222</span>
                  <span className="footer__contact-link-subtitle">
                    Seg-Sex de 8h às 22h
                  </span>
                </div>
              </a>
            </li>
            <li className="footer__contact-item">
              <a className="footer__contact-link" href="/">
                <i className="footer__contact-link-icon fal fa-comments"></i>
                <div className="footer__contact-link-content">
                  <span className="footer__contact-link-title">Chat ao vivo</span>
                  <span className="footer__contact-link-subtitle">
                    Seg-Sex de 8h às 22h
                  </span>
                </div>
              </a>
            </li>
            <li className="footer__contact-item">
              <a className="footer__contact-link" href="/">
                <i className="footer__contact-link-icon fal fa-envelope"></i>
                <div className="footer__contact-link-content">
                  <span className="footer__contact-link-title">Mange um e-mail</span>
                  <span className="footer__contact-link-subtitle">
                    Respondemos rapidinho
                  </span>
                </div>
              </a>
            </li>
            <li className="footer__contact-item">
              <a className="footer__contact-link" href="/">
                <i className="footer__contact-link-icon fal fa-info-circle"></i>
                <div className="footer__contact-link-content">
                  <span className="footer__contact-link-title">Central de ajuda</span>
                  <span className="footer__contact-link-subtitle">
                    Encontre todas as respostas
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__copyright">
        <div className="container">
          <small className="footer__copyright-text">
            Feito com <i className="footer__copyright-icon far fa-heart"></i> pela Quero Educação
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
