import React, { useState } from 'react';
import "../02-useEffect/effects.css";
import {useCounter} from "../../hooks/useCounter";
import { Small } from './Small';

export const Memorize = () => {


    
    const {counter, increment} = useCounter(1)
    const [show, setShow] = useState(true)


  return (
    <div>
        <h1>Contador <Small value={counter}/></h1>
        <hr />
        

        <button onClick={increment} className="btn btn-primary">+ 1</button>
        <button className='btn btn-outline-primary ml-3'
        onClick={() =>{
            setShow(!show)
        }}>
            Show Hide {JSON.stringify(show)}
        </button>

    </div>
  )
}