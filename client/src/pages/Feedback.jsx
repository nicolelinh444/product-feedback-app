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
        detail: formData.detail
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


  return (
  <div className="form-container">
      <h2>Create New Feedback></h2>
      <br />
      {/* feedback form  */}
      <form onSubmit={handleSubmit}>
        {/* title input */}
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
       <select name="category" id="category" onChange=(handleChange)>
           <option value="feature">Feature</option>
           <option value="">Two</option>
           <option value="3">Three</option>
       </select>
        <input
          required
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        {/* country input */}
        <input
          required
          placeholder="Country"
          type="text"
          name="country"
          id="country"
          value={formData.country}
          onChange={handleChange}
        />
        <br />
        {/* bio input */}
        <textarea
          rows="10"
          cols="45"
          placeholder="Bio"
          type="text"
          name="bio"
          id="bio"
          value={formData.bio}
          onChange={handleChange}
        />
        <br />
        <br />
        {/* submit button */}
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>

)
}