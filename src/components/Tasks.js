import Task from "./Task";

const Tasks = ({ tasks, handleCheck }) => {
  return (
    <div>
      <h2>Incomplete</h2>
      <ul>
        {tasks
          .filter((task) => task.completed === false)
          .map((task) => (
            <Task task={task} key={task.id} handleCheck={handleCheck} />
          ))}
      </ul>

      <h2>Complete</h2>
      <ul>
        {tasks
          .filter((task) => task.completed === true)
          .map((task) => (
            <Task task={task} key={task.id} handleCheck={handleCheck} />
          ))}
      </ul>
    </div>
  );
};

export default Tasks;
