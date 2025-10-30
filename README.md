# 📚 Book Finder — React + Vite

A simple and responsive **Book Finder web app** built using **React** and the **Open Library API**.  
This app allows users to search for books by title and view details such as the **book cover**, **author(s)**, and **first publish year**.

---

## ✨ Features

- 🔍 Search books by title  
- ⚡ Real-time data from [Open Library API](https://openlibrary.org/developers/api)  
- 🖼️ Display cover image, title, authors, and first publish year  
- 🚫 Handles missing results and API errors gracefully  
- 💎 Clean, responsive design using CSS (or Tailwind optional)  
- ⚙️ Built with **React + Vite** for speed and simplicity  

---

## 🧩 Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | React (Vite) |
| Styling | CSS (Plain or Tailwind) |
| API | [Open Library Search API](https://openlibrary.org/search.json?title=) |
| Hosting | GitHub Pages / Vercel / Netlify |

---

## 📂 Folder Structure
book-finder/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
├── main.jsx
├── index.css
├── App.jsx
└── components/
└── BookCard.jsx

---

## ⚙️ Installation & Local Setup

Follow these steps to run the project locally in VS Code 👇

###  Clone this repository
```bash
git clone https://github.com/<your-username>/book-finder.git
cd book-finder

Install dependencies
npm install

Start the development server
npm run dev
Then open the local URL shown in the terminal (usually http://localhost:5173)

API Reference
🔗 API Endpoint
https://openlibrary.org/search.json?title={bookTitle}

🧾 Example
https://openlibrary.org/search.json?title=harry%20potter

Troubleshooting
Problem	Possible Solution
No results found-Try a different book title.
Network Error-Check your internet connection.
App not starting-Make sure you ran npm install before npm run dev.

Author
Ramu Rapaka
Email: rapakaramu52@gmail.com
