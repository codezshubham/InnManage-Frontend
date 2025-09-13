# InnManage Backend Code Here :- https://github.com/codezshubham/InnManage-Backend

# InnManage-Frontend

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)]()


## Description

The InnManage-Frontend is a web application designed for hotel management. It provides functionalities for managing rooms, bookings, user authentication, and admin tasks. This project is built using React, Bootstrap, and leverages various libraries to create a comprehensive hotel management system.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Important Links](#important-links)
- [Contact](#contact)

## Features

- **Room Management**: Add, edit, and view existing rooms.
- **Booking Management**: Book rooms, find bookings, and cancel bookings.
- **User Authentication**: Login, registration, profile management, and logout.
- **Admin Panel**: Manage rooms and bookings.
- **Room Browsing**: Browse all available rooms with filtering options.
- **Booking Process**: Checkout process with booking summary.
- **Date Filtering**: Filter bookings by date range.

## Tech Stack

- **Frontend**: React, JavaScript
- **UI Framework**: Bootstrap, React-Bootstrap
- **Routing**: React Router
- **HTTP Client**: Axios
- **Date Management**: date-fns, moment
- **Authentication**: jwt-decode
- **Other Libraries**: react-date-range, react-icons
- **Build Tool**: Vite
- **Linting**: ESLint

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/codezshubham/InnManage-Frontend.git
   cd InnManage-Frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open the application in your browser**:
   Navigate to `http://localhost:5173` or the address provided by Vite.

### Key Features and Usage Examples:

- **Adding a New Room**: Navigate to the `/add-room` route to add new rooms via a form. Admin Privileges are required.
  ```jsx
  <Route path='/add-room' element={<AddRoom/>}/>
  ```

- **Editing an Existing Room**: Navigate to the `/edit-room/:roomId` route to modify room details.
  ```jsx
   <Route path='/edit-room/:roomId' element={<EditRoom/>}/>
  ```

- **Browsing Available Rooms**: Users can browse available rooms using the `/browse-all-rooms` route.
  ```jsx
  <Route path='/browse-all-rooms' element={<RoomListing/>}/>
  ```

- **Booking a Room**: Authenticated users can book a room through the `/book-room/:roomId` route.
  ```jsx
  <Route path='/book-room/:roomId' element={<RequireAuth><CheckOut/></RequireAuth>}/>
  ```

- **User Authentication**: Login and registration are handled via the `/login` and `/register` routes.
  ```jsx
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Registration/>}/>
  ```

- **Admin Panel**: Accessible via the `/admin` route for users with `ROLE_ADMIN`.
   ```jsx
   <Route path='/admin' element={<Admin/>}/>
   ```

## Project Structure

```
InnManage-Frontend/
├── README.md
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── assets/
│   ├── Components/
│   │   ├── Admin/
│   │   │   └── Admin.jsx
│   │   ├── Auth/
│   │   │   ├── AuthProvider.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Logout.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Registration.jsx
│   │   │   └── RequireAuth.jsx
│   │   ├── Booking/
│   │   │   ├── BookingForm.jsx
│   │   │   ├── BookingSuccess.jsx
│   │   │   ├── BookingSummary.jsx
│   │   │   ├── Bookings.jsx
│   │   │   ├── BookingsTable.jsx
│   │   │   ├── CheckOut.jsx
│   │   │   └── FindBooking.jsx
│   │   ├── Common/
│   │   │   ├── DateSlider.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── HotelService.jsx
│   │   │   ├── Parallax.jsx
│   │   │   ├── RoomCarousel.jsx
│   │   │   ├── RoomFilter.jsx
│   │   │   ├── RoomPaginator.jsx
│   │   │   ├── RoomSearch.jsx
│   │   │   ├── RoomSearchResult.jsx
│   │   │   └── RoomTypeSelector.jsx
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── Layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── MainHeader.jsx
│   │   │   └── Navbar.jsx
│   │   ├── Room/
│   │   │   ├── AddRoom.jsx
│   │   │   ├── EditRoom.jsx
│   │   │   ├── ExistingRooms.jsx
│   │   │   ├── Room.jsx
│   │   │   ├── RoomCard.jsx
│   │   │   └── RoomListing.jsx
│   │   └── Utils/
│   │       └── ApiFunctions.jsx
│   ├── index.css
│   └── main.jsx
```

## Contributing

We welcome contributions to the project! Here are the steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## License

This project has no specified license.

## Important Links

- **Backend Code**: [InnManage-Backend](https://github.com/codezshubham/InnManage-Backend)

## Contact

- **Author**: [codezshubham](https://github.com/codezshubham)


<p align="center">
  Give a ⭐ if you like this project! Fork the repository to contribute and raise issues if you find any.
</p>

---

<p align="center">
  This README was generated by <a href="https://www.readmecodegen.com/">ReadmeCodeGen</a>.
</p>
