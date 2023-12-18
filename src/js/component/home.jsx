import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Jumbotron />
                <div>
                    <Card />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
