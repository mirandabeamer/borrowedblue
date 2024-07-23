import { useState } from 'react'
import Jumbotron from './Jumbotron'
import NavBar from './NavBar'
import Recommendations from './Recommendations'
import './App.css'
import MyLibrary from './MyLibrary'

function App() {
  return (
    <>
     <NavBar/>
    <Jumbotron/>
    <table>
      <tr>
        <td> <MyLibrary/></td>
        <td><Recommendations/></td>
      </tr>
    </table>
    </>
  )
}

export default App
