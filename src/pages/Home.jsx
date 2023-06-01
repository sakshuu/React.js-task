import React from 'react'
import { MoviesShow, MyCarousel } from '../components'

const Home = ({setsingleData}) => {
  return <>
  <MyCarousel/>
  <MoviesShow setsingleData={setsingleData}/>
  </>
}

export default Home