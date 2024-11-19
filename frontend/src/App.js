import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterForm from "./components/FilterForm";
import ItemList from "./components/ItemList";
import Pagination from "./components/Pagination";

const App = () => {
  const [sortBy, setSortBy] = useState(""); // Sorting by price or rating
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 8, // Number of items per page
  });
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch items based on the filters, sortBy, and pagination
  const fetchItems = async (filters) => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/api/items", {
        params: { ...filters, sortBy, ...pagination },
      });
      setItems(response.data);  // Assuming API returns data in { items, page, totalPages } format
    } catch (error) {
      setError("An error occurred while fetching the items.");
    } finally {
      setLoading(false);
    }
  };

  // Trigger fetch when sortBy or pagination change
  useEffect(() => {
    fetchItems({}); // Passing empty object for initial load
  }, [sortBy, pagination]);

  // Handle filter changes from the form
  const handleFilterChange = (newFilters) => {
    fetchItems(newFilters); // Fetching items based on updated filters
  };
  const [sortOrder, setSortOrder] = useState('asc');
  // Handle sort change
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setPagination((prevPagination) => ({ ...prevPagination, page }));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">Fashion Items</h1>
        </header>

        {/* Filter Form */}
        <section className="mt-8">
          <FilterForm onFilterChange={handleFilterChange} />
        </section>

        {/* Sorting */}
        <section className="mt-4">
          <label htmlFor="sortBy" className="block text-lg font-semibold text-gray-700">Sort by:</label>
          <select
            id="sortBy"
            onChange={handleSortChange}
            value={sortBy}
            className="mt-2 p-2 w-full sm:w-64 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </section>

        {/* Display loading or error message */}
        {loading && <p className="mt-4 text-lg text-gray-600">Loading items...</p>}
        {error && <p className="mt-4 text-lg text-red-500">{error}</p>}

        {/* Item List */}
        <section className="mt-8">
          <ItemList items={items.items || []} />
        </section>

        {/* Pagination */}
        <section className="mt-8">
          <Pagination
            currentPage={items.page || 1}
            totalPages={items.totalPages || 1}
            onPageChange={handlePageChange}
          />
        </section>
      </div>
    </div>
  );
};

export default App;
