const Task = ({ task, toggleCompletedTask, activateEditTask, className }) => {
  return (
    <li className={className} onDoubleClick={() => activateEditTask(task.id)}>
      <input
        type="checkbox"
        name="completed"
        id="completed"
        checked={task.completed}
        onChange={() => toggleCompletedTask(task.id)}
      />

      <div className="text-container">
        <h3>{task.title}</h3>
        {!task.completed && <p>{task.category}</p>}
      </div>

      <button className="edit-button" onClick={() => activateEditTask(task.id)}>...</button>
    </li>
  );
};

export default Task;
