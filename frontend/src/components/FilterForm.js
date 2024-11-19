import React, { useState } from "react";

const FilterForm = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    size: "",
    color: "",
    designer: "",
    rating: "",
  });

  // Handle input change and update local state but do not trigger parent callback
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => {
      return { ...prevFilters, [name]: value };
    });
  };

  // Handle apply button click and send the current filters to the parent
  const handleApplyFilters = () => {
    onFilterChange(filters); // Trigger parent function with current filters
  };

  return (
    <form className="space-y-6 bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800">Filter Items</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={filters.category}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter category"
          />
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Price Range</label>
          <div className="flex space-x-4">
            <input
              type="number"
              name="minPrice"
              placeholder="Min"
              value={filters.minPrice}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Size</label>
          <input
            type="text"
            name="size"
            value={filters.size}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter size"
          />
        </div>

        {/* Color */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Color</label>
          <input
            type="text"
            name="color"
            value={filters.color}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter color"
          />
        </div>

        {/* Designer */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Designer</label>
          <input
            type="text"
            name="designer"
            value={filters.designer}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter designer"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <input
            type="number"
            name="rating"
            value={filters.rating}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter rating"
          />
        </div>
      </div>

      {/* Apply Filters Button */}
      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={handleApplyFilters} // Call handleApplyFilters on button click
          className="w-full sm:w-auto bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Apply Filters
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
