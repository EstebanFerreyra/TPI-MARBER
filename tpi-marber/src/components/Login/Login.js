import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const auth = useAuth();
  // const { displayName } = auth.user;
  // console.log(displayName);

  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    auth.register(emailRegister, passwordRegister);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(email, password);
  };

  const handlerLogout = (e) => {
    auth.logout();
  };
  return (
    <>
      <section class="vh-100 bg-image">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">BIENVENIDO</h2>
                    <form>
                      <div class="form-outline mb-4"></div>

                      <div class="form-outline mb-4">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label">Correo electrónico</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label">contraseña</label>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          onClick={(e) => handleLogin(e)}
                          type="button"
                          class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Iniciar Sesión
                        </button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">
                        No tienes cuenta?{" "}
                        <a href="#!" class="fw-bold text-body">
                          <u>Registrarse </u>
                        </a>
                        <div class="d-flex justify-content-center">
                          <button
                            onClick={() => handlerLogout()}
                            type="button"
                            class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          >
                            logout
                          </button>
                        </div>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------ Register ---------------------- */}
      <section class="vh-100 bg-image">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">
                      CREANDO UNA CUENTA
                    </h2>

                    <form>
                      <div class="form-outline mb-4">
                        {/* <input
                          type="text"
                          id="form3Example1cg"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example1cg">
                          Your Name
                        </label> */}
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          class="form-control form-control-lg"
                          onChange={(e) => setEmailRegister(e.target.value)}
                        />
                        <label class="form-label">Correo electrónico</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          class="form-control form-control-lg"
                          onChange={(e) => setPasswordRegister(e.target.value)}
                        />
                        <label class="form-label">contraseña</label>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                        />
                        <label class="form-check-label">
                          I agree all statements in{" "}
                          <a href="#!" class="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          onClick={(e) => handleRegister(e)}
                          type="button"
                          class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Registrarse
                        </button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">
                        Tienes ya una cuenta?{" "}
                        <a href="#!" class="fw-bold text-body">
                          <u>Iniciar Sesión</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
