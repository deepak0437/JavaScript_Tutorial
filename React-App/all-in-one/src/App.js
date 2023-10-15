import React, {useState} from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import PortFolio from './components/PortFolio';


function App() {
  const [reference, setReference] = useState('home')
  
  function handlereference(value){
      setReference(value)
  }
  const ShowPage = (reference) => {
    switch(reference) {
      case 'home':
        return <Home></Home>;
        case 'about':
          return <AboutUs/>;
          case 'port':
            return <PortFolio/>;

    }
  }

  return (
    <div className="">
    <Header onhandlereference={handlereference} reference={reference}></Header>
    {ShowPage(reference)}
    <Footer></Footer>
    </div>
  );
}

export default App;
