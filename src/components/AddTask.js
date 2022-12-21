import { useState } from "react"


export function AddTask({ createTask }) {

    const [showAddTask, setShowAddTask] = useState(false);
    const [inputState, setInputState] = useState({ title: "", category: "" });

    function editInputState(changeObject) {
        setInputState((prevInput) => ({ ...prevInput, ...changeObject }));
    }

    function toggleShowAddTask() { setShowAddTask((prev) => !prev); }

    function addTask(e) {
        e.preventDefault()
        if (inputState.title.length < 3) return;


        const task = {
            title: e.target.title.value,
            category: e.target.category.value
        }

        //Clear input values - has to use Array.from because otherwise its a nodelist
        Array.from(e.target.querySelectorAll('input')).map((input) => input.value = '');

        createTask(task);

    }

    return (
        <div className="add-task">
            <button onClick={toggleShowAddTask}>Add</button>
            {showAddTask && <section>
                <button onClick={toggleShowAddTask}>Close</button>
                <form onSubmit={addTask}>

                    <input type="text" onChange={(e) => editInputState({ title: e.target.value })} name="title" placeholder="Title" />
                    <input type="text" onChange={(e) => editInputState({ category: e.target.value })} name="category" placeholder="Category" />
                    <button type="submit">Add Task</button>
                    {/* <input type="submit" value="Add Task" /> */}

                </form>


            </section>}
        </div>
    )
}