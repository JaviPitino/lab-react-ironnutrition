import React, { useState } from 'react'

function TodayFood() {

    const [ cantidad, setCantidad ] = useState(0)


  return (
    <div>
        <div className='column'>
            <p><strong> La comida de hoy </strong></p>
        </div>
    </div>
  )
}

export default TodayFood