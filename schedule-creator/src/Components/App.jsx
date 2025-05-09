import Schedule from './Schedule.jsx'
import Nav from './Nav.jsx'
import Creator from './Creator.jsx'

import './App.css'


function App() {

  return (

    <>
      <Nav />
      <div className='main'>
        <div className='main-left'>
          <Schedule />
        </div>
        <div className='main-right'>
          <Creator />
        </div>
      </div>
      
    </>
  )
}

export default App
