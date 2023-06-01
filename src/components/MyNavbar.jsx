import React from 'react'
import Movie from "./../assets/images/Movie.png";
import "./../assets/css/Home.css"
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const MyNavbar = () => {


  return (<>
<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#"><img src={Movie}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">


        <a className="nav-link active">


  <div className="search">
  <i className="bi bi-search"></i>
    <input type="text" className="form-control" placeholder="Search Movie"/>
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