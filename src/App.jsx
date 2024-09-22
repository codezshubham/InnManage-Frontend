import { useState } from 'react'
import AddRoom from './Components/Room/AddRoom'
import ExistingRooms from './Components/Room/ExistingRooms'
import Navbar from './Components/Layout/Navbar'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EditRoom from './Components/Room/EditRoom'
import Footer from './Components/Layout/Footer'
import RoomListing from './Components/Room/RoomListing'
import Admin from './Components/Admin/Admin'
import CheckOut from './Components/Booking/CheckOut'
import BookingSuccess from './Components/Booking/BookingSuccess'
import Bookings from './Components/Booking/Bookings'
import FindBooking from './Components/Booking/FindBooking'
import Login from './Components/Auth/Login'
import Registration from './Components/Auth/Registration'
import Profile from './Components/Auth/Profile'
import Logout from './Components/Auth/Logout'
import  AuthProvider  from './Components/Auth/AuthProvider'
import RequireAuth from './Components/Auth/RequireAuth'

function App() {

  return (
    <AuthProvider>
    <main>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/edit-room/:roomId' element={<EditRoom/>}/>
          <Route path='/add-room' element={<AddRoom/>}/>
          <Route path='/existing-rooms' element={<ExistingRooms/>}/>

          <Route
							path="/book-room/:roomId"
							element={
								<RequireAuth>
									<CheckOut/>
								</RequireAuth>
							}
						/>

          <Route path='/browse-all-rooms' element={<RoomListing/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/booking-success' element={<BookingSuccess/>}/>
          <Route path='/existing-bookings' element={<Bookings/>}/>
          <Route path='/find-booking' element={<FindBooking/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Registration/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/logout' element={<Logout/>}/>
        </Routes>
      </Router>
      <Footer/>
      </main>
    </AuthProvider>
  )
}

export default App
