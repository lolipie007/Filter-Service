
# Filter-Service

## Website 
![Screenshot](./images/Screenshot%202024-11-19%20at%206.46.34%20PM.png)

![Screenshot](./images/Screenshot%202024-11-19%20at%206.47.13%20PM.png)

![Screenshot](./images/Screenshot%202024-11-19%20at%206.47.57%20PM.png)

![Screenshot](./images/Screenshot%202024-11-19%20at%206.48.15%20PM.png)


## Setup Instructions

Follow these steps to set up and run the Filter-Service locally:

### Prerequisites

1. **Node.js** (v16 or higher)  
2. **npm** (v7 or higher) or **yarn**  

### Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/lolipie007/Filter-Service.git
   cd Filter-Service
   ```

2. Navigate to the frontend folder:  
   ```bash
   cd frontend
   ```

3. Install the necessary dependencies:  
   ```bash
   npm install
   ```

4. Navigate to the backend folder:  
   ```bash
   cd ../backend
   ```

5. Install the necessary dependencies:  
   ```bash
   npm install
   ```

6. Configure environment variables if needed (e.g., database connection settings).

7. Run the backend server:  
   ```bash
   npm start
   ```
   The backend will be running at [http://localhost:3000](http://localhost:3000) by default.

8. Run the frontend server:  
   ```bash
   cd ../frontend
   npm start
   ```
   The frontend will be running at [http://localhost:3001](http://localhost:3001) by default.

---

## API Documentation

### 1. GET `/api/items`

This endpoint returns a list of items filtered by category.

- **Request**:  
  - **URL**: `http://localhost:3000/api/items?category=<category>`  
  - **Method**: GET  
  - **Query Parameters**:  
    - `category` (string): The category to filter items by (e.g., `dresses`).  

- **Response**:  
  - **Status Code**: 200 OK  
  - **Body**:  
    ```json
    [
      {
        "id": 1,
        "name": "Summer Dress",
        "category": "dresses",
        "price": 29.99,
        "image": "image_url"
      }
    ]
    ```
- **Basic API Test**:
![Screenshot](./images/Screenshot%202024-11-19%20at%207.00.07%20PM.png)
---

## Design Choices

### Frontend

- **React.js and Tailwind CSS** was used to build the frontend due to its component-based architecture, which allows for easy maintenance and scalability.  
- **Axios** was used for HTTP requests to communicate with the backend, simplifying asynchronous communication.

### Backend

- **Node.js with Express** was chosen for the backend due to its minimal, flexible framework, making it ideal for building APIs.  
- **Database** was stored in memory.

### Folder Structure

- `frontend/` – Contains the React.js application.  
- `backend/` – Contains the Express.js server and business logic.

---

## Assumptions

- The `category` parameter will always be provided in the GET request for `/api/items`.    
- Basic error handling is implemented, but more comprehensive error handling may be needed for production.

---

## Potential Improvements

- **Error Handling**:  
  Implement better error handling for missing data, incorrect queries, or server failures.

- **Pagination**:  
  Support pagination for large datasets to improve efficiency.

- **Caching**:  
  Introduce caching mechanisms (e.g., Redis) to avoid repeated database queries.

- **Authentication & Authorization**:  
  Add user authentication (e.g., JWT) to secure API endpoints and allow user-specific filtering.

- **Unit Testing**:  
  Fully cover the backend and frontend with unit tests to ensure maintainability.

- **Containerization**:  
  Use Docker to containerize the application, making it easier to deploy in various environments.

---

## Contributing

1. Fork the repository.  
2. Create a new branch (`git checkout -b feature-branch`).  
3. Make your changes.  
4. Commit your changes (`git commit -m 'Add feature'`).  
5. Push to the branch (`git push origin feature-branch`).  
6. Create a pull request.
