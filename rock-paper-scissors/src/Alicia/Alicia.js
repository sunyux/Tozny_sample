import React,{useState} from 'react';

export const Alicia= () =>{
    const [AliciaChoice, setAliciaChoice] = useState(null)
    const [AliciaRound, setAliciaRound] =useState(null)
    const AliciaClick = (value) =>{
        setAliciaChoice(value)
      }
    const AliciaInput = event => {
        setAliciaRound(event.target.value);
      };
    return (
    <div>
        <h1> Alice choice is: {AliciaChoice}</h1>
        <h1> Round: {AliciaRound}</h1>
        <button onClick={()=> AliciaClick('rock')}>Rock</button>
        <button onClick={()=> AliciaClick('paper')}>Paper</button>
        <button onClick={()=> AliciaClick('scissors')}>Scissors</button>
        <h1>Please enter Round</h1>
        <input onChange={AliciaInput} placeholder="Enter number"/>
    </div>
    )
     
}