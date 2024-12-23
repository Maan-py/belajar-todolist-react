import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const newTask = useRef("");
  const STORAGE = "TODOLIST_APP";
  const [taskCompleted, setTaskCompleted] = useState(0);
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE)) || [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify(tasks));
    const complete = tasks.filter((task) => task.isCompleted === true);
    setTaskCompleted(complete.length);
  }, [tasks]);

  const getId = () => {
    if (tasks.length === 0) {
      return 1;
    } else {
      return tasks[0].id + 1;
    }
  };

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.current.value === "") {
      alert("Task tidak boleh kosong");
      return;
    }

    const data = {
      id: getId(),
      task: newTask.current.value,
      isCompleted: false,
    };

    setTasks([...tasks, data]);

    newTask.current.value = "";
  };

  const setCompleted = (id) => {
    tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
        console.log(tasks);
      }
    });
    setTasks([...tasks]);
    console.log(tasks);
  };

  const move = (currentIndex, updateIndex) => {
    const currentData = tasks[currentIndex];
    const updateData = tasks[updateIndex];

    tasks[currentIndex] = { ...currentData, id: updateData.id };
    tasks[updateIndex] = { ...updateData, id: currentData.id };

    setTasks([...tasks]);
  };

  const remove = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <Form addTask={addTask} newTask={newTask} taskCompleted={taskCompleted} tasks={tasks}></Form>
      <ToDoList tasks={tasks} setCompleted={setCompleted} move={move} remove={remove}></ToDoList>
    </>
  );
}

export default App;
