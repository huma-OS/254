import React from 'react';
// import logo from './logo.svg';
import Navbar from './Navbar';
import Footer from './Footer';
import CountdownTimer from './CountdownTimer';
function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content body-no-header">
      <div className="countdown-titles">
       <p className="countdown-title">HOME OF THE PLANTAIN CARAMEL CHOCOLATE</p>
      </div>
      <div className="all-content">
          <CountdownTimer targetDate={new Date('2025/10/10')} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
