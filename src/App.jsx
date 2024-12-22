import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const newTask = useRef("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.current.value === "") {
      alert("Task tidak boleh kosong");
      return;
    }

    const data = {
      id: 1,
      task: newTask.current.value,
      isCompleted: false,
    };

    setTasks([...tasks, data]);
    console.log(tasks);

    console.log(`Button diklik ${newTask.current.value}`);
  };

  return (
    <>
      <Form addTask={addTask} newTask={newTask}></Form>
      <ToDoList></ToDoList>
    </>
  );
}

export default App;
