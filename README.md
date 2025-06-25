# FEEDBACK_SYSTEM

A full-stack feedback collection system built with **Node.js**, **Express.js**, **React**, and **MongoDB Atlas**.  
Users can submit feedback through a simple form, and view all feedback in a dashboard with filtering and sorting options.

---

## Features

- **Frontend (React):**
  - Responsive feedback submission form (Name, Email, Message)
  - Dashboard to view all feedback
  - Filter and sort feedback by date/time
  - Clean, modern UI

- **Backend (Node.js + Express):**
  - REST API for feedback submission (`POST /feedback`)
  - REST API for feedback retrieval (`GET /feedback`)
  - Scalable and secure architecture

- **Database (MongoDB Atlas):**
  - Stores feedback with fields: name, email, message, timestamp

---

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm
- MongoDB Atlas account (or use the provided connection string)

### 1. Clone the Repository

```sh
git clone https://github.com/Ashxsh-1/FEEDBACK_SYSTEM.git
cd FEEDBACK_SYSTEM
```

### 2. Backend Setup

```sh
cd backend
npm install
```

- Create a `.env` file in the `backend` folder:
  ```
  MONGO_URI=mongodb+srv://Ashish:Ashish@ashxsh.lvjyss2.mongodb.net/
  ```
- (Optional) Change the database name in the URI if needed.

#### Start the Backend Server

```sh
npm run dev
```
The backend will run on [http://localhost:5000](http://localhost:5000).

### 3. Frontend Setup

```sh
cd ../frontend
npm install
```

#### Start the Frontend

```sh
npm start
```
The frontend will run on [http://localhost:3000](http://localhost:3000).

---

## Usage

- Visit [http://localhost:3000](http://localhost:3000) to access the feedback form.
- Click the **Dashboard** button (top-right) to view all submitted feedback.
- Use the filter icon in the dashboard to sort feedback by date/time.

---

## Project Structure

```
FEEDBACK_SYSTEM/
  backend/
    models/
    routes/
    config/
    .env
    server.js
    ...
  frontend/
    src/
      components/
        FeedbackForm.js
        FeedbackDashboard.js
      api.js
    ...
  README.md
```

---

## Architecture & Flow

1. **Frontend**:  
   - Users submit feedback via a React form.
   - The form sends a POST request to the backend API.
   - The dashboard fetches feedback data via a GET request and displays it with sorting/filtering.

2. **Backend**:  
   - Express.js handles API requests.
   - Feedback is stored in MongoDB Atlas.
   - APIs are scalable and can handle multiple submissions.

3. **Database**:  
   - MongoDB stores each feedback entry with name, email, message, and timestamp.

---

## Optional Features

- The codebase is ready for feedback categorization (e.g., suggestion, bug report, feature request).  
  To enable, add a `category` field in the feedback model and update the form/UI accordingly.

---

## Scalability

- The backend uses asynchronous operations and can handle multiple concurrent submissions.
- The frontend is responsive and works on all device sizes.

---

## How to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

This project is for educational/demo purposes.

---

## Contact

For any queries, contact [Ashxsh-1 on GitHub](https://github.com/Ashxsh-1).
