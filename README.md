# Banking System RESTful API

This project is a **Banking System RESTful API** designed to manage users, transactions, and bank accounts securely and efficiently. It provides a robust backend for performing CRUD operations, user authentication, and file uploads. The API is built with modern technologies to ensure scalability, security, and performance. 

## Features

1. **User Management**:
   - User registration, login, and authentication using **JSON Web Tokens (JWT)**.
   - Password recovery with secure reset mechanisms.
   - User dashboard for personalized data.

2. **Transaction Management**:
   - Create, read, update, and delete transactions.
   - View transaction history.

3. **Bank Account Management**:
   - CRUD operations for bank accounts.
   - Manage account details securely.

4. **File Uploads**:
   - Upload images locally or to **ImageKit** using **Multer**.

5. **Error Monitoring**:
   - Integrated with **Sentry** for error tracking and performance monitoring.

6. **API Documentation**:
   - Comprehensive API documentation using **Swagger UI**.

7. **Code Quality**:
   - Middleware logging with **Morgan**.

## Tech Stack

- **Backend Framework**: [Express.js](https://expressjs.com/) - A fast and minimalist web framework for Node.js.
- **Database**: [PostgreSQL](https://www.postgresql.org/) - A powerful open-source relational database.
- **ORM**: [Prisma](https://www.prisma.io/) - A next-generation ORM for database management.
- **Authentication**: [JSON Web Tokens (JWT)](https://jwt.io/) - Secure token-based authentication.
- **Password Hashing**: [bcrypt](https://www.npmjs.com/package/bcrypt) - Secure password hashing.
- **File Uploads**: [Multer](https://www.npmjs.com/package/multer) - Middleware for handling file uploads.
- **Error Monitoring**: [Sentry](https://sentry.io/) - Real-time error tracking and performance monitoring.
- **API Documentation**: [Swagger UI](https://swagger.io/tools/swagger-ui/) - Interactive API documentation.
- **Testing & Coverage**: [Istanbul](https://istanbul.js.org/) - Code coverage analysis.
- **View Engine**: [EJS](https://ejs.co/) - Embedded JavaScript templates for rendering views.

Here the link for demo : [Live Demo](https://dull-lime-elephant-cape.cyclic.app/)

# Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Endpoints](#endpoints)
- [CRUD Operations](#crud-operations)

# Features

1. **User Management:**
   - Register new users.
   - Authenticate users through a login system.
   - Implement a forgot password mechanism for password recovery.
   - Allow users to reset their passwords.

2. **Transaction Management:**
   - Perform CRUD operations on user transactions.
   - View transaction history.

3. **Bank Account:**
   - Implement CRUD operations for bank accounts.
   - Manage account details.

4. **User Dashboard:**
   - Display a personalized dashboard for each user.

# Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AldowadSimanjuntak/Banking-System
   npm install
   
2. Set up your .env file using .env.example as a reference.

4. Run the database migration and generate Prisma Client:
   ```bash
      npx prisma migrate dev --name init
      npx prisma generate
5. Start the development server:
   ```bash
   pnpm dev

# Endpoints
## User Endpoint:
/api/users/register: Register a new user.

/api/users/login: Authenticate a user.

/api/users/forgot-password: Request a password reset.

/api/users/reset-password: Reset user password.

# CRUD Operations

## User:

Create: Register a new user using /api/users/register.

Read: Authenticate a user using /api/users/login.

Update: Request a password reset using /api/users/forgot-password.

Delete: Reset user password using /api/users/reset-password.

## Transaction:

Create: Add a new transaction using /api/transactions.

Read: View transaction history using /api/transactions/history.

Update: Update an existing transaction using /api/transactions/:id.

Delete: Delete a transaction using /api/transactions/:id.

## Bank Account:

Create: Add a new bank account using /api/account-bank.

Read: Retrieve bank account details using /api/account-bank/:id.

Update: Update bank account details using /api/account-bank/:id.

Delete: Delete a bank account using /api/account-bank/:id.


| Module         | Create                        | Read                                | Update                            | Delete                            |
|----------------|-------------------------------|-------------------------------------|-----------------------------------|-----------------------------------|
| **User**        | `/api/users/register`         | `/api/users/login`                  | `/api/users/forgot-password`      | `/api/users/reset-password`       |
| **Transaction** | `/api/transactions`           | `/api/transactions/history`         | `/api/transactions/:id`           | `/api/transactions/:id`           |
| **Bank Account**| `/api/account-bank`           | `/api/account-bank/:id`             | `/api/account-bank/:id`           | `/api/account-bank/:id`           |

## References :

1. [Prisma – Next-generation Node.js and TypeScript ORM](https://www.prisma.io/docs)
2. [Express.js – Web Framework for Node.js](https://expressjs.com/)
3. [PostgreSQL – The World’s Most Advanced Open Source Relational Database](https://www.postgresql.org/docs/)
4. [JSON Web Tokens (JWT) – Introduction & Guide](https://jwt.io/introduction)
5. [BCrypt – Password Hashing Function](https://www.npmjs.com/package/bcrypt)
6. [Nodemailer – Send Emails with Node.js](https://nodemailer.com/about/)
7. [Sending Emails Securely using Node.js, Nodemailer, SMTP, Gmail, and OAuth2](https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a)
8. [Using Nodemailer with Google OAuth](https://stackoverflow.com/questions/51342952/using-nodemailer-with-google-oauth)
9. [dotenv – Load environment variables](https://www.npmjs.com/package/dotenv)
10. [CORS in Node.js – Enable Cross-Origin Resource Sharing](https://expressjs.com/en/resources/middleware/cors.html)
11. [Middleware in Express.js – How It Works](https://expressjs.com/en/guide/using-middleware.html)
12. [RESTful API Design – Best Practices](https://restfulapi.net/)






[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Screenshot example :

## Endpoint User :
![image](https://github.com/AldowadSimanjuntak/Banking-System/assets/102914659/b1bc7007-f8de-476a-b57f-897eeeabf335)

## Endpoint Transaction :
![image](https://github.com/user-attachments/assets/30d5ff0f-fc4b-4b35-a5f0-27ecc665317e)

## Endpoint Bank Account :
![image](https://github.com/user-attachments/assets/fe6744e6-7628-4591-b758-b6ed9ddef43f)


# Contribution
Feel free to explore the codebase and documentation to gain a deeper understanding of the project.

For any questions or further information, please reach out me.

Thank you for visiting the repository!
