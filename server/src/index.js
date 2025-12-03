// DB Fiddle Link: https://www.db-fiddle.com/f/riyuyHeZvnnUC3FYYafb5R/6

// Boilerplate Code to Set Up Server

// importing Node Modules
import express from "express";
import pg from "pg"; // pg stands for PostgreSQL, for connecting to the database
import config from "./config.js"; // importing the connection string to our database hosted on Neon

//connecting to our PostgreSQL database, or db for short
const db = new pg.Pool({
  // new pg.Pool() creates a connection to the database
  connectionString: config.databaseUrl, // credentials to access the database. Keep private!
  ssl: true, // use SSL encryption when connecting to the database to keep data safe
});

const app = express(); // create an instance of the Express module, which gives us access to all of Express's functions, methods, useful superpowers

app.use(express.json()); // This server will receive and respond to requests with JSON data

const port = 3000; // Setting which port to listen or receive requests

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});

/*----------------------------------
Helper Functions
----------------------------------*/

// 1. GET /get-all-suggestions
async function getAllSuggestions() {
  const data = await db.query("SELECT * FROM suggestions ORDER BY id ASC");
  return data.rows;
}

// 2. GET /get-suggestions-by-category/:category
async function getSuggestionByCategory(category) {
  const data = await db.query(`SELECT * FROM suggestions WHERE category = $1`, [
    category,
  ]);
  return data.rows;
}

// 3. POST /add-one-suggestion
async function addOneSuggestion(title, category, detail) {
  await db.query(
    "INSERT INTO suggestions (title, category, detail) VALUES ($1, $2, $3)",
    [title, category, detail]
  );
}

/*----------------------------------
API Endpoints
----------------------------------*/

// 1. GET /get-all-suggestions
app.get("/get-all-suggestions", async (req, res) => {
  const allSuggestions = await getAllSuggestions();
  res.json(allSuggestions);
});

// 2. GET /get-suggestions-by-category/:category
app.get("/get-suggestions-by-category/:category", async (req, res) => {
  let category = req.params.category;
  const detail = await getSuggestionByCategory(category);
  res.json(detail);
});

// 3. POST /add-one-suggestion
app.post("/add-one-suggestion", async (req, res) => {
  const { title, category, detail } = req.body;

  await addOneSuggestion(title, category, detail);

  res.send("Success! Pantry item was added.");
});
