import React from 'react'
import BookList from './BookList'
import Navbar from './Navbar'
import '../index.css'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <BookList />
    </div>
  )
}

export default App
