import Date from "./Date";
import Tasks from "./Tasks";

export default function Content({ tasks, toggleCompletedTask, activateEditTask, setShowAddTask }) {

    return (
        <main className="content">
            <header>
                <Date />
                <p>5 incomplete, 5 completed</p>
            </header>
            <Tasks tasks={tasks} toggleCompletedTask={toggleCompletedTask} activateEditTask={activateEditTask} />
        </main>
    )

}