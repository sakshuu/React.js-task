import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BookTickets, Details, Home, Page404 } from './pages'
import { MyNavbar } from './components'
import "./assets/css/App.css"

const App = () => {
  const [singleData, setsingleData] = useState({})
  return  <>
      <BrowserRouter>
      <Routes>
<Route path="/" element={<MyNavbar/>} >
<Route index element={<Home setsingleData={setsingleData}/>}  />
<Route path="details/:id" element={<Details singleData={singleData}/>}  />
<Route path="book-tickets" element={<BookTickets/>} />
    </Route>
    <Route path="*" element={<Page404/>}/>
    </Routes>
    </BrowserRouter>
  </>
}

export default App