import './Card.css';
import React from 'react';

function Card(props){
    console.log(props);
    return(
        <div className="Card" key={props.id}>
            <button type="button">delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
          </div>
    )
}

export default Card;