function FeedbackCard({ feedback }) {
  return (
    <div className="card-container">
      <h3>{feedback.title}</h3>
      <p>{feedback.detail}</p>
      <p className="category-btn">{feedback.category}</p>
    </div>
  );
}

export default FeedbackCard;
