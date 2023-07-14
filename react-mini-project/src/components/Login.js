import React, { useState } from "react";
import { useNavigate , Route, Router } from "react-router-dom";
import Home from "./Home";

function Login() {

  const navigate = useNavigate();

  const [email , setEmail] = useState();
  const [password , setPassword] = useState();

  function handleTextEmail(event)
  {
    setEmail(event.target.value)
  }

  function handleTextPassword(event)
  {
    setPassword(event.target.value)
  }

  function handleLogin()
  {
    if(email==null || password==null)
    {   
        alert("Invalid Email !");
    }
    else
    {
        navigate('/home');
    }
    
  }
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "white" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div
                  className="card-body p-5 text-center bg-dark text-white"
                  style={{ borderRadius: "1rem" }}
                >
                  <h3 className="mb-4">Sign in</h3>
                  <hr className="my-4" />
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      onChange={handleTextEmail}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      onChange={handleTextPassword}
                    />
                  </div>
                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      {" "}
                      Remember password{" "}
                    </label>
                  </div>
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

    </div>
  );
}

export default Login;
