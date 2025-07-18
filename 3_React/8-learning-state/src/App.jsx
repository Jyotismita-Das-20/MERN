import { useState } from "react";
import List from "./components/List";

function App() {
  
  console.log("Paintaining App component");
  const studentArrState = useState([ "Nirmala", "Aman", "Suman", "Akash", "Amanullah", "Abhijeet", "Gopi"]);
  const studentArr = studentArrState[0];
  const setStudentArr = studentArrState[1];
  console.log("State Value is: ", studentArr);

  const onChangeHandler = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      setStudentArr([...studentArr, event.target.value]);
      event.target.value = ""; // Clear the input field after adding
      console.log(studentArr);
    }
  }

  return (
    <>
    <h1 className='text-5xl'>Learners of MERN Stack</h1>
    <List list={studentArr}></List>
    <input type="text" placeholder="New student name" onKeyDown={onChangeHandler}/>
    </>
  )
}

export default App;