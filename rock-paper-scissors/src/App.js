
import './App.css';

import React from 'react'
import {Alicia} from './Alicia/Alicia';
import {Bruce} from './Bruce/Bruce';
//import {Clarence} from './Clarence/Clarence';
import {Routes, useNavigate, Route } from 'react-router-dom';

//This function define the endpoints at which requests can be made
export const App = () => {

  const navigate = useNavigate();
  const redirectToAliciaPage = () => {
    //Redirect to the Alicia page
    navigate("/Alicia");
  };
  const redirectToBrucePage = () => {
    //Redirect to the Bruce page
    navigate("/Bruce");
  };
  const redirectToHomePage = () => {
    //Redirect to the Home page
    navigate("/");
  };
   return(
   <div>
       <h1>Rock✊-Paper✋-Scissors✌️</h1>

       <button
          onClick={redirectToAliciaPage}
          style={{ backgroundColor: "red", color: "white" }}>
          Alicia
       </button>
      
        <button
          onClick={redirectToBrucePage}
          style={{ backgroundColor: "red", color: "white" }}>
          Bruce
        </button>

        <button
          onClick={redirectToHomePage}
          style={{ backgroundColor: "red", color: "white" }}>
          Home
        </button>

      <Routes>
         <Route path='/Alicia' element={<Alicia/>}/>
         <Route path='/Bruce' element={<Bruce/>}/>
         <Route path='/Home' element={<App/>}/>
      </Routes>
   </div>
   );
}


/*         <Route path='/Clarence' element={<Clarence/>}/>
/*const App =() =>{
  const [AliceChoice, setAliceChoice] = useState(null)
  const [BruceChoice, setBruceChoice] = useState(null)
  const [result, setResult]=useState(null)
  const choices =['rock','paper','scissors']
  const AliceClick = (value) =>{
    setAliceChoice(value)
  }

  const BruceClick = (value) =>{
    setBruceChoice(value)
  }

  const checkResult =() =>{
    switch(AliceChoice + BruceChoice){
      case'rockscissors':
      case'paperrock':
      case'scissorspaper':
        setResult('Alice Win!')
        break
      case'paperpaper':
      case'scissorsscissors':
      case'rockrock':
        setResult('Draw!')
        break
      case'scissorsrock':
      case'rockpaper':
      case'paperscissors':
        setResult('Bruce Win!') 
        break   
    }
  }
  


  return (
   <div>
     <h1> Alice choice is: {AliceChoice}</h1>
     <h1> Bruce choice is: {BruceChoice} </h1>
     <button onClick={()=> AliceClick('rock')}>Rock</button>
     <button onClick={()=> AliceClick('paper')}>Paper</button>
     <button onClick={()=> AliceClick('scissors')}>Scissors</button>

     <button onClick={()=> BruceClick('rock')}>Rock</button>
     <button onClick={()=> BruceClick('paper')}>Paper</button>
     <button onClick={()=> BruceClick('scissors')}>Scissors</button>
     <button onClick={()=>checkResult()}>Result</button>
     <h1>{result}</h1>
    </div>
  );
}
*/

export default App;
