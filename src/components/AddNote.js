import React, {useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'


const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: "default"})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title:"" , description:"", tag:""})
        props.showAlert("Added successfully","success");
    }

    const onChange = (e)=>{ 
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <>
      
        <div className="container my-3    style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', width:'100vh'}}">
            <h3 style={{ fontStyle: 'italic',textAlign: 'center' }}>Add a Note</h3>
            <form className="my-3">
                <div className="mb-3 ">
                    <label htmlFor="title" className="form-label"><b>Title</b></label>
                    <input type="text" className="form-control " id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label"><b>Description</b></label>
                    <input type="text" className="form-control" id="description" name="description"  value={note.description}  onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label"><b>Tag</b></label>
                   

                    <input type="text" className="form-control" id="tag" name="tag"  value={note.tag} onChange={onChange} />
        
                </div>
               
                <button disabled={note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
        </>
    )
    
}


export default AddNote
