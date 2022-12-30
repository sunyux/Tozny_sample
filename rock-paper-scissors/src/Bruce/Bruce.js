import React,{useState} from 'react';

export const Bruce= () =>{

    const [BruceChoice, setBruceChoice] = useState(null)
    const BruceClick = (value) =>{
        setBruceChoice(value)
      }
    
    return (
    <div>
        <h1> Bruce choice is: {BruceChoice}</h1>
        <button onClick={()=> BruceClick('rock')}>Rock</button>
        <button onClick={()=> BruceClick('paper')}>Paper</button>
        <button onClick={()=> BruceClick('scissors')}>Scissors</button>
    </div>
    )
     
}