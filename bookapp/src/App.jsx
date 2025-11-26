import React from 'react'
import Book from './MyComponents/Book.jsx';
import Navbar from './MyComponents/Navbar.jsx';
const App = () => {
  return (
    <div>
      <Navbar title="BookApp" aboutText="Home" link="Books" searchBar={true} />
      <Book />
      
    </div>
  )
}

export default App;