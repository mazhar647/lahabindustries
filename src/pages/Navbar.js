import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    return ( <
        nav className = "navbar navbar-expand-lg navbar-dark mainsheet" >
        <
        div className = "container" >
        <
        NavLink className = "navbar-brand"
        to = "/home" >
        Lahab Industries { " " } <
        /NavLink>{" "} <
        button className = "navbar-toggler"
        type = "button" >
        <
        span className = "navbar-toggler-icon" > < /span>{" "} <
        /button>{" "} <
        div className = "collapse navbar-collapse" > {
            /* <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                          <NavLink className="nav-link" exact to="/home">
                            Home{" "}
                          </NavLink>{" "}
                        </li>{" "}
                        <li className="nav-item">
                          <NavLink className="nav-link" exact to="/contact">
                            Contact Us{" "}
                          </NavLink>{" "}
                        </li>{" "}
                      </ul>{" "} */
        } {
            /* <button type="button" className="btn btn-primary position-relative">
                                                            Mails
                                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                                                              
                                                              + 99 <span className="visually-hidden">
                                                                
                                                                unread messages
                                                              </span>
                                                            </span>
                                                          </button> */
        } { " " } <
        /div>{" "} <
        /div>{" "} <
        /nav>
    );
};

export default Navbar;