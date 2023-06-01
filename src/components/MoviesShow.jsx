import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { movieListShow } from '../redux/action/movieAction'
import "./../assets/css/Home.css"


const MoviesShow = ({setsingleData}) => {

  const actionDispatch = useDispatch()
  const navigate = useNavigate()
  const {movieList} = useSelector(state => state.allMovie)

  const handleshowDetails = (item) => {
    setsingleData(item)
    navigate(`details/${item?.show?.id}`)
  }

  useEffect(() => {
    actionDispatch(movieListShow())
  }, [])

  return <>
        <div class="row">
{
  movieList &&  movieList.map(item => <>
      <div class="col-md-4 col-sm-6  poster" onClick={e => handleshowDetails(item)}>
  <div class="card adjust">
    <img src={item.show.image?.original} class="card-img-top" className='adjust img-fluid' alt={item.show.image?.original}/>
    <div class="card-footers">
      <small class="text-muted"><i class="bi b-colour bi-star-fill"></i> {item.show.rating.average}</small>
    </div>
    <div className='card-below'>
      <h5 className='bold'>{item.show.name}</h5>
      <p>{item.show.genres[0]}  {item.show.genres[1]}</p>
    </div>
  </div>
        </div> 
 </>
  )
}
  </div>
  </>
}

export default MoviesShow