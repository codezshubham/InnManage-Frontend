import React from 'react'
import MainHeader from '../Layout/MainHeader'
import HotelService from '../Common/HotelService'
import Parallax from '../Common/Parallax'
import RoomCarousel from '../Common/RoomCarousel'
import RoomSearch from '../Common/RoomSearch'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()
  const message = location.state && location.state.message

  const currnetUser = localStorage.getItem("userId")
  return (
    <section>
      {message && <p className='text-warning px-5'>{message}</p>}
      {currnetUser && <h6 className='text-success text-center'>You are logged-In as {currnetUser}</h6>}
        <MainHeader/>
        <div className='container'>
          <RoomSearch/>
          <RoomCarousel/>
          <Parallax/>
          <RoomCarousel/>
          <HotelService/>
          <Parallax/>
        </div>
    </section>
  )
}

export default Home
