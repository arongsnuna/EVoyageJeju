import React, { useState } from "react";
import { SearchContainer, ButtonContainer } from "./Community.style";
const SearchBar = ({ onSearch }) => {
  const [searchType, setSearchType] = useState("title"); // 'title' 또는 'author'
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    onSearch(searchType, keyword);
  };

  return (
    <SearchContainer>
      <select onChange={(e) => setSearchType(e.target.value)}>
        <option value="title">제목</option>
        <option value="author">글쓴이</option>
      </select>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <ButtonContainer>
        <button onClick={handleSearch}>검색</button>
      </ButtonContainer>
    </SearchContainer>
  );
};

export default SearchBar;
