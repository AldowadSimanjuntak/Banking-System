# RESTFUL API
# Bangking System API

This is a simple web application with user authentication and transaction features.The application is based on banking system, allowing you to perform secure CRUD operations using JsonWebToken and secure the password with bycripts. Utilizing Prisma to design database, Express for handle the request , and Postgres for database The application includes functionalities for managing users, transactions, and bank accounts. The main menu consists of registration, login, forgot password, reset password, and a user dashboard.

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




## Contribution
Feel free to explore the codebase and documentation to gain a deeper understanding of the project.

For any questions or further information, please reach out me.

Thank you for visiting the repository!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Screenshot example :

## Endpoint User :
![image](https://github.com/AldowadSimanjuntak/Banking-System/assets/102914659/b1bc7007-f8de-476a-b57f-897eeeabf335)
