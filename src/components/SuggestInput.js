import { useState } from "react"

import '../styles/suggest-input.css'


export default function SuggestInput({ array, typingState, editInputState, suggestions = 3, ...props }) {


    const [showSuggestions, setShowSuggestions] = useState(false);

    const possibilities = array.filter((word, index) => {

        if (word === typingState) return;

        let regex = new RegExp(typingState, 'i');

        return (word.match(regex))
    });



    return (
        <div className='suggestion-wrapper' >
            {<Suggestions possibilities={possibilities} editInputState={editInputState} />}
            <input {...props} />
        </div>
    )
}

function Suggestions({ possibilities, editInputState }) {
    return (
        <div className="suggestions">
            {possibilities.map((possibilty, index) => {
                return <p className="suggestion" key={index} onClick={() => { editInputState({ category: possibilty }) }}>{possibilty}</p>
            })}
        </div>
    )
}

