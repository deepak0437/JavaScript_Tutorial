import React, {useState} from 'react'

function StudentMarksheet() {

    const [marks1, setMarks1] = useState();
    const [marks2, setMarks2] = useState();
    const [marks3, setMarks3] = useState();

    const [total, setTotal] = useState();
    const [average, setAverage] = useState();
    const [grade, setGrade] = useState();

    var totalMarks;
    var averageMarks;
    var gradeValue;

    function handleClick(){
    
  totalMarks = Number(marks1) + Number(marks2) + Number(marks3);
  setTotal(totalMarks); 

  averageMarks =  Number(totalMarks/3);
  setAverage(averageMarks); 

  if(averageMarks > 70)
  {
    gradeValue = "A"
  }
  else if(averageMarks > 50)
  {
    gradeValue = "B"
  }
  else if(averageMarks > 35)
  {
    gradeValue = "C"
  }

  else
  {
    gradeValue = "F"
  }

  setGrade(gradeValue); 

}


  return (
    <div>
    <div className='container marks'>
      <div className='header'>
            <h1>Student MarkSheet</h1>
        </div>
      <div className='inputvalue'>
    <div>
        <label>English Marks : </label>
        <input type="text" name='marks1' placeholder="Enter English Marks" onChange={(event)=>{setMarks1(event.target.value);}}/>
    </div>
    <div>
        <label>Hindi Marks: </label>
        <input type="text" name='marks2' placeholder="Enter Hindi Marks" onChange={(event)=>{setMarks2(event.target.value);}}/>
    </div>
    <div>
        <label>Maths Marks : </label>
        <input type="text" name='marks3' placeholder="Enter Maths Marks" onChange={(event)=>{setMarks3(event.target.value);}}/>
    </div>

    <div>
        <label>Total Marks : </label>
        <input type="text" value={ total } disabled></input>   
    </div>
    <div>
        <label>Average : </label>
        <input type="text" value={ average } disabled></input>   
    </div>
     <div>
        <label>Grade : </label>
        <input type="text" value={ grade } disabled></input>   
    </div>
    <button type="submit" class="btn btn-primary" onClick={handleClick}>Submit</button>
    </div>
    </div>
    <hr/>
    </div>
  )
}

export default StudentMarksheet
