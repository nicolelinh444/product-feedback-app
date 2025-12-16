export default function Filter({ onFilter, activeCategory }) {
  // declare categories variable
  const categories = ["All", "UI", "UX", "Bug", "Feature", "Enhancement"];

  return (
    <div className="filter-container">
      {/* loop through categories and create a button for each item */}
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => onFilter(item)}
          className={`category-btn ${activeCategory === item ? "active" : ""}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
