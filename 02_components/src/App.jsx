import React from 'react'
import Card from './components/Card'
import Navber from './components/Navber'

const App = () => {
  return (
    <div>
      <Navber/>
      <Navber/>
      {Card()}
      {Card()}
    </div>
  )
}

export default App