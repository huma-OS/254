import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import FormPage from './FormPage';

const App: React.FC = () => {

  return (
      <div className="App">
        <Navbar />
       
        <div className="content body-no-header">
        <div className="countdown-titles">
      <p className="countdown-title">HOME OF THE PLANTAIN CARAMEL CHOCOLATE</p>
      </div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subscribe" element={<FormPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
