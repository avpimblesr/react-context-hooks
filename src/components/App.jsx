import React from 'react'
import BookList from './BookList'
import Navbar from './Navbar'
import '../index.css'
import ThemeContextProvider from '../contexts/ThemeContext'

const App = () => {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  )
}

export default App
