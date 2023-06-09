// Separate component for search input and button
function SearchForm({ searchQuery, setSearchQuery, handleSearch }) {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter a location"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
export default SearchForm;
