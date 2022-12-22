import { useEffect, useState } from "react";
import { AddTask } from "./components/AddTask";
import Content from "./components/Content";
import "./styles/style.css";
import { BsPlusLg } from 'react-icons/bs'
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

  const [categories, setCategories] = useState();
  const [activeEditing, setActiveEditing] = useState();
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {

    if (!showAddTask) setActiveEditing();

  }, [showAddTask])

  useEffect(() => {
    const catSet = new Set(tasks.map((task) => task.category));
    setCategories(Array.from(catSet))
  }, [tasks])

  function createTask(task) {

    task.id = tasks.length + 1;
    task.completed = false;

    setTasks((prevTasks) => [...prevTasks, task]);
  }

  function replaceTask(newTask) {
    setTasks((prevTasks) => {
      return prevTasks.map((oldTask) => oldTask.id === newTask.id ? newTask : oldTask);
    });

    setShowAddTask(false);
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));

    setShowAddTask(false);
  }

  function activateEditTask(id) {

    tasks.forEach(task => { if (task.id === id) setActiveEditing(task); });

    setShowAddTask(true)
  }

  function toggleCompletedTask(id) {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="App">
      {showAddTask ?
        <AddTask
          createTask={createTask}
          replaceTask={replaceTask}
          deleteTask={deleteTask}
          activeEditing={activeEditing}
          showAddTask={showAddTask}
          setShowAddTask={setShowAddTask}
          categories={categories}
        />

        :

        <>
          <Content tasks={tasks} toggleCompletedTask={toggleCompletedTask} activateEditTask={activateEditTask} setShowAddTask={setShowAddTask} />
          <button className="add-button" onClick={() => setShowAddTask(true)}><BsPlusLg /></button>
        </>
      }
    </div>
  );
};

export default App;
