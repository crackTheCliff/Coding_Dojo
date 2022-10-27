import React from 'react';


const PersonCard = props => {
    return (
        <div className="m-3 p-3 bg-light border b-dark">
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    );
}

export default PersonCard;