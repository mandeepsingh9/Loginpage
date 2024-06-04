import logo from './logo.svg';
import './App.css';
import { Toaster } from 'react-hot-toast'
import Layout from './Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import store from './stores/stores';
import Privarcy from './Components/Privarcy';
import Profile from './Components/Profile';

function App() {



  return (
   <>
  
    <BrowserRouter>
    <Toaster position="top-center" reverseOrder={false} />
    
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      
      
      <Route element={<Privarcy/>}>
         <Route path="/profile" element={<Profile/>}  />
      </Route>
    </Route>
  </Routes>
</BrowserRouter>

   </>
  );
}

export default App;
