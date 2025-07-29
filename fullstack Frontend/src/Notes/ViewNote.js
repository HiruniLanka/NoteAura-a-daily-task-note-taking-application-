import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function () {

    const[note,setNote]=useState({
        date:"",
        task:"",
        status:""
    })

    const {no}=useParams();

    useEffect(()=>{
        loadNotes()
    },[])

    const loadNotes=async()=>{
        const result=await axios.get(`http://localhost:8080/note/${no}`)
        setNote(result.data)
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Task Details</h2>

                <div className='card'>
                    <div className='card-header'>
                        Details of note id: {note.no}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Due Date :</b>
                                {note.date}
                            </li>
                            <li className='list-group-item'>
                                <b>Task :</b>
                                {note.task}
                            </li>
                            <li className='list-group-item'>
                                <b>State :</b>
                                {note.status}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>
  </div>
  </div>
  </div>
  )
}
