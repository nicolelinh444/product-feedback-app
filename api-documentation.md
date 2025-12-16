# 📘 Product Feedback API Documentation

Base URL: `https://REPLACE-THIS-WITH-YOUR-DEPLOYED-URL.onrender.com`

## Overview

| Resource      | Method | Endpoint                     | Description                                      |
| ------------- | ------ | ---------------------------- | ------------------------------------------------ |
| `suggestions` | GET    | /get-all-suggestions         | Retrieves all suggestions.                       |
| `suggestions` | GET    | /get-suggestions-by-category | Retrieves all suggestions in specified category. |
| `suggestions` | POST   | /add-one-suggestion          | Adds one suggestions.                            |

---

### 🔹 GET `/get-all-suggestions`

**Description:** Retrieves all suggestions.

**Example Request URL:**

```json
http://localhost:3000/get-all-suggestions
```

**Example Response:**

```json
[
  {
    "id": 1,
    "title": "Add tags for solutions",
    "category": "Enhancement",
    "detail": "Easier to search for solutions based on a specific stack."
  }
]
```

---

### 🔹 GET `/get-suggestions-by-category/:category`

**Description:** Retrieves all suggestions in specified category.

**Example Request URL:**

```json
http://localhost:3000/get-suggestions-by-category/:category
```

**Example Response:**

```json
[
  {
    "id": 2,
    "title": "Add a dark theme option",
    "category": "Feature",
    "detail": "It would help people with light sensitivities and who prefer dark mode."
  },
  {
    "id": 4,
    "title": "Ability to follow others",
    "category": "Feature",
    "detail": "Stay updated on comments and solutions other people post."
  }
]
```

---

### 🔹 POST `/add-one-suggestion`

**Description:** Adds one suggestion.

**Example Request URL:**

```json
http://localhost:3000/add-one-suggestion
```

**Example Request Body:**

```json
{
  "title": "Add sparkles",
  "category": "Enhancement",
  "detail": "Adding sparkles will make the website more cute/pretty!"
}
```

**Example Response:**

```json
Success! Suggestion was added.
```

---
