import React from "react";

import "./Footer.css";

import { AiFillHome, AiOutlineWhatsApp } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => (
  <div class="footer">
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Marber
              </h6>
              <p>
                Esperamos que puedan disfrutar una experiencia de calidad a
                través del sabor de nuestros productos.
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Nuestras redes</h6>
              <p>
                <a
                  href="https://www.instagram.com/cervezamarber.sj/"
                  target="_blank"
                >
                  <BsInstagram id="img" />
                </a>
              </p>
              <p>
                <a href="https://wa.me/5493406462025" target="_blank">
                  <AiOutlineWhatsApp id="img" />
                </a>
              </p>
              <p>
                <a href="https://goo.gl/maps/Mv1pqKGsmodxfjDTA" target="_blank">
                  <AiFillHome id="img" />
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4"> contacto</h6>
              <p>
                <i className="fas fa-home me-3"></i>San Jorge, Av. L. de La
                Torre 457
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                marber@gmail.com
              </p>
              <p>
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

export default Footer;
