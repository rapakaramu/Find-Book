import React, { useState } from "react";
import BookCard from "./components/BookCard";

export default function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function searchBooks(e) {
    e && e.preventDefault();
    const title = query.trim();
    if (!title) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}&limit=20`
      );
      if (!response.ok) throw new Error(`API returned ${response.status}`);

      const data = await response.json();
      if (!data.docs?.length) {
        setBooks([]);
        setStatus("no-results");
        return;
      }

      const mapped = data.docs.map((doc) => ({
        key: doc.key,
        title: doc.title,
        authors: doc.author_name || [],
        first_publish_year: doc.first_publish_year,
        cover_id: doc.cover_i || null
      }));

      setBooks(mapped);
      setStatus("success");
    } catch (err) {
      setErrorMsg(err.message);
      setBooks([]);
      setStatus("error");
    }
  }

  return (
    <div className="app">
      <header className="topbar">
        <h1 className="logo">📚 Book Finder</h1>
        <p className="subtitle">Search books by title using Open Library</p>
      </header>

      <main className="container">
        <form className="search" onSubmit={searchBooks}>
          <input
            className="search-input"
            placeholder="Enter book title (e.g., The Hobbit)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn" type="submit">
            {status === "loading" ? "Searching..." : "Search"}
          </button>
        </form>

        {status === "idle" && (
          <div className="hint">Type a title and press Search.</div>
        )}
        {status === "loading" && (
          <div className="hint">Searching Open Library…</div>
        )}
        {status === "no-results" && (
          <div className="notice">No books found. Try another query.</div>
        )}
        {status === "error" && (
          <div className="error">Error: {errorMsg}</div>
        )}

        {status === "success" && books.length > 0 && (
          <section className="results">
            <p className="results-count">{books.length} result(s)</p>
            <div className="grid">
              {books.map((b) => (
                <BookCard key={b.key} book={b} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
