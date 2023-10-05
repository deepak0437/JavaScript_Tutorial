import React, { useEffect, useState } from 'react'

function RegistrationForm() {

    const userData = {
        name : "",
        email : "",
        password : ""
    }

    const [inputData, setInputData] = useState(userData)

    const [flag, setFlag] = useState(false)

    useEffect(() => {
        // console.log("Registered Successfully")
    },[flag])
    function handleData(events){
        setInputData({...inputData, [events.target.name] : events.target.value, 
            [events.target.email] : events.target.value, [events.target.password] : events.target.value})
        
    }

    function handleSubmit(events){
        events.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password){
            alert("All Fields Are Mandatory..!")
        }else{
            setFlag(true)
        }
    }

  return (
    <div>
    <form className='container first' onSubmit={handleSubmit}>
        <div className='header'>
            <h1>Registration Form</h1>
        </div>

        <div className='inputvalue'>
        <div>
            <input type="text" placeholder='Enter Your Name' name='name' value={inputData.name} onChange={handleData}/>
        </div>

        <div>
            <input type="text" placeholder='Enter Your Email-ID' name='email' value={inputData.email} onChange={handleData}/>
        </div>

        <div>
            <input type="password" placeholder='Enter Password' name='password' value={inputData.password} onChange={handleData}/>
        </div>

        <div>
            <button type='submit'>Submit</button>
            {/* <button type='clear' onClick={clearAll}>Clear</button> */}
        </div>
        </div>
    </form>
    <div>
        <pre>{(flag)? <h2 className='answer'>Hello {inputData.name}, You Have Registered Successfully</h2> :  ""}</pre>
    </div>
    <hr/>
    </div>
  )
}

export default RegistrationForm
