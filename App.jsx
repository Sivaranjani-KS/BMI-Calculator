import { useState } from 'react'
import './App.css'

function App() {
  const[height,setHeight]=useState("");
  const[weight,setWeight]=useState("");
  const[bmi,setBmi]=useState(null);
  const[bmiStatus,setBmiStatus]=useState("");
  const[error,setError]=useState("");
  const calBMI=()=>{
    //regular exp d-digit
    const isValidHeight=/^\d+$/.test(height);
    const isValidWeight=/^\d+$/.test(weight);
    if(height && weight){
      const heightInMetres=height/100;
      const bmiValue=weight/(heightInMetres*heightInMetres);
      setBmi(bmiValue.toFixed(2));
      if(bmiValue<18.5){
        setBmiStatus("underweight");
      }
      else if(bmiValue>=18.5 && bmiValue<24.9){
        setBmiStatus("Normal Weight");
      }
      else if(bmiValue>=25 && bmiValue<29.9){
        setBmiStatus("Over Weight");

    }
    else{
      setBmiStatus("obese");
    }
    //crt info apovum display the error mgs
    setError("");
    }
    else{
      setBmi(null);
      setBmiStatus("");
      setError("Please enter valid numeric values for  height and weight")
    }
  };
  const clear=()=>{
    setHeight(" ");
    setWeight(" ");
    setBmi(null);
    setBmiStatus( "");
    setError(" ");
  };


  

  return (
    <>
     <div className="bmi-cal">
      <div className="box"></div>
      <div className="data">
        <h1>BMI CALCULATOR</h1>
        {error && <p className="error">{error}
        </p>}
        <div className="input-container">
          <label>Height (cm):</label>
          <input type="text" value={height} id="height" onChange={(e)=>setHeight(e.target.value)}/>
        </div>
        <div className="input-container">
          <label>weight (kg):</label>
          <input type="text" id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
        </div>
        <button onClick={calBMI}>Calculate BMI</button>
        <button onClick={clear} className="clear">Clear</button>
        {bmi !== null &&(
        <div className="result">
          <p>Your BMI is:{bmi}</p>
          <p>Status:{bmiStatus}</p>
        </div>
        )}
      </div>
     </div>
    </>
  )
}

export default App
