import React from 'react';
import styles from './AppStyles.module.css';


function InLineCssStyl() {
    const headline ={
        fontSize : '30px',
        color : "red"
    }
  return (
    <div>
      <h1 style={headline}>Welcome To InLine Styling in CSS </h1>
        <p>Welcome To InLine Styling in CSS</p>
        <p>Hello World ...........</p>
        <h1 className='error'>Error Message</h1>
        <h1 className={styles.success}>Success Message</h1>
        <hr/>
    </div>
  )
}

export default InLineCssStyl
