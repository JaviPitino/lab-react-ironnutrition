import React, { useState } from 'react';

function FoodBox(props) {

  // ! ------ DESTRUCTUR ----------
  const { image, name, calories } = props.eachFood;
  const [ qty, setQty ] = useState(1)

  // ! ------ EVENTS -----------
  const handleChange = (event) => {
    setQty(event.target.value)
  }

  const addFoodList = (event) => {
      event.preventDefault()

      let totalCal = qty * calories


  }

  const handleClick = () => {
    const theFood = {
        name,
        calories,
        qty
    }
    props.addFoodTotal(theFood)
    console.log(theFood)
  }

  // ! ------ RENDERIZAR JSX -----------
  return (

    <div className="columns">
        <div className='column'>
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
        </div>
    </div>

  );
}

export default FoodBox;
