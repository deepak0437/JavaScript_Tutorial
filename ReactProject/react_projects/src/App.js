import logo from './logo.svg';
import './App.css';
import RegistrationForm from './Components/Form';
import StudentMarksheet from './Components/Marksheet';
import BmiCalculation from './Components/BmiCalculator';
import ToDoListfirst from './Components/ToDoListA';
import Navbar from './Components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <RegistrationForm></RegistrationForm>
      <StudentMarksheet></StudentMarksheet>
      <BmiCalculation></BmiCalculation> */}
      {/* <ToDoListfirst></ToDoListfirst> */}
      <Router>
      <Navbar />
      <Routes>
              {/* <Route exact path='/' element={<Navbar />} /> */}
                <Route path='/form' element={<RegistrationForm />} />
                <Route path='/marksheet' element={<StudentMarksheet />} />
                <Route path='/bmicalc' element={<BmiCalculation />} />
                <Route path='/todolist' element={<ToDoListfirst />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
