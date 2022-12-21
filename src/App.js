import { useState } from "react";
import { AddTask } from "./components/AddTask";
import Date from "./components/Date";
import Tasks from "./components/Tasks";
import "./styles/style.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Upload 1099-R to TurboTax",
      category: "Finance",
      completed: false,
    },
    {
      id: 2,
      title: "Print parking passes",
      category: "Finance",
      completed: false,
    },
    {
      id: 3,
      title: "Submit 2019 tax return",
      category: "Wedding",
      completed: false,
    },
    {
      id: 4,
      title: "Sign contract, send back",
      category: "Freelance",
      completed: false,
    },
    {
      id: 5,
      title: "Hand sanitizer",
      category: "Shopping List",
      completed: false,
    },
    {
      id: 6,
      title: "Check on FedEx Order",
      category: "Freelance",
      completed: true,
    },
    {
      id: 7,
      title: "Look at new plugins",
      category: "Freelance",
      completed: true,
    },
    {
      id: 8,
      title: "Respond to catering company",
      category: "Freelance",
      completed: true,
    },
    {
      id: 9,
      title: "Reschedule morning coffee",
      category: "Freelance",
      completed: true,
    },
    {
      id: 10,
      title: "Check the latest on Community",
      category: "Freelance",
      completed: true,
    },
  ]);

  function createTask(task) {

    task.id = tasks.length + 1;
    task.completed = false;

    setTasks((prevTasks) => [...prevTasks, task]);
  }

  const handleCheck = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <section>
        <Date />
        <Tasks tasks={tasks} handleCheck={handleCheck} />
        <AddTask createTask={createTask} />
      </section>
    </div>
  );
};

export default App;
