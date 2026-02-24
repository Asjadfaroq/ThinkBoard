import { useEffect, useState } from "react"
import Navbar from "../componenets/navbar"
import RateLimitedUI from "../componenets/RateLimitedUI";
import axios from "axios";
import toast from "react-hot-toast";


const HomePage = () => {
  const [isRateLimited, setRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes")
        console.log(res.data);
        setNotes(res.data);
        setRateLimited(false);
      } catch (error) {
        console.error("Error fetching notes:", error);
        if (error.response && error.response.status === 429) {
          setRateLimited(true);
        }else{
          toast.error("Failed to fetch notes.");
        }
      }finally{
        setLoading(false);
      }
    }
    fetchNotes();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar/>

      {isRateLimited && <RateLimitedUI/>}
    </div>
  );
};

export default HomePage