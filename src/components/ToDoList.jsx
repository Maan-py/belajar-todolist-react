import ToDoListButton from "./ToDoListButton";
const ToDoList = () => {
  return (
    <div className="wrapper">
      <ul>
        <li>
          <div className="left">
            <button>✅</button>
          </div>
          <div className="center">bbb</div>
          <div className="right">
            <ToDoListButton></ToDoListButton>
          </div>
        </li>
        <li>
          <div className="left">
            <button>◻️</button>
          </div>
          <div className="center">aaa</div>
          <div className="right">
            <ToDoListButton></ToDoListButton>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ToDoList;
