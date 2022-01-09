import React, { useState } from "react";
import "./App.scss";
import logo from "./img/bg.jpg";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiresult] = useState("");
  const [condition, setCondition] = useState("");

  function calculateBMI(event) {
    if (height === "" || weight === "") {
      alert("Fill all the required values");
    } else {
      let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
      setBmiresult(bmi);
      console.log(bmi);

      let bmiCondition = getCondition(bmi);

      setCondition(bmiCondition);

      setHeight("");
      setWeight("");
    }
    event.preventDefault();
  }

  function getCondition(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  }
  return (
    <div className="container">
      {/* <img className="logo" src={logo} alt="logo"></img> */}
      <form className="bmi-form">
        <h1 className="bmi-header">BMI calculator</h1>

        <div className="height-con">
          <label>Height</label>
          <input
            className="height-input"
            placeholder="Height in cm"
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          ></input>
        </div>

        <div className="weight-con">
          <label>Weight</label>
          <input
            className="weight-input"
            placeholder="Weight in kg"
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          ></input>
        </div>

        <button className="btn" onClick={calculateBMI}>
          Calculate BMI
        </button>

        {bmiResult && (
          <div className="bmi-result">
            <p>Your BMI is = {bmiResult}</p>
            <p>You are = {condition} </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
