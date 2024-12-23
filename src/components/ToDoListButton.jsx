const ToDoListButton = (props) => {
  const { id, tasks, move, remove } = props;

  let taskId = id;
  let currentIndex = tasks.findIndex((task) => task.id === taskId);
  let upButton = "👆";
  let downButton = "👇";

  return (
    <>
      <span>{currentIndex === 0 ? "" : <button onClick={() => move(currentIndex, currentIndex - 1)}>{upButton}</button>}</span>
      <span>{currentIndex === tasks.length - 1 ? "" : <button onClick={() => move(currentIndex, currentIndex + 1)}>{downButton}</button>}</span>
      <span>
        <button
          onClick={() => {
            if (window.confirm("Apakah yakin ingin menghapus?")) {
              remove(taskId);
            }
          }}>
          🗑️
        </button>
      </span>
    </>
  );
};

export default ToDoListButton;
