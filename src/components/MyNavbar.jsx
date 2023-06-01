import React from 'react'
import Movie from "./../assets/images/Movie.png";
import "./../assets/css/Home.css"
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { useSelector } from 'react-redux';

const MyNavbar = () => {
  
  return (<>
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#"><img src={Movie}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">


        <a class="nav-link active">


  <div class="search">
  <i class="bi bi-search"></i>
    <input type="text" class="form-control"  onChange={e => handleSearch(e.target.value)} placeholder="Search Movie"/>
  </div>

          </a>          
      </div>
    </div>
    <div>
    </div>
  </div>
</nav>

<Outlet/>
  <Footer/>
  </>

  )

}

export default MyNavbar