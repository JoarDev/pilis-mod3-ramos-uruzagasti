import {useContext, useEffect} from 'react';
import { LocationContext, LocationProvider } from './context/LocationContext';
import { Route, Routes } from 'react-router-dom';
import { Home } from './routes/home/Home';
import { Navigation } from './routes/Navigation/Navigation'
import NewLocation from './routes/newLocation';
import { Login } from '/src/routes/Login/Login';

function App() {
 

  return (
    <div id='body'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path='location/create' element={<NewLocation />}></Route>
          <Route path='login' element={<Login />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
