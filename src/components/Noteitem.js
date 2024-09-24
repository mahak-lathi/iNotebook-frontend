import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context; 
    const { note,updateNote } = props;
    return (
        <div className="col-md-3 "> 
            <div className="card my-3"> 
                <div className="card-body ">
                <h4 className="card-title ">{note.title}</h4>
                <h6 className="card-text">{note.description}</h6> 
                <i className= "far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id);
                    props.showAlert("Deleted successfully", "success");
                }}></i>
                <i className= "far fa-edit mx-2" onClick={()=>{updateNote(note);
                    props.showAlert("Updated successfully", "success");
                }}></i>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
