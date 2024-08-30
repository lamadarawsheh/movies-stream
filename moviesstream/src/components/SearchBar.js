import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    
      <div className="search-container">
            <FaSearch id="search-icon" />
            <input
            className='search-bar'
                placeholder="Search here..."
                // value={}
                
            />
      </div>
    
  );
};

export default SearchBar;
