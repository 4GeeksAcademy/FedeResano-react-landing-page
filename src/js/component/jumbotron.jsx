import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
    return (
        <div className="jumbotron m-5">
            <h1 className="display-4">{props.title}</h1>
            <p>{props.description}</p>
            <a href={props.buttonURL} className="btn btn-success">{props.buttonLabel}</a>
        </div>
    );
};

Jumbotron.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonUrl: PropTypes.string
};
Jumbotron.defaultProps = {
    title: "A Warm Welcome!",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonLabel: "Call to action!",
    buttonURL: "https://reactjs.org/"
}


export default Jumbotron;
