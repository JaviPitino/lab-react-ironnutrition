import React from 'react'
import { useState } from 'react'

function AddForm(props) {

    const { addFood } = props

    // ! ---------- HANDLESTATES --------
    const [ name, setName ] = useState("")
    const [ calories, setCalories ] = useState(0)
    const [ image, setImage ] = useState("https://i.imgur.com/DupGBz5.jpg")
    
    const handleNameChange = (event) => setName(event.target.value)
    
    const handleCaloriesChange = (event) => setCalories(event.target.value)

    const handleImageChange = (event) => setImage(event.target.value)
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const newFood = {
          name,
          calories,
          image
        }
        setName("")
        setCalories(0)
        setImage("https://i.imgur.com/DupGBz5.jpg")
        addFood(newFood)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}> 
            <label htmlFor="name">Nombre: </label>
            <input type="text" name='name' onChange={handleNameChange} value={name}/>

            <label htmlFor="calories">Número de calorías: </label>
            <input type="number" name='calories' onChange={handleCaloriesChange} value={calories}/>

            <label htmlFor="image">Imagen: </label>
            <input type="image" src={image} alt="comida" width="50px" onChange={handleImageChange} value={image} />

            <button className="button is-info"> Agregar </button>
      </form>
    </div>
  )
}

export default AddForm