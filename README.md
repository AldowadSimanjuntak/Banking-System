# Modern Banking System

A full-stack banking system application with a modern UI, built using Next.js and Express.js. This application provides secure user authentication, account management, and transaction capabilities.

## Features

- 🔐 Secure Authentication System
- 💳 Bank Account Management
- 💰 Transaction Processing
- 📱 Responsive Modern UI
- 🔒 Protected Routes
- 📊 User Dashboard
- 🎨 Beautiful Gray Theme Design

## Tech Stack

### Frontend
- [Next.js 14](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Axios](https://axios-http.com/) - HTTP Client
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - State Management

### Backend
- [Express.js](https://expressjs.com/) - Web Framework
- [Node.js](https://nodejs.org/) - Runtime Environment
- [Prisma](https://www.prisma.io/) - Database ORM
- [PostgreSQL](https://www.postgresql.org/) - Database
- [JWT](https://jwt.io/) - Authentication
- [Swagger](https://swagger.io/) - API Documentation
- [Morgan](https://github.com/expressjs/morgan) - HTTP Request Logger
- [CORS](https://github.com/expressjs/cors) - Cross-Origin Resource Sharing
- [Sentry](https://sentry.io/) - Error Tracking
- [Nodemailer](https://nodemailer.com/) - Email Service

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v8 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v14 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/banking-system.git
cd banking-system
```

2. Install backend dependencies:
```bash
npm install
# or
pnpm install
```

3. Install frontend dependencies:
```bash
cd banking-system-frontend
pnpm install
```

4. Set up environment variables:
   - Create `.env` file in the root directory for backend
   - Create `.env.local` file in the frontend directory

## Running the Application

You'll need to run both the backend and frontend servers:

### Terminal 1 - Backend Server
```bash
# In the root directory
npm run dev
# or
pnpm dev
```
The backend server will run on http://localhost:3000

### Terminal 2 - Frontend Server
```bash
# In the banking-system-frontend directory
pnpm dev
```
The frontend application will run on http://localhost:3001

## API Documentation

Once the backend server is running, you can access the API documentation at:
```
http://localhost:3000/docs
```

## Project Structure

```
banking-system/
├── api/                 # Backend API routes
├── controllers/         # Backend controllers
├── prisma/             # Database schema and migrations
├── utils/              # Utility functions
├── banking-system-frontend/  # Frontend application
│   ├── src/
│   │   ├── app/        # Next.js app directory
│   │   ├── services/   # API services
│   │   └── components/ # React components
│   └── public/         # Static files
└── tests/              # Test files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Express.js Documentation](https://expressjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
