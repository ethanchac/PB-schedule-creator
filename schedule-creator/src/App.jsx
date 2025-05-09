import Schedule from './Components/Schedule.jsx'
import Nav from './Components/Nav.jsx'
import Creator from './Components/Creator.jsx'

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
