# MERN Stack Project Setup Guide

This guide outlines the steps and tools needed to create a MERN (MongoDB, Express.js, React, Node.js) application with basic authentication and authorization.

---

## Project Structure & Setup

1. **Initialize the Project:**

   - Create a root project folder.
   - Inside it, create two subfolders: `server` and `client`.

2. **Server Setup (Node.js & Express):**

   - In the `server` folder, run `npm init` to initialize a Node.js project.
   - Install required dependencies:
     - **Core:** `express`, `mongoose`, `dotenv`, `cors`
     - **Auth & Security:** `jsonwebtoken`, `bcrypt`
     - **Dev & Utility:** `morgan`, `nodemon`
   - Create a `.env` file with variables such as:
     - `PORT=5000`
     - `MONGODB_URI=your-mongodb-uri`
     - `JWT_SECRET=your-jwt-secret`

   _Remember: Do not commit `.env` files to version control._

3. **Database & Models:**

   - Use `mongoose` to connect to MongoDB and define your `User` model.
   - Include fields like `name`, `email`, `password`, `isAdmin` in your `User` model.

4. **Middleware & Configuration:**

   - Use `express.json()` (or `body-parser`) for request body parsing.
   - Set up `morgan` for logging HTTP requests.
   - Enable CORS with the `cors` package.

5. **Authentication & Authorization:**

   - Implement user registration and login routes.
   - Hash user passwords with `bcrypt` before saving.
   - Generate and verify JWT tokens with `jsonwebtoken`.
   - Create `auth` middleware to protect certain routes.
   - Create `adminCheck` middleware for admin-only routes.

6. **Routes & Controllers:**

   - Organize your routes into separate files:
     - `authRoutes.js` for `/auth/register` and `/auth/login`.
     - `userRoutes.js` for user profile and other authenticated endpoints.
     - `adminRoutes.js` for admin-specific actions (e.g., listing all users).
   - Implement controllers to handle the logic for each route (e.g., `authController`, `userController`, `adminController`).

7. **Security Considerations:**

   - Store JWT tokens in `localStorage` on the client side (for this project level).
   - Ensure all sensitive keys are loaded from `.env`.
   - Validate incoming data on the server side.
   - Consider using HTTPS in production environments.

8. **Server Startup:**
   - Add a `dev` script in `package.json` (e.g., `"dev": "nodemon src/index.js"`).
   - Run `npm run dev` to start the server with automatic reloading.

---

## Client Setup (React)

1. **Initialize React App:**

   - In the `client` folder, run `npx create-react-app .` to create a React application.

2. **Dependencies & Configuration:**

   - Install additional packages as needed, e.g. `axios` for HTTP requests.
   - Optionally set environment variables for the client, like `REACT_APP_BASE_URL`.

3. **Authentication Flow:**

   - Store the JWT token returned from the server in `localStorage`.
   - Use React’s Context API or a Reducer to manage authentication state.
   - Protect certain routes by checking for a stored token before rendering protected components.

4. **API Integration:**

   - Create a dedicated `api.js` service file for Axios requests.
   - Include the JWT token in the `Authorization` header of each request if it exists.
   - Implement `register`, `login`, and authenticated endpoints like `getProfile`.

5. **Routing & Validation:**

   - Use `react-router-dom` to create routes for `Home`, `Login`, `Register`, `Dashboard`, etc.
   - Perform basic client-side validations on form inputs (e.g., ensure valid emails and passwords).

6. **User Interface & State Management:**
   - On successful login, store the user info and token in `localStorage`.
   - Update the global state (Context/Reducer) so that all components know the user is authenticated.
   - Implement logout functionality by removing the token from `localStorage` and resetting user state.

---

## Improving & Maintaining the Application

1. **Follow Industry Best Practices:**

   - Ensure strong password hashing (already done with `bcrypt`).
   - Adhere to RESTful API design principles.
   - Add global error handling middleware on the server.

2. **Testing & Debugging:**

   - Test the API endpoints with Postman.
   - Handle errors gracefully on the client-side and show user-friendly error messages.

3. **Deployment Considerations:**
   - Set environment variables on the hosting platform.
   - Build the React app for production and serve it from the server or a CDN.
   - Consider using secure cookies for JWT in production-level applications.

---

**Outcome:**  
The MERN stack project is now set up with basic authentication and authorization. You can expand this project by adding more features, such as user roles, permissions, and additional CRUD operations. Remember to keep your dependencies updated and follow security best practices to ensure a robust and secure application. Good luck with your project! (PS: The application needs to be deployed to be accessible to users.)
