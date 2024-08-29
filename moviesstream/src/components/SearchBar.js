import React from 'react';
import { FaSearch } from "react-icons/fa";


const SearchBar = ({ onSearch }) => {


  return (
    
      <div className="search-container">
            <FaSearch id="search-icon" />
            <input
            className='search-bar'
                placeholder="Search here..."
                
            />
      </div>
    
  );
};

export default SearchBar;
