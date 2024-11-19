// backend/src/api/filters.js
const express = require('express');
const router = express.Router();
const fashionItems = require('/Users/karthik/Downloads/filter-service/backend/data/fashionItems.js'); // Assuming fashion items are stored in memory

// Helper function to apply filters
const filterItems = (items, filters) => {
  return items.filter(item => {
    let isMatch = true;

    if (filters.category && item.category !== filters.category) {
      isMatch = false;
    }
    if (filters.size && item.size !== filters.size) {
      isMatch = false;
    }
    if (filters.color && item.color !== filters.color) {
      isMatch = false;
    }
    if (filters.designer && item.designer !== filters.designer) {
      isMatch = false;
    }
    if (filters.rating && item.rating !== parseInt(filters.rating)) {
      isMatch = false;
    }
    if (filters.minPrice && item.price < parseFloat(filters.minPrice)) {
      isMatch = false;
    }
    if (filters.maxPrice && item.price > parseFloat(filters.maxPrice)) {
      isMatch = false;
    }

    return isMatch;
  });
};

// Helper function to sort items
const sortItems = (items, sortBy) => {
  if (sortBy === 'price') {
    return items.sort((a, b) => a.price - b.price);
  }
  if (sortBy === 'rating') {
    return items.sort((a, b) => b.rating - a.rating);
  }
  return items;
};

// Route to get items based on filters, sorting, and pagination
router.get('/items', (req, res) => {
  const filters = req.query;
  let filteredItems = filterItems(fashionItems, filters);

  // Sort items
  if (filters.sortBy) {
    filteredItems = sortItems(filteredItems, filters.sortBy);
  }

  // Pagination
  const page = parseInt(filters.page) || 1;
  const limit = parseInt(filters.limit) || 10;
  const offset = (page - 1) * limit;
  const paginatedItems = filteredItems.slice(offset, offset + limit);

  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / limit);

  res.json({
    page,
    totalItems,
    totalPages,
    items: paginatedItems,
  });
});

module.exports = router;
