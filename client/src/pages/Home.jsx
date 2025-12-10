// pages/Home.jsx
import { useState, useEffect } from "react";
import FeedbackCard from "../components/FeedbackCard";
import Filter from "../components/Filter";

export default function Home({ feedbackInfo }) {
  const [feedback, setFeedback] = useState(feedbackInfo);
  const [activeCategory, setActiveCategory] = useState("all");

  const handleFilter = (category) => {
    setActiveCategory(category);

    if (category === "all") {
      setFeedback(feedbackInfo); // reset to all feedback
    } else {
      // filter feedback by category
      const filtered = feedbackInfo.filter(
        (item) => item.category === category
      );
      setFeedback(filtered);
    }
  };

  useEffect(() => {
    handleFilter("all");
  }, [feedbackInfo]);

  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <div className="feedback-list">
        <Filter onFilter={handleFilter} activeCategory={activeCategory} />

        {feedback.map((item, index) => (
          <FeedbackCard key={index} feedback={item} />
        ))}
      </div>
    </>
  );
}
