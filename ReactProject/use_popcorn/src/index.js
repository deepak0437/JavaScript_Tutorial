import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App from './App-v1';
import StarRating from './StarRating'

function Test(){
  const [movieRating, SetMovieRating] = useState(0)
  return(
    <div>
    <StarRating maxRating={10} color='skyblue' onSetRating={SetMovieRating}/>
    <p>This movie was rated {movieRating} stars</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={['111','222','333','444','555']}/>
    <StarRating maxRating={10} defaultRating={3}/> */}
    {/* <StarRating maxRating={10}/>
    <StarRating/> */}
    {/* <Test/> */}
  </React.StrictMode>
);
