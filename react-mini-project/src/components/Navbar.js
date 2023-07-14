import { useNavigate , 
    BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";
import React from "react";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function Navbar(){

    return(
        <Router>
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">React Mini Project</a>
                    <form className="d-flex">
                        <button className="btn btn-outline-success">
                            <Link to="/login" className="nav-links">Login</Link></button>
                        <button className="btn btn-outline-success">
                            <Link to="/register" className="nav-links">Register</Link>
                            </button>
                    </form>
                </div>
            </nav>
             <Routes>
                 <Route exact path="/home" element={<Home/>}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/register' element={< Register />}></Route>
            </Routes>
        </div>
        </Router>
    );
};

export default Navbar;



/*import { useNavigate , 
    BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";
import React from "react";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function Navbar(){

    const history = useNavigate();

    const login = () => {
        history.push("/login");
    }

    const register = () => {
        history.push("/register");
    }

    const home = () => {
        history.push("/home");
    }

    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">React Mini Project</a>
                    <form className="d-flex">
                        <button className="btn btn-outline-success" onClick={login}>Login</button>
                        <button className="btn btn-outline-success" onClick={register}>Register</button>
                        <button className="btn btn-outline-success" onClick={home}>Home</button>
                    </form>
                </div>
            </nav>

            <Router>
                <Routes>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/register" component={Register}></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default Navbar;*/