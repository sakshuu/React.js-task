import React from 'react'
import { MovieDetails, MySwiper } from '../components'

const Details = ({singleData}) => {
  return <>  
    <MovieDetails singleData={singleData}/>
    <MySwiper/>
  </>
}

export default Details