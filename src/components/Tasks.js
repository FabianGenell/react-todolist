import Task from "./Task";
import "../styles/tasks.css";


const Tasks = ({ tasks, toggleCompletedTask, activateEditTask }) => {
  return (
    <div className="tasks-wrapper">
      <h2>Incomplete</h2>
      <ul className="task-container">
        {tasks
          .filter((task) => task.completed === false)
          .map((task) => (
            <Task className="task" task={task} key={task.id} toggleCompletedTask={toggleCompletedTask} activateEditTask={activateEditTask} />
          ))}
      </ul>

      <h2 style={{ padding: ".5rem 0" }}>Complete</h2>
      <ul className="task-container">
        {tasks
          .filter((task) => task.completed === true)
          .map((task) => (
            <Task className="task completed" task={task} key={task.id} toggleCompletedTask={toggleCompletedTask} activateEditTask={activateEditTask} />
          ))}
      </ul>
    </div>
  );
};

export default Tasks;
