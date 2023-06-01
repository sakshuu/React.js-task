import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { movieListShow } from '../redux/action/movieAction'
import "./../assets/css/Home.css"


const MoviesShow = ({setsingleData}) => {

  const actionDispatch = useDispatch()
  const navigate = useNavigate()
  const {movieList, error} = useSelector(state => state.allMovie)
  
  useEffect(() => {
    actionDispatch(movieListShow())
   
  
  }, [])
  
  const handleshowDetails = (item) => {
    setsingleData(item)
    navigate(`details/${item?.show?.id}`)
  }

  return <>
  {/* {JSON.stringify(movieList)} */}
  {JSON.stringify(error)}
        <div className="row">
 {
  movieList &&  movieList.map(item => <div key={item.show?.id} className="col-md-4 col-sm-6  poster" onClick={e => handleshowDetails(item)}>
  <div className="card adjust">
    <img src={item.show.image?.original} className='card-img-top adjust img-fluid' alt={item.show.image?.original}/>
    <div className="card-footers">
      <small className="text-muted"><i className="bi b-colour bi-star-fill"></i> {item.show.rating.average}</small>
    </div>
    <div className='card-below'>
      <h5 className='bold'>{item.show.name}</h5>
      <p>{item.show.genres[0]}  {item.show.genres[1]}</p>
    </div>
  </div>
        </div> 
  )
}
  </div>
  </>
}

export default MoviesShow