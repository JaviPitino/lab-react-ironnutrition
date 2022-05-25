import React, { useState } from 'react';

function FoodBox(props) {

  // ! ------ DESTRUCTUR ----------
  const { image, name, calories, quantity } = props.eachFood;
  const [ qty, setQty ] = useState(0)

  // ! ------ EVENTS -----------
  const handleClick = () => {
    
  }

  const handleChange = (event) => {
    setQty(event.target.value)
  }

  // ! ------ RENDERIZAR JSX -----------
  return (

        <div className="box">
            
        <article className="media">
        
            <div className="media-left">
            <figure className="image is-64x64">
                <img src={image} />
            </figure>
            </div>
            <div className="media-content">
            <div className="content">
                <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
                </p>
            </div>
            </div>
            <div className="media-right">
            <div className="field has-addons">
                <div className="control">
                <input className="input" type="number" name="quantity" onChange={handleChange} value={qty} />
                </div>
                <div className="control">
                <button className="button is-info" onClick={handleClick}>+</button>
                </div>
            </div>
            </div>
        </article>
    </div>
  );
}

export default FoodBox;
