const Task = ({ task, toggleCompletedTask, activateEditTask, className }) => {
  return (
    <li className={className} onDoubleClick={() => activateEditTask(task.id)}>
      <div className="task-essentials">
        <input
          type="checkbox"
          name="completed"
          id="completed"
          checked={task.completed}
          onChange={() => toggleCompletedTask(task.id)}
        />

        <h3>{task.title}</h3>
      </div>

      {!task.completed && <p className="category">{task.category}</p>}

      <button className="edit-button" onClick={() => activateEditTask(task.id)}>...</button>
    </li>
  );
};

export default Task;
