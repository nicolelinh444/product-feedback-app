import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import FeedbackCard from "./components/FeedbackCard";

function App() {
  // useState variable for feedback, set to an empty array
  const [feedbackInfo, setFeedbackInfo] = useState([]);

  // API call
  const getFeedbackInfo = async () => {
    try {
      const response = await fetch("/api/get-all-suggestions");
      const data = await response.json();

      setFeedbackInfo(data);
    } catch (error) {
      console.log("Error fetching suggestions");
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Feedback</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;
