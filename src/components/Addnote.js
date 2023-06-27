import React, {useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import "./Addnote.css"
const AddNote = () => {
   
    
  
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <>
        <div className="container ">
            <h1 className="Addanote">Add a Note</h1>
            <form className="my-3">
                <div className="putitem">
                    <label htmlFor="title" className="form-label" placeholder='enter you id'><h4>Tittle</h4></label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="putitem">
                    <label htmlFor="description" className="form-label"><h4>Description</h4></label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="putitem">
                    <label htmlFor="tag" className="form-label"><h4>Tag</h4></label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                </div>
               
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn2" onClick={handleClick}>Add Note</button>
            </form>
        </div>
        <footer>

<div class="container8">
  <div class="rim"></div>
  <div class="outer"></div>
  <div class="inner">
  </div>
  <div><span id="current-time"></span></div>
</div>
</footer>
        </>
    
    )
}

export default AddNote