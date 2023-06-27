import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"
import './Noteitem.css';
window.addEventListener("scroll", function() {
    var navbar = document.querySelector("nav");
  
    if (window.scrollY > 0) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col">
            <div className="card2 ">
                <div className="card-body">
                    <div className="center">
                        <h5 className="card-title">{note.title}</h5>
                        {/* <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i> */}
                    </div>
                    <p className="card-text">{note.description}</p>
                    <h5 className="tag">{note.tag}</h5>
                    <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>

                </div>
            </div>
        </div>
    )
}

export default Noteitem