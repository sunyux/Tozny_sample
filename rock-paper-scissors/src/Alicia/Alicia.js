import React,{useState} from 'react';

export const Alicia= () =>{
    const [AliciaChoice, setAliciaChoice] = useState(null)
    const AliciaClick = (value) =>{
        setAliciaChoice(value)
      }
    
    return (
    <div>
        <h1> Alice choice is: {AliciaChoice}</h1>
        <button onClick={()=> AliciaClick('rock')}>Rock</button>
        <button onClick={()=> AliciaClick('paper')}>Paper</button>
        <button onClick={()=> AliciaClick('scissors')}>Scissors</button>
    </div>
    )
     
}