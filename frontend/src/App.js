import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './views/Home';
import Navbar from './views/Navbar';
import Login from './views/Login';
import Signup from './views/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar/>
        <div className='pages'>
          <Routes>
              <Route
                path='/'
                element={<Home/>}
              />
              <Route
                path='/login'
                element={<Login/>}
              />
              <Route
                path='/signup'
                element={<Signup/>}
              />
          </Routes>
        </div>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
