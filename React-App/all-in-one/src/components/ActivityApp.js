import React from 'react'

function ActivityApp() {
  return (
    <div className='friend-app'>
        <Activity/>
    </div>
  )
}


function Activity(){
    return(
    <div className='activityapps'>
        <div className='headers'>
            <h1>Activity</h1>
        </div>
        <div className='actpara'>
            <p>✌🏻 Select your friend 👫 for Transcation💰 or Remove❌</p>
        </div>
        <div className="form-for-action">
            <form action="" className='form-action'>
                <label htmlFor="" >Select Friend :</label>
                <select name="" id="">
                    <option value="">Friends</option>
                </select>
                <br />

                <div className='clickonshow'>
                    <img src="https://i.pravatar.cc/48?u=118836" alt="" />
                    <p>Zeson</p>
                    <p>Total Amount : <span className='moneyclick'>$20</span></p>
                </div>


                <button className='button-for-activity'>Transaction</button>
                <button className='button-for-activity'>Delete</button>
            </form>
        </div>
    </div>
    )
}

export default ActivityApp
