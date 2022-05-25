import React, { useState } from 'react';
import './App.css';
import allFoods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';
import Search from './components/Search';
import TodayFood from './components/TodayFood';

// 

function App() {

  // ! ---------- STATES -----------
  const [ food, setFood ] = useState(allFoods)
  const [ filteredFood, setFilteredFood ] = useState(allFoods)
  const [ showForm, setShowForm ] = useState(false)
  const [ totalFood, setTotalFood ] = useState([])

  // ! ---------- FUNCIONES ---------
  const addFood = ( foodToAdd ) => {
   
    setShowForm(false)
    setFilteredFood([ foodToAdd, ...food ])
    setFood([ foodToAdd, ...food ])
  }

  const handleShowForm = () => {
    setShowForm(!showForm)
  }

  const searchList = (search) => {
    // Filtramos -> Sobre el array de comida original
    const filteredFood = food.filter((eachFood) => {
      return eachFood.name.toUpperCase().includes(search.toUpperCase())
    })
    setFilteredFood(filteredFood)
  }

  const addFoodTotal = (theFood) => {
    setTotalFood([...totalFood, theFood])
  }

  // ! --------- RENDER JSX ----------
  return (
    <div className="App">
      <h1> <strong> Vamos a mover el bigote </strong> </h1>
      <br />
      <button className="button is-info" onClick={handleShowForm}> Añadir comida </button>

      { showForm === true && <AddForm addFood={addFood} /> }

      <hr />

      <Search searchList={searchList}/>

      <hr />

      <TodayFood />

    {
      filteredFood.map((eachFood, index) => {
        return (

          <FoodBox 
            key={eachFood.name + index}
            eachFood={eachFood}
            addFoodTotal={addFoodTotal}
          />

        )
      })

    }
    </div>
  );
}

export default App;
