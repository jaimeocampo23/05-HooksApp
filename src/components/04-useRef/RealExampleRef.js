import React, { useState } from 'react'
import "../02-useEffect/effects.css"
import {MultipleCustomHooks} from"../03-examples/MultipleCustomHooks"

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }

  return (
    <div>
        <h1>RealExampleRef</h1>
        <hr/>
        {show && <MultipleCustomHooks/>}
        <button className='btn btn-outline-primary mt-5'
        onClick={handleClick}
        >
            Mostrar
        </button>

    </div>
  )
}
