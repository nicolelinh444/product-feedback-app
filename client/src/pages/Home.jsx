// pages/Home.jsx
import FeedbackCard from "../components/FeedbackCard";

export default function Home({ feedbackInfo }) {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <div className="feedback-list">
        {feedbackInfo.map((feedback, index) => (
          <FeedbackCard key={index} feedback={feedback} />
        ))}
      </div>
    </>
  );
}
