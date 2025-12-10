import { useState } from "react";

export default function Filter({ onFilter, activeCategory }) {
  const categories = ["all", "ui", "bug", "feature", "enhancement"];

  return (
    <div className="filters">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => onFilter(item)}
          className={`filter-buttons ${
            activeCategory === item ? "active" : ""
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
