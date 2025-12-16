# 📝 Product Feedback App

## 📌 Project Description & Purpose

This app is my second full-stack app ever and final project in my AnnieCannons backend course. I am excited to share what I have learned and accomplished so far.

The app allows users to see feedback that has been added and fill out a form to add their own feedback to the page.

## 🚀 Live Site

Check out the app: https://productfb-app.netlify.app/

## 🖼️ Screenshots

<img width="900" height="563" alt="Screenshot 2025-12-15 at 8 50 20 PM" src="https://github.com/user-attachments/assets/b91812d5-415d-41d7-a54d-a4d8e7540aaa" />

## ✨ Features

This is what you can do on the app:

- See feedback
- Filter by category
- Add feedback

## 🛠️ Tech Stack

**Frontend**

- **Languages:** HTML, CSS, Javascript
- **Framework:** React
- **Deployment:** Netlify
- **Other:** Vite

**Server/API**

- **Languages:** Node.js
- **Framework:** Express
- **Deployment:** Render
- **Other:** Postman

**Database**

- **Languages:** PostgreSQL
- **Deployment:** Neon

## 🔹 API Documentation

These are the API endpoints I built:

1. /get-all-suggestions
2. /get-suggestion-by-category/:category
3. /add-one-suggestion

Learn more about the API endpoints here: _**[https://github.com/nicolelinh444/product-feedback-app/blob/main/api-documentation.md]**_

## 🗄️ Database Schema

Here’s the SQL I used to create my tables:

```sql
CREATE TABLE suggestions (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  detail VARCHAR NOT NULL
);
```

## 💭 Reflections

**What I learned:** How to build and deploy a full stack application

**What I'm proud of:** I was able to complete this project on my own!

**What challenged me:** I originally used lowercase letters for my categories, so I ended up having to change my data and fix my code.

**Future ideas for how I'd continue building this project:**

1. Add hamburger menu in mobile view
2. Upvote product suggestions
3. Edit/delete an existing suggestion

## 🙌 Credits & Shoutouts

Thanks to AnnieCannons, for the opportunity to be a part of this program. I have grown so much and now I'm proud to say that I can/have created full stack applications!
