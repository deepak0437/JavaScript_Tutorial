import React, {useState} from 'react'

function BmiCalculation() {

  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();

  const [bmi, setBMI] = useState();
  const [msg, setMsg] = useState("");

  const reset = () =>{
    window.location.reload()
  }

  const handleCalculations = (events) => {
    events.preventDefault();

    if (weight === 0 || height === 0){
      alert("Please Enter Valid Number")
    }else{
      let bmiFormula = (weight / (height**2) * 703)
      setBMI(bmiFormula.toFixed(2))
    }

    if (bmi < 25){
      setMsg("You are Under Weight")
    }else if (bmi >= 25 || bmi <= 30){
      setMsg("You are healthy")
    }else{
      setMsg("You are Unhealthy .... Please seek for Medication")
    }

  }

  return (
    <div>
    <form action="" className='container marks' onSubmit={handleCalculations}>
      <div className='header'>
            <h1>BMI Calculator</h1>
        </div>
    <div className='inputvalue'>
    <div>
        <label>Your Age : </label>
        <input type="number" name='age' placeholder="Enter Your Age" value={age} onChange={(events)=>setAge(events.target.value)}/>
    </div>
    <div>
        <label>Your Weight : </label>
        <input type="number" name='weight' placeholder="Enter Your Weight" value={weight} onChange={(events)=>setWeight(events.target.value)}/>
    </div>
    <div>
        <label>Your Height : </label>
        <input type="number" name='height' placeholder="Enter Your Height" value={height} onChange={(events)=>setHeight(events.target.value)}/>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
    <button type="submit" class="btn btn-primary" onClick={reset}>Reset</button>
</div><hr/>

    <div className='container resultPart'>
      <ul>
        <li><p>Your Age : {age}</p></li>
        <li><p>Your Weight : {weight}</p></li>
        <li><p>Your Height : {height}</p></li>
      </ul>
      <p>Your BMI is : <span><strong>{bmi}</strong></span></p>
      <p>  {msg}</p>
    </div>
    </form>

    <hr/>
    </div>
  )
}

export default BmiCalculation
