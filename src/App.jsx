import { useState } from 'react'
import './App.css'
import SearchBar from './components/searchBar/SearchBar';
import SearchResults from './components/searchResults/SearchResults';

function App() {
  const searchResults = [
    { id: 1, title: 'Result 1' },
    { id: 2, title: 'Result 2' },
    { id: 3, title: 'Result 3' }
  ];
  
  return (
    <>
      <SearchBar /> 
      {searchResults.length > 0 && <SearchResults results={searchResults} />}
    </>
  )
}

export default App
