import React from "react";
import CountdownTimer from "./CountdownTimer";

const Home: React.FC = () => {
  return ( 
      <div className="all-content">
      <CountdownTimer targetDate={new Date('2025/10/10')} />
    </div>
   );
}
 
export default Home;