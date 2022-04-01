import React, { useEffect } from 'react'

export const Message = () => {


    useEffect(() =>{
        console.log("Componente montado")

        return () => {
            console.log("Componente desmontado")
        }
    }, []);

  return (
    <div>
        <h1>Mensaje</h1>
    </div>
  )
}
