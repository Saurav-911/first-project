import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
   
    
    <>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}   text-${props.opp}` } style={{border:"3px solid #83FFE6" }}  >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Textform">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Textform">{props.Home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">{props.About}</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>              
        </li></ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/">Sign UP </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Login</a>
        </li>
        <li>
        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" className="btn-check" id="Green" autocomplete="off" onClick={props.green}/>
            <label className={`btn btn-outline-${props.mode==="light"?"success":"info"}`} htmlFor="Green">Green</label>

            <input type="checkbox" className="btn-check" id="Blue" autocomplete="off" onClick={props.blue}/>
            <label className={`btn btn-outline-${props.mode==="light"?"primary":"info"}`} htmlFor="Blue">Blue</label>

      </div>
      {/* <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" className="btn-check" name="btnradio" id="Green" autocomplete="off"  onClick={props.green}/>
  <label className={`btn btn-outline-${props.mode==="light"?"success":"info"}`} htmlFor="Green">Green</label>

  <input type="radio" className="btn-check" name="btnradio" id="Blue" autocomplete="off" onClick={props.blue}/>
  <label className={`btn btn-outline-${props.mode==="light"?"primary":"info"}` }htmlFor="Blue">Blue</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
  <label className="btn btn-outline-primary" for="btnradio3">Radio 3</label> 
      </div>*/}
        </li>   
        <li>
          
        <div className="form-check form-switch ms-4 mt-2" >
          
          <input className="form-check-input" type="checkbox" role="switch"  onClick={props.toogle} id="switchCheckDefault"/>
          <label className="form-check-label" htmlFor="switchCheckDefault">Darkmode</label>
        </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}
Navbar.propTypes={
  title:propTypes.string,
  Home:propTypes.string
}