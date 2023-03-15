import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import NavBarLink from './layout/NavbarLink';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <NavBarLink></NavBarLink>
      </BrowserRouter>
    </div>
  );
}

export default App;
