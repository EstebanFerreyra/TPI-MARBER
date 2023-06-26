import React from "react";

import "./Footer.css";

import { AiFillHome, AiOutlineWhatsApp } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => (
  <>
    <footer class="foot">
      <div className="group-1">
        <div class="box">
          <h2>SOBRE NOSOTROS</h2>
          <p>
            Esperamos que puedan disfrutar una experiencia de calidad a través
            del sabor de nuestros productos.
          </p>
        </div>
        <div class="box">
          <h2>SIGUENOS</h2>
          <div class="social-network">
            <a
              href="https://www.instagram.com/cervezamarber.sj/"
              target="_blank"
            >
              <BsInstagram />
            </a>
            <a href="https://wa.me/5493406462025" target="_blank">
              <AiOutlineWhatsApp />
            </a>
            <a href="https://goo.gl/maps/Mv1pqKGsmodxfjDTA" target="_blank">
              <AiFillHome />
            </a>
          </div>
        </div>
        <div class="box">
          <h2>CONTACTANOS</h2>
          <p>San Jorge, Av. L. de La Torre 457</p>
          <p>marber@gmail.com</p>
          <p>+ 54 9 3406 462128</p>
        </div>
      </div>
      <div class="group-2">
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="">
          Marber.com
        </a>
      </div>
    </footer>
  </>
);

export default Footer;
