import { SearchFormInput, SearchFormButton } from "./Map.style";

// Separate component for search input and button
function SearchForm({ searchQuery, setSearchQuery, handleSearch }) {
  return (
    <>
      <SearchFormInput
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter the location"
      />
      <SearchFormButton onClick={handleSearch}>Search</SearchFormButton>
    </>
  );
}
export default SearchForm;
