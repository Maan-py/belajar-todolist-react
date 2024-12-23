import ToDoListButton from "./ToDoListButton";
const ToDoList = (props) => {
  const { tasks, setCompleted, move, remove } = props;
  tasks.sort((a, b) => b.id - a.id);
  return (
    <div className="wrapper">
      <ul>
        {tasks.map((task) => {
          let checked = task.isCompleted ? "✅" : "◻️";
          let strike = task.isCompleted ? "strike" : "";
          return (
            <li key={task.id}>
              <div className="left">
                <button onClick={() => setCompleted(task.id)}>{checked}</button>
              </div>
              <div className={`center ${strike}`}>{task.task}</div>
              <div className="right">
                <ToDoListButton id={task.id} tasks={tasks} move={move} remove={remove}></ToDoListButton>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
