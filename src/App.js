import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';





function App() {
  const [temperature, setTemperature] = useState(0);
  const [tempColor, setTempColor] = useState("zero");

  const tempIncrease = () =>{
    setTemperature(temperature + 1);
    if(temperature >= -1){
      setTempColor("zero");
    }
    if(temperature >= 14){
      setTempColor("fiftheen");
    }
    if(temperature >= 29){
      setTempColor("thirty");
    }
    if(temperature >= 44){
      setTempColor("fourty");
    }
    if(temperature == 50){
      setTemperature(temperature);
    }
  };

  const tempDecrease = () =>{
    setTemperature(temperature - 1);
    if(temperature <= 45){
      setTempColor("thirty");
    }
    if(temperature <= 30){
      setTempColor("fiftheen");
    }
    if(temperature <= 15){
      setTempColor("zero");
    }
    if(temperature <= 0){
      setTempColor("lessfive");
    }

    if(temperature == -10){
      setTemperature(temperature);
    }
  };

  return (
    <div className='container'>
      <div className='appContainer'>
        <div className={`appDisplay ${tempColor}`}>
         {temperature}°C
        </div>
        <div className='appBtn'>
          <button className='subBtn' onClick={tempDecrease}>-</button>
          <button className='addBtn' onClick={tempIncrease}>+</button>
        </div>
      </div>
    </div>
  );
}




export default App;
