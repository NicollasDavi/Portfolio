import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Navbar'
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Home />
      </div>
      
    </div>
  )
}

export default App
