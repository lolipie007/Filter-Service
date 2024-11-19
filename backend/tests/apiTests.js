const axios = require("axios");

const BASE_URL = "http://localhost:3001/api/items";

async function runTests() {
  try {
    console.log("Test 1: Filter by category 'dresses'");
    const res1 = await axios.get(`${BASE_URL}?category=dresses`);
    console.log("Result:", res1.data);

    console.log("Test 2: Filter by price range (50 to 100)");
    const res2 = await axios.get(`${BASE_URL}?minPrice=50&maxPrice=100`);
    console.log("Result:", res2.data);

    console.log("Test 3: Sort by price ascending");
    const res3 = await axios.get(`${BASE_URL}?sort=price:asc`);
    console.log("Result:", res3.data);

    console.log("Test 4: Pagination (page 2, limit 3)");
    const res4 = await axios.get(`${BASE_URL}?page=2&limit=3`);
    console.log("Result:", res4.data);
  } catch (err) {
    console.error(err);
  }
}

runTests();
