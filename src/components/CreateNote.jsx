import React, {useState} from "react";

function CreateNote(props){
    const [currNote, setCurrNote] = useState({
        title : "",
        content : ""
    });
    function handleChange(event){
        const {name, value} = event.target;
        setCurrNote((prevValue) => {
            return {...prevValue,
            [name] : value
        };
        });
    };

    function submitNote(event){
        props.onClick(currNote);
        setCurrNote({
            title : "",
            content : ""
        });
        event.preventDefault();
    };

    return <div className="input-notes">
        <form>
        <input onChange={handleChange} value={currNote.title} className="title" name="title" placeholder="Title"/><br/>
        <input onChange={handleChange} value={currNote.content} className="content" name="content" placeholder="Take a note"/><br/>
        <button onClick={submitNote} className="add-btn">Add</button>
        </form>
    </div>
};

export default CreateNote;