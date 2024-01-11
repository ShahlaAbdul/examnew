import React, { createContext, useState } from "react";

export const SearchContext = createContext();

function SearchProvider({ children }) {
  const [searchdata, setSearchdata] = useState("");

  function searchbyFilter(x) {
    setSearchdata(x.target.value);
    }
    
  return (
    <SearchContext.Provider value={{ searchdata, searchbyFilter }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
