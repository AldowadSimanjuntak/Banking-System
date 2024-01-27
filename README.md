# Bangking System API
This is a simple web application with user authentication and transaction features.The application is based on banking system, allowing you to perform secure CRUD operations using JsonWebToken. Utilizing Prisma to design database, Express for handle the request , and Postgres for database The application includes functionalities for managing users, transactions, and bank accounts. The main menu consists of registration, login, forgot password, reset password, and a user dashboard.

Here the link for demo : [Live Demo](https://dull-lime-elephant-cape.cyclic.app/)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [CRUD Operations](#crud-operations)

## Features

1. **User Management:**
   - Register new users.
   - Authenticate users through a login system.
   - Implement a forgot password mechanism for password recovery.
   - Allow users to reset their passwords securely.

2. **Transaction Management:**
   - Perform CRUD operations on user transactions.
   - View transaction history.

3. **Bank Account:**
   - Implement CRUD operations for bank accounts.
   - Manage account details.

4. **User Dashboard:**
   - Display a personalized dashboard for each user.
   - Provide an overview of account details and transaction history.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AldowadSimanjuntak/Banking-System
   npm install
## Endpoints
# User Endpoint:
/api/users/register: Register a new user.

/api/users/login: Authenticate a user.

/api/users/forgot-password: Request a password reset.

/api/users/reset-password: Reset user password.

## CRUD Operations

# User:

Create: Register a new user using /api/users/register.

Read: Authenticate a user using /api/users/login.

Update: Request a password reset using /api/users/forgot-password.

Delete: Reset user password using /api/users/reset-password.

# Transaction:

Create: Add a new transaction using /api/transactions.

Read: View transaction history using /api/transactions/history.

Update: Update an existing transaction using /api/transactions/:id.

Delete: Delete a transaction using /api/transactions/:id.

# Bank Account:

Create: Add a new bank account using /api/account-bank.

Read: Retrieve bank account details using /api/account-bank/:id.

Update: Update bank account details using /api/account-bank/:id.

Delete: Delete a bank account using /api/account-bank/:id.



## References :
1. [Sending Emails Securely using Node.js, Nodemailer, SMTP, Gmail, and OAuth2](https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a)
2. [Using Nodemailer with Google OAuth](https://stackoverflow.com/questions/51342952/using-nodemailer-with-google-oauth)


## Contribution
Feel free to explore the codebase and documentation to gain a deeper understanding of the project.

For any questions or further information, please reach out me

Thank you for visiting the repository!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)