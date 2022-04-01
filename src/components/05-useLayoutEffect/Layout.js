import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import "../02-useEffect/effects.css"
import "./Layout.css"

export const Layout = () => {


    const {increment, counter} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {quote} = !!data && data[0]; // !!data es para verificar que existen datos
 
    const pTag = useRef();

  useLayoutEffect(() =>{
    console.log(pTag.current.getBoundingClientRect());
  },[quote])
    

  return (
    <div>
        <h1>Layout Effect !</h1>
        <hr/>


        <blockquote className='blockquote text-right'>
          <p className='mb-0' ref={pTag}>{quote}</p>
          <hr/>
        </blockquote>


        <button onClick={increment} className='btn btn-primary'>
          Next Quote
        </button>


    </div>
  )
}
