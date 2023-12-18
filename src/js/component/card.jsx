import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="card m-5">
            <img className="card-img-top" src={props.imageSrc} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    );
};

Card.propTypes = {
    imageSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonLabel: PropTypes.string
};

const cardArray = [
    <Card
        key={0}
        imageSrc="src/img/rigo-baby.jpg"
        title="Card title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonUrl="src/img/rigo-baby.jpg"
        buttonLabel="Find Out More!" />,
    <Card
        key={1}
        imageSrc="src/img/rigo-baby.jpg"
        title="Card title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonUrl=""
        buttonLabel="Find Out More!" />,
    <Card
        key={2}
        imageSrc="src/img/rigo-baby.jpg"
        title="Card title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonUrl=""
        buttonLabel="Find Out More!" />,
    <Card
        key={3}
        imageSrc="src/img/rigo-baby.jpg"
        title="Card title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonUrl=""
        buttonLabel="Find Out More!" />
];

const cardCollection = () => {
    return (
        <div>
            {cardArray.map((card, index) => (
                <React.Fragment key={index}>{card}</React.Fragment>
            ))}
        </div>
    );
};

ReactDOM.render(<cardCollection />,document.querySelector("#container"));

export default Card;