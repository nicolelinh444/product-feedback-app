# 📝 Product Feedback App

## 📌 Project Description & Purpose

This app is my second full-stack app ever and final project in my AnnieCannons backend course. I am excited to share what I have learned and accomplished so far.

The app allows users to see feedback that has been added and fill out a form to add their own feedback to the page.

## 🚀 Live Site

Check out the app: https://productfb-app.netlify.app/

## 🖼️ Screenshots

Here is where you'll include a screenshot of your project to show it off!

Your instructor will walk you through this process with the rest of the class. Please be patient until the time comes! In the meantime, you can fill out all other sections of this template.

1. Use `Command + Control + Shift + 4` to take a screenshot of your site and copy the screenshot to your clipboard
2. Find your Github README.md file on the Github website
3. Edit the site by clicking on the Pencil icon ✏️
4. Move your cursor to the position where you want to paste the screenshot, then paste it. Github will convert the pasted screenshot into an `<img>` tag
5. Select "Commit changes..." to save your changes

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
