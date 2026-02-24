import { useState } from "react"
import Navbar from "../componenets/navbar"
import RateLimitedUI from "../componenets/RateLimitedUI";
const HomePage = () => {
  const [isRateLimited, setRateLimited] = useState(true);
  return (
    <div className="min-h-screen">
      <Navbar/>

      {isRateLimited && <RateLimitedUI/>}
    </div>
  );
};

export default HomePage