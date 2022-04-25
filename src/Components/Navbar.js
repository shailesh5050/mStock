import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({name}) => {
    console.log();
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <Link class="navbar-brand" to='/'>mStock App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav m-auto">
        <li class="nav-item">
          <Link class="nav-link" to="/companies">Companies
            <span class="visually-hidden">(current)</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/watchlist">Watch List</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="compare">Compare</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar