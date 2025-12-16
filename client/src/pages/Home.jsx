// pages/Home.jsx
import { useState, useEffect } from "react";
import FeedbackCard from "../components/FeedbackCard";
import Filter from "../components/Filter";
import { Link } from "react-router-dom";

export default function Home({ feedbackInfo }) {
  // declare useState variables
  const [feedback, setFeedback] = useState(feedbackInfo);
  const [activeCategory, setActiveCategory] = useState("All");

  // filters feedback by category
  const handleFilter = (category) => {
    setActiveCategory(category);

    // if category is "All", show all feedback
    if (category === "All") {
      setFeedback(feedbackInfo); // reset to all feedback
    }
    // if category is not "All", filter by category name
    else {
      const filtered = feedbackInfo.filter(
        (item) => item.category === category
      );
      // set feedback variable to filtered category name
      setFeedback(filtered);
    }
  };

  // when feedbackInfo changes, run handleFilter ("All")
  useEffect(() => {
    handleFilter("All");
  }, [feedbackInfo]);

  return (
    <div className="page-container">
      <section className="header-container">
        <div className="company-box">
          <h1>My Company</h1>
          <p>Feedback Board</p>
        </div>
        <div className="categories">
          {/* runs filter component and calls handle filter function, sets active category */}
          <Filter onFilter={handleFilter} activeCategory={activeCategory} />
        </div>
      </section>
      <div className="card-grid">
        <span className="suggestions-bar">
          {/* shows number of suggestions */}
          <h2>{feedback.length} Suggestions</h2>
          {/* add feedback button, links to feedback form page */}
          <Link to="/feedback">
            <button className="feedback-btn">+ Add Feedback</button>
          </Link>
        </span>
        {/* if there is no feedback in a category, show empty message */}
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
            {/* links to add feedback form page */}
            <Link to="/feedback">
              <button className="feedback-btn">+ Add Feedback</button>
            </Link>
          </div>
        ) : (
          // if there is feedback, loop through and display a card for each item
          feedback.map((item, index) => (
            <FeedbackCard key={index} feedback={item} />
          ))
        )}
      </div>
    </div>
  );
}
