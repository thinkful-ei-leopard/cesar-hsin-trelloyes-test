import './List.css';
import React from 'react';
import Card from './Card.js';

function List(props){
    console.log(props);
    const cardArray = props.cards.map((item, index) => 
        <Card key={index} title={item.title} content={item.content} />);
    return(
        <section className="List" key={props.id}>
        <header className="List-header">
          <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
          {cardArray}
          <button type="button" className="List-add-button">
              + Add Random Card
            </button>
        </div>
      </section>
    )
};

export default List;