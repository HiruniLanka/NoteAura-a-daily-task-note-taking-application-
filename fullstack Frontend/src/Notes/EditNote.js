import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'



export default function EditNote() {

    let navigate = useNavigate()

    const {no}=useParams()

const[note, setNote]=useState({
    date:"",
    task:"",
    status:""
})

const{date,task,status}=note


const onInputChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
}


useEffect(() => {
    loadNotes();
  }, []);

const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/note/${no}`,note)
    navigate("/")
}


const loadNotes = async () => {
  try {
    const result = await axios.get(`http://localhost:8080/note/${no}`);
    console.log("Loaded note:", result.data);
    setNote(result.data);
  } catch (error) {
    console.error("Error loading note:", error.response?.data || error.message);
    alert("Failed to load note: " + (error.response?.data?.message || error.message));
  }
};



  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Edit your Note</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor='Name' className='form-label'>
                        Due Date
                    </label>
                    <input
                        type={"text"}
                        className='form-control'
                        placeholder="Enter task due date"
                        name='date'
                        value={date}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor='Name' className='form-label'>
                        Task
                    </label>
                    <input
                        type={"text"}
                        className='form-control'
                        placeholder="What is your task"
                        name='task'
                        value={task}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor='Name' className='form-label'>
                        Status
                    </label>
                    <input
                        type={"text"}
                        className='form-control'
                        placeholder="Current status"
                        name='status'
                        value={status}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
                <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                </form>
            </div>
        </div>
        
    </div>
  )
}
