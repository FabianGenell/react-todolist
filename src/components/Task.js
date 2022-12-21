const Task = ({ task, handleCheck, activateEditTask }) => {
  return (
    <li onDoubleClick={() => activateEditTask(task.id)}>
      <input
        type="checkbox"
        name="completed"
        id="completed"
        checked={task.completed}
        onChange={() => handleCheck(task.id)}
      />
      <h3>{task.title}</h3>
      <p>{task.category}</p>
      <button onClick={() => activateEditTask(task.id)}>...</button>
    </li>
  );
};

export default Task;
