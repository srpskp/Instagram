// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Login';
import Home from './Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Login/>}> </Route>
        <Route path='Home' element={<Home/>}> </Route>
      </Routes>
    </BrowserRouter>   
    </>
  );
}

export default App;
