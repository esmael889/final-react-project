import React from 'react'
import { Link } from 'react-router-dom';
import style from './Navbar.module.scss';
export default function Navbar({userData,LogOut}) {
  return (
    <nav className={`navbar navbar-expand-lg ${style.bg_navbar}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#Noxe">Noxe</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {userData?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to=''>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='movies'>Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='TvShows'>TvShows</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='People'>people</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='About'>About</Link>
        </li>
      </ul>:''}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <div className='social-media d-flex align-items-center'>
          <i className='fab fa-facebook mx-2'></i>
          <i className='fab fa-spotify mx-2'></i>
          <i className='fab fa-instagram mx-2'></i>
          <i className='fab fa-youtube mx-2'></i>
        </div>
       {userData?
 <li className="nav-item ">
  <div className='d-flex align-items-center'>
    <Link to='Profile' className='text-danger nav-link'>Hello: {userData.first_name}</Link>
    <Link className="nav-link"onClick={LogOut}>Logout</Link>
  </div>
</li>
      :<>
       <li className="nav-item">
          <Link className="nav-link" to='Login'>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='Register'>Register</Link>
        </li>
      </> 
      }
      </ul>
    </div>
  </div>
</nav>

  )
}
