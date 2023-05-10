import logo from './logo.svg';
import React, { useState , useEffect} from 'react';
import './App.css';





function App() {
  const [temperature, setTemperature] = useState(0);
  const [tempColor, setTempColor] = useState("zero");

  useEffect(() => {

    switch(true){
      case temperature <= -1:
        setTempColor("lessfive");
        break;
      case temperature <= 14:
        setTempColor("zero");
        break;
      case temperature <= 29:
        setTempColor("fifteen");
        break;
      case temperature <= 44:
        setTempColor("thirty");
        break;
      case temperature >= 45:
        setTempColor("fourty");
        break;
    }
  }, [temperature] );

  const tempIncrease = () =>{
    setTemperature(temperature + 1);
     if(temperature == 50){
      setTemperature(temperature);
    }
  };

  const tempDecrease = () =>{
    setTemperature(temperature - 1);
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
