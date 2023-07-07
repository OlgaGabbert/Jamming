import React from 'react';
import './SearchResults.css'

function SearchResults({ results }) {
  return (
    <div>
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;