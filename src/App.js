import React from 'react'
import Pokegame from './Pokegame'
import './App.css'

function App () {
  return (
    <div>
      <div className='small-screen-text d-flex-col text-center p-5'>
        <p>Browser window is too small</p>
        <p className='pt-4'>Please open on a desktop browser</p>
        <p className='pt-4'> If you are using a desktop browser, please resize your browser window</p>
      </div>
      <Pokegame />
    </div>
  )
}

export default App
