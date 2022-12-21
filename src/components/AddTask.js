import { useState } from "react"


export function AddTask({ createTask, replaceTask, activeEditing = {}, setShowAddTask, deleteTask, categories }) {

    const [inputState, setInputState] = useState({ title: activeEditing.title || '', category: activeEditing.category || '' });


    function editInputState(changeObject) {
        setInputState((prevInput) => ({ ...prevInput, ...changeObject }));
    }




    function addTask(e) {
        e.preventDefault()
        if (inputState.title.length < 3) return;

        const newTask = {
            ...activeEditing,
            title: e.target.title.value,
            category: e.target.category.value
        }

        //Clear input values - has to use Array.from because otherwise its a nodelist
        Array.from(e.target.querySelectorAll('input')).map((input) => input.value = '');

        if (!activeEditing.id) {
            createTask(newTask);
        } else {
            replaceTask(newTask);
        }
    }

    return (
        <div className="add-task">
            <section>
                <button onClick={() => setShowAddTask(false)}>Close</button>
                <h3>{activeEditing.id ? 'Edit Task' : 'New Task'}</h3>
                <form onSubmit={addTask}>

                    <input
                        type="text"
                        onChange={(e) => editInputState({ title: e.target.value })}
                        name="title"
                        placeholder="Title"
                        value={inputState.title}
                    />
                    <SuggestInput
                        array={categories}
                        typingState={inputState.category}

                        type="text"
                        onChange={(e) => editInputState({ category: e.target.value })}
                        name="category"
                        placeholder="Category"
                        value={inputState.category}
                    />

                    {activeEditing.id &&
                        <button type="button" onClick={() => deleteTask(activeEditing.id)}>Delete</button>}

                    <button type="submit">{activeEditing.id ? 'Edit Task' : 'Add Task'}</button>

                </form>
            </section>
        </div>
    )
}


function SuggestInput({ array, typingState, suggestions = 3, ...props }) {

    const possibilities = array.filter((word, index) => {

        let regex = new RegExp(typingState, 'i');

        return (word.match(regex))

    });
    return (
        <>

            <div className="suggestions">
                {possibilities.map((possibilty, index) => {

                    console.log(index + '. ' + possibilty);

                    if (index < suggestions) {
                        return <p className="suggestion" key={index} onClick={() => { }}>{possibilty}</p>
                    }

                })}
            </div>
            <input {...props} />
        </>
    )


}