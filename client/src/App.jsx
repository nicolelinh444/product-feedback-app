import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";

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

  useEffect(() => {
    getFeedbackInfo();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home feedbackInfo={feedbackInfo} />} />
        <Route
          path="/feedback"
          element={
            <Feedback
              feedbackInfo={feedbackInfo}
              setFeedbackInfo={setFeedbackInfo}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
