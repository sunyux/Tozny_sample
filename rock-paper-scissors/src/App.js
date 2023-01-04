
import './App.css';

import React from 'react'
import {Alicia} from './Alicia/Alicia';
import {Bruce} from './Bruce/Bruce';
import {Clarence} from './Clarence/Clarence';
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
  const redirectToClarencePage = () => {
      //Redirect to the Bruce page
      navigate("/Clarence");
  };
   return(
   <div>
       <h1>Rock✊-Paper✋-Scissors✌️</h1>

       <button
          onClick={redirectToHomePage}
          style={{ backgroundColor: "red", color: "white" }}>
          Home
        </button>
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
          onClick={redirectToClarencePage}
          style={{ backgroundColor: "red", color: "white" }}>
          Clarence
        </button>

      <Routes>
         <Route path='/Alicia' element={<Alicia/>}/>
         <Route path='/Bruce' element={<Bruce/>}/>
         <Route path='/Home' element={<App/>}/>
         <Route path='/Clarence' element={<Clarence/>}/>
      </Routes>
   </div>
   );
}

export default App;
