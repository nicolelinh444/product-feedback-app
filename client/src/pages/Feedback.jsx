// pages/Feedback.jsx
import { useState, useEffect } from "react";

export default function Feedback() {
  // initial form state (starts as empty strings)
  const emptyFormState = { title: "", category: "", detail: "" };
  // stores form inputs
  const [formData, setFormData] = useState(emptyFormState);
  const [suggestion, setSuggestion] = useState(null);

  // update formData object when user changes input field
  const handleChange = (event) => {
    // gets input field's name and value
    const { name, value } = event.target;
    // updates matching field in form data
    setFormData({ ...formData, [name]: value });
  };

  // storeUserData from user's form input
  const storeSuggestion = async () => {
    const response = await fetch("/api/add-one-suggestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        category: formData.category,
        detail: formData.detail,
      }),
    });
  };

  // handle form submission
  const handleSubmit = (event) => {
    // prevents page from reloading
    event.preventDefault();
    console.log(formData);

    storeSuggestion();
    // sets user info to form data
    setSuggestion(formData);
    // clear form now that the form is completed and data is captured
    setFormData(emptyFormState);
  };

  // make cancel button functional
  const handleCancel = () => {
    setFormData(emptyFormState); // clears form inputs
  };

  return (
    <div className="form-container">
      <h2>Create New Feedback></h2>
      <br />
      {/* feedback form  */}
      <form onSubmit={handleSubmit}>
        {/* title input */}
        <p>
          <b>Feedback Title</b>
          <br />
          Add a short, descriptive headline
        </p>
        <input
          required
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        {/* category input */}
        <p>
          <b>Category</b>
          <br />
          Choose a category for your feedback
        </p>
        <select name="category" id="category" onChange={handleChange}>
          <option value="feature">Feature</option>
          <option value="ui">UI</option>
          <option value="enhancement">Enhancement</option>
          <option value="bug">Bug</option>
        </select>
        <br />
        {/* detail input */}
        <p>
          <b>Feedback Detail</b>
          <br />
          Include any specific comments on what should be improved, added, etc.
        </p>
        <textarea
          rows="10"
          cols="45"
          type="text"
          name="detail"
          id="detail"
          value={formData.detail}
          onChange={handleChange}
        />
        <br />
        <br />

        {/* cancel button */}
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>

        {/* submit button */}
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
