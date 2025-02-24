# CarRental

This is a simple RESTful API built with Node.js and Express.js for managing car rentals and user authentication. Users can register, log in, view their profiles and browse available rental cars.

---

## Features

- **User Authentication**: Register and log in users with secure password handling.
- **Profile Management**: Retrieve user profile information.
- **Car Listings**: View and explore available rental cars.

---

##  Installation and Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Qendresa-Potoku/CarRental.git
   cd CarRental

2. **Install dependencies:**
   ```bash
   npm install

3. **Configure environment variables:**
   Create a .env file and add:
   ```bash
   PORT=5000
   MONGO_URI=mongodb://localhost:27017
   JWT_SECRET=Jh4!v8@pX20bQ9%yL7^rT1$zW6&G0*K3

4. **Running the Project:**
   ```bash
   npm start
  The API will run at: http://localhost:3000/

## API Endpoints

### Authentication Routes

- **Register User**
  - **Endpoint:** `POST /api/auth/register`
  - **Description:** Registers a new user.
  - **Request Body:**
    ```json
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "password": "password123"
    }
    ```

- **Login User**
  - **Endpoint:** `POST /api/auth/login`
  - **Description:** Logs in an existing user.
  - **Request Body:**
    ```json
    {
      "email": "johndoe@example.com",
      "password": "password123"
    }
    ```

- **Get My Profile**
  - **Endpoint:** `GET /api/auth/my-profile`
  - **Description:** Fetches the profile of the authenticated user.
  - **Headers:** 
    - `Authorization: Bearer jwt_token`

### Car Rental Routes

- **Get Rental Cars**
  - **Endpoint:** `GET /api/cars/rental-cars`
  - **Description:** Retrieves a list of available rental cars sorted by price.

   
