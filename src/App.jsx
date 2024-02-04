import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router-dom'
import Header from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Outlet />
      </div>
      
    </div>
  )
}

export default App
