import { useState } from "react/cjs/react.development"
import './App.css';
import border from "./images/pngwing.com.png"

const App = () => {
  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"])
  const [input, setInput] = useState("")
  const [check, setCheck] = useState("false")
  const changeHandler = (event) => {
    setInput(event.target.value);
  }
  const newTask = (input) => {
    const storedTasks = [...tasks]
    storedTasks.push(input)
    setTasks(storedTasks)
    setInput("")
  }

  const completeTask = () => {
    setCheck(!check)
  }

  const removeTask = (index) => {
    const storedTasks = [...tasks]
    storedTasks.splice(index, 1)
    setTasks(storedTasks)
  }

  return (
    <div className={"mainDiv"}>
      <div className={"topBox"}>
      <h1>Task List</h1>
      <input type="text" onChange={changeHandler} value={input}/>
      <button onClick={() => newTask(input)}>Add</button>
      </div>
      <ul className={"liParentBox"}>
        {tasks.map((task, index) => {
          return (
            <div className={"liBox"}>
            <li key={index} className={check ? null : "strike"}>{task}</li>
            <input type="checkbox" onClick={completeTask}/>
            <button onClick={removeTask}><i class="far fa-trash-alt"></i></button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}


export default App;


