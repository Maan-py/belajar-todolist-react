const Form = (props) => {
  const { addTask, newTask, taskCompleted, tasks } = props;
  return (
    <div className="wrapper">
      <header>
        <h3>🔰 TODOLIST </h3>
        <span>
          {taskCompleted || 0} / {tasks.length}
        </span>
      </header>

      <form className="input-box">
        <input type="text" placeholder="Add Your Task" ref={newTask} />
        <button type="submit" onClick={addTask}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Form;
