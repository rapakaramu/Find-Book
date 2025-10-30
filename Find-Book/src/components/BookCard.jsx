import React from "react";

export default function BookCard({ book }) {
  const { title, authors, first_publish_year, cover_id } = book;
  const coverUrl = cover_id
    ? `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
    : null;

  return (
    <article className="card">
      <div className="cover">
        {coverUrl ? (
          <img src={coverUrl} alt={title} />
        ) : (
          <div className="no-cover">📖</div>
        )}
      </div>
      <div className="meta">
        <h3 className="book-title">{title}</h3>
        <p className="book-authors">
          {authors?.length ? authors.join(", ") : "Unknown Author"}
        </p>
        <p className="book-year">{first_publish_year || "Year Unknown"}</p>
      </div>
    </article>
  );
}
