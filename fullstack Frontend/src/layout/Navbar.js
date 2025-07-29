import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            NoteAura
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Use ms-auto to push buttons to right */}
          <div className="d-flex ms-auto">
            <Link className="btn btn-outline-light me-2" to="/addnote">Add Note</Link>
            <Link className="btn btn-outline-light" to="/">Home</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
