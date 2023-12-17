import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href={props.navbarUrl}>{props.navbarLabel}</a>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    navbarUrl: PropTypes.string,
    navbarLabel: PropTypes.string,

};




export default Navbar;