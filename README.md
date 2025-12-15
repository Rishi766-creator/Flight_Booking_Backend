#  Flight Booking System (Full‑Stack)

A full‑stack **Flight Booking Web Application** built with **React (Vite)** on the frontend and **Node.js + Express + MongoDB** on the backend. The project supports flight search, dynamic surge pricing, wallet deduction, authenticated bookings, PDF ticket generation, and deployment on modern cloud platforms.

---

##  Live Demo

* **Backend (Render):** [https://flight-booking-backend-q1zu.onrender.com](https://flight-booking-backend-q1zu.onrender.com)

---

##  Features

### Authentication

* JWT‑based authentication
* Protected routes (booking history, booking actions)
* Token stored securely in browser storage

### Flight Search

* Search flights by **From, To, Date**
* Real‑time flight availability

### Dynamic Surge Pricing

* Tracks booking attempts per flight
* Applies surge pricing after multiple attempts
* **Automatically resets price after 10 minutes**

### Wallet System

* Global wallet balance
* Automatic deduction on booking
* Insufficient balance protection

### Booking & Tickets

* Passenger name & age captured during booking
* Unique PNR generation
* **PDF Ticket generation (PDFKit)**
* Downloadable ticket per booking

### Booking History

* View all bookings (latest first)
* Download tickets anytime using PNR

---

##  Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* JWT Authentication
* PDFKit

### Deployment

* Frontend → **Vercel**
* Backend → **Render**
* Database → **MongoDB Atlas (Free Tier)**

---

## 📁 Project Structure

```
backend/
 ├─ controllers/
 ├─ models/
 ├─ routes/
 ├─ middleware/
 ├─ utils/
 └─ server.js
```

---


## ⚙️ Installation & Local Setup

### 1️⃣ Clone Repository

```bash
git clone 
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
node server.js
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🧠 Key Learnings

* Full authentication flow with JWT
* Handling protected routes in React
* Managing real‑world business logic (surge pricing)
* PDF generation on server
* Cloud deployment (Render + Vercel)
* MongoDB Atlas setup & IP whitelisting

---

## 🧪 Test Credentials

```
Email: rishi@gmail.com
Password: rishi123
```

---


## ⭐ If you like this project

Give it a ⭐ on GitHub — it motivates me a lot!
