import { useState } from "react";

export default function Filter({ onFilter, activeCategory }) {
  const categories = ["All", "UI", "UX", "Bug", "Feature", "Enhancement"];

  return (
    <div className="filter-container">
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
