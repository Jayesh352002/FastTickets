import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Register(){

    const navigate = useNavigate();

    const [id , setId] = useState();
    const [name , setName] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const [cPassword , setCPassword] = useState();

    function handleTextName(event)
    {
        setName(event.target.value);
    }

    function handleTextEmail(event)
    {
        setEmail(event.target.value);
    }

    function handleTextPassword(event)
    {
        setPassword(event.target.value);
    }

    function handleTextCPassword(event)
    {
        setCPassword(event.target.value);
    }

    async function handleRegister(event)
    {
        if(name==null || email==null || password==null || cPassword==null)
        {
            alert("Enter Valid Input");
        }
        else
        {
            event.preventDefault();

            try{
              await axios.post("http://localhost:8080/api/v1/users/registerusers",
              {
                userName : name , 
                userEmail : email , 
                userPassword : password , 
              });
              alert("User Registered Successfully !");

              setId("");
              setName("");
              setEmail("");
              setPassword("");

              navigate('/homepage');
            }
            catch(err){
              alert("User Registration Failed");
              console.log(err);
            }
            
        }
    }
    return(
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
                  <h3 className="mb-4">Register</h3>
                  <hr className="my-4" />
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="typeName-2"
                      className="form-control form-control-lg"
                      placeholder="Name"
                      onChange={handleTextName}
                    />
                  </div>
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
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-3"
                      className="form-control form-control-lg"
                      placeholder="Conform Password"
                      onChange={handleTextCPassword}
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={handleRegister}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Register ; 