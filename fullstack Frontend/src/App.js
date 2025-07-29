import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddNote from './Notes/AddNote';
import EditNote from './Notes/EditNote';
import ViewNote from './Notes/ViewNote';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/> 

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/addnote" element={<AddNote/>}/>
          {/* <Route exact path="/editnote/:id" element={<EditNote />} /> */}
          <Route path="/editnote/:no" element={<EditNote />} />
          <Route path="/viewnote/:no" element={<ViewNote />} />

        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
