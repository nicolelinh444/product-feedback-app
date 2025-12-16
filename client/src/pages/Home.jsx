// pages/Home.jsx
import { useState, useEffect } from "react";
import FeedbackCard from "../components/FeedbackCard";
import Filter from "../components/Filter";
import { Link } from "react-router-dom";

export default function Home({ feedbackInfo }) {
  const [feedback, setFeedback] = useState(feedbackInfo);
  const [activeCategory, setActiveCategory] = useState("all");

  const handleFilter = (category) => {
    setActiveCategory(category);

    if (category === "All") {
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
    <div className="page-container">
      <section className="header-container">
        <div className="company-box">
          <h1>My Company</h1>
          <p>Feedback Board</p>
        </div>
        <div className="categories">
          <Filter onFilter={handleFilter} activeCategory={activeCategory} />
        </div>
      </section>
      <div className="card-grid">
        <span className="suggestions-bar">
          <h2>{feedbackInfo.length} Suggestions</h2>
          <Link to="/feedback">
            <button className="feedback-btn">+ Add Feedback</button>
          </Link>
        </span>
        {feedback.length === 0 ? (
          <div className="empty">
            <img
              src="/illustration-empty.svg"
              alt="icon showing detective with magnifying glass"
            />
            <h3>There is no feedback yet.</h3>
            <p>
              Got a suggestion? Found a bug that needs to be squashed? We love
              hearing about new ideas to improve our app.
            </p>
            <Link to="/feedback">
              <button className="feedback-btn">+ Add Feedback</button>
            </Link>
          </div>
        ) : (
          feedback.map((item, index) => (
            <FeedbackCard key={index} feedback={item} />
          ))
        )}
      </div>
    </div>
  );
}
