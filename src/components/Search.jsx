import React from 'react';
import { useState } from 'react';

function Search(props) {
    
  //! ---- DESTRUTURAR ----
  const { searchList } = props;

  // ! ---- STATES -----
  const [search, setSearch] = useState('');

  //! ---- EVENTOS ----
  const handleSearch = (event) => {
    setSearch(event.target.value);
    searchList(event.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="search"> Buscar </label>
        <input
          type="text"
          name="search"
          onChange={handleSearch}
          value={search}
        />
      </form>
    </div>
  );
}

export default Search;
