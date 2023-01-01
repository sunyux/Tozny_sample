import React,{useState} from 'react';

export const Bruce= () =>{

    const [BruceChoice, setBruceChoice] = useState(null)
    const [BruceRound, setBruceRound] =useState(null)
    const BruceClick = (value) =>{
        setBruceChoice(value)
      }
    const BruceInput = event => {
        setBruceRound(event.target.value);
      };
    return (
    <div>
        <h1> Bruce choice is: {BruceChoice}</h1>
        <h1> Round: {BruceRound}</h1>
        <button onClick={()=> BruceClick('rock')}>Rock</button>
        <button onClick={()=> BruceClick('paper')}>Paper</button>
        <button onClick={()=> BruceClick('scissors')}>Scissors</button>
        <h1>Please enter Round</h1>
        <input onChange={BruceInput} placeholder="Enter number"/>
    </div>
    )
     
}