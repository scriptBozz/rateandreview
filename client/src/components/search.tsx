import React, {  useState } from "react";

export default function Search(){
  const [query, setQuery] = useState<string>("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle search logic here, using the `query` state
    alert(`Search triggered for: ${query}`);
  };

  return (
    <form className="search-container" onSubmit={handleSearch}>
      <input
        type="text"
        className="search-input"
        placeholder="Find businesses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search"
      />
      <button type="submit" className="search-button">
        🔍
      </button>
    </form>
  );
};


