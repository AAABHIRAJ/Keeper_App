import React, { useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import CreateNote from "./CreateNote";


function App(){

    
    const [notes, setNotes] = useState([]);

    function handleClick(currNote){
        setNotes((prevValue) => {
            return [...prevValue, currNote];
        });
    };

    function deleteNote(id){
        setNotes(notes.filter((note, index) => {
            return index !== id;
        }));
    };

    return (<div>
    <Header />
    <CreateNote onClick={handleClick}/>
    <div>
    {notes.map((note, index) => {
        return <Note 
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
        />
    })}
    </div>
    
    <Footer />

    </div>)
};

export default App;