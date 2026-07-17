# Online-shopping-cart
# 🛍️ Online Shopping Backend

A RESTful backend API for an **Online Shopping Application** built using **Node.js, Express.js, MongoDB, and Mongoose**. The project follows the **MVC Architecture** and provides secure user authentication along with product and cart management.

---

## 🚀 Features

- 🔐 User Authentication (Signup & Login)
- 🔒 Password Hashing using bcrypt
- 🔑 JWT Authentication
- 📦 Product Management
  - Add Product
  - Update Product
  - Delete Product
  - View Products
- 🛒 Cart Management
  - Add to Cart
  - View Cart
  - Remove from Cart
- 🛡️ Admin Authorization
- 🌐 MongoDB Database Integration
- 📂 MVC Architecture
- ⚙️ Environment Variable Support
- 📡 RESTful APIs

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt
- dotenv

---

## 📁 Project Structure

```
PROJECT-BACKEND/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── cartController.js
│   └── productController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── adminMiddleware.js
│
├── models/
│   ├── User.js
│   └── Products.js
│
├── routes/
│   ├── authRoutes.js
│   ├── cartRoutes.js
│   ├── productRoutes.js
│   └── testRoutes.js
│
├── .env
├── package.json
└── package-lock.json
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/project-backend.git
```

### 2️⃣ Go to Project Folder

```bash
cd project-backend
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Create a `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5️⃣ Start the Server

Development Mode

```bash
npm run dev
```

Production Mode

```bash
npm start
```

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register User |
| POST | `/api/auth/login` | Login User |

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get All Products |
| GET | `/api/products/:id` | Get Product by ID |
| POST | `/api/products` | Add Product |
| PUT | `/api/products/:id` | Update Product |
| DELETE | `/api/products/:id` | Delete Product |

### Cart

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cart` | View Cart |
| POST | `/api/cart/add` | Add Product to Cart |
| DELETE | `/api/cart/remove/:id` | Remove Product from Cart |

---

## 🔒 Authentication

Protected routes require a JWT Token.

Example Header:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 🧪 API Testing

You can test the APIs using:

- Thunder Client
- Postman

---

## 📌 Future Improvements

- ❤️ Wishlist Feature
- 📦 Order Management
- 💳 Payment Gateway Integration
- ⭐ Product Reviews & Ratings
- 📸 Product Image Upload
- 📊 Admin Dashboard

---

## 👩‍💻 Author

**Gouri Kalagate**

BCA Student | Full Stack Developer | MERN Stack Learner

---

## 📜 License

This project is developed for educational and learning purposes.
