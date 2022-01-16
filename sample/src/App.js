import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {action,originals,comedy,romance} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'


function App() {
  return (
    <div className='App'>
       <NavBar/>
       <Banner/>
       <RowPost url={originals} title='Netflix originals'/>
       <RowPost url={action}  title='action' isSmall />
       <RowPost url={comedy}  title='comedy' isSmall />
       <RowPost url={romance}  title='romance' isSmall />
    </div>
  )
}

export default App



