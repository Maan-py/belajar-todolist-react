const Form = (props) => {
  const { addTask, newTask } = props;
  return (
    <div className="wrapper">
      <header>
        <h3>🔰 TODOLIST </h3>
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
