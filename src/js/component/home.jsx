import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Home = () => {
	return(
        <Navbar />
        <div className="container">
            <Jumbotron />
            <div>
                {cardArray}
            </div>
        </div>
        <Footer />
    );
};

export default Home;
