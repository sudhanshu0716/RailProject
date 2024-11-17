import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Component/MainPage';
import Login from './Component/Login';
import Signup from './Component/SignUp';
import FirstPage from './Component/FirstPage';
import Scenic from './Component/ScenicViews';
import Lst from './Component/Lost';
import ContactUs from './Component/ContactUs';


function App() {
  return (
    <Router> 
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<MainPage />} /> 
            <Route path="/login" element={<Login />} />  Login page
            <Route path="/signup" element={<Signup />} />  Signup page
            <Route path="/firstpage" element={<FirstPage/>}/>
            <Route path="/scenic" element={<Scenic/>}/>
            <Route path="/lost" element={<Lst/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
