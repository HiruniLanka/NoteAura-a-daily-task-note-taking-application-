import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const[notes, setNotes]=useState([])

    const{no}=useParams()

    useEffect(()  =>{
        loadNotes();
    },[]);


    const loadNotes = async () => {
        try {
            const result = await axios.get("http://localhost:8080/notes");
            console.log("Fetched notes:", result.data);
            setNotes(result.data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };

    const deleteNote=async(no)=>{
        await axios.delete(`http://localhost:8080/note/${no}`)
        loadNotes()
    }

 
  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
            <thead>
                <tr>
                <th scope="col">No</th>
                <th scope="col">Due date</th>
                <th scope="col">Task</th>
                <th scope="col">State</th>
                </tr>  
            </thead>
            <tbody>
                {
                    notes && notes.map((note,index)=>(
                        <tr key={note.id}> 
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{note.date}</td>
                        <td>{note.task}</td>
                        <td>{note.status}</td>
                        <td>
                            <Link className="btn btn-primary mx-2" to={`/viewnote/${note.no}`}>View</Link>
                            <Link className="btn btn-outline-primary mx-2" to={`/editnote/${note.no}`}>Edit</Link>
                            <button className="btn btn-danger mx-2" onClick={()=>deleteNote(note.no)}>Delete</button>
                        </td>
                        </tr>
                    ))
                }
                
            </tbody>
            </table>
        </div>
    </div>
  )
}
