import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../context/Theme/Theme";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="footer-position">
      <footer className="text-center text-lg-start bg-light text-muted">
        <section
          className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
          style={{ background: "grey" }}
        >
          <div className="me-5 d-none d-lg-block">
            <span className="footer-text">.</span>
          </div>
        </section>

        <section className={` ${theme === "dark" && "section-footer-dark"}`}>
          <div className="container text-center text-md-start mt-0">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6
                  className={`title-section ${
                    theme === "dark" && "dark-title-section"
                  }`}
                >
                  <i className="fas fa-gem me-3"></i>Marber
                </h6>
                <p className={` ${theme === "dark" && "dark"}`}>
                  Esperamos que puedan disfrutar una experiencia de calidad a
                  través del sabor de nuestros productos.
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6
                  className={`title-section ${
                    theme === "dark" && "dark-title-section"
                  }`}
                >
                  Nuestras redes
                </h6>
                <p>
                  <a
                    href="https://www.instagram.com/cervezamarber.sj/"
                    target="_blank"
                  >
                    <img src={require("./instagram.ico")} width="30px"></img>
                  </a>
                </p>
                <p>
                  <a href="https://wa.me/5493406462025" target="_blank">
                    <img src={require("./WhatsApp.ico")} width="50"></img>
                  </a>
                </p>
                <p>
                  <a
                    href="https://goo.gl/maps/Mv1pqKGsmodxfjDTA"
                    target="_blank"
                  >
                    <img src={require("./home2.ico")} width="50px"></img>
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6
                  className={`title-section ${
                    theme === "dark" && "dark-title-section"
                  }`}
                >
                  {" "}
                  contacto
                </h6>
                <p className={` ${theme === "dark" && "dark"}`}>
                  <i className="fas fa-home me-3"></i>San Jorge, Av. L. de La
                  Torre 457
                </p>
                <p className={` ${theme === "dark" && "dark"}`}>
                  <i className="fas fa-envelope me-3"></i>
                  marber@gmail.com
                </p>
                <p className={` ${theme === "dark" && "dark"}`}>
                  <i className="fas fa-phone me-3"></i>+ 54 9 3406 462128
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ background: "grey" }}>
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="">
            Marber.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
