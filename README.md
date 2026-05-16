# CSP-451 Web Starter

A Node.js Express web application for CSP-451 checkpoint work.

## Getting Started

Install dependencies and run the app:

\\\
npm install
npm run dev
\\\

## Authentication
This branch adds user authentication with login validation and JWT-ready endpoints.

## Database Connection
This branch implements the database connection module with environment-based config.

## Environment Variables

Copy \.env.example\ to \.env\ and fill in your values before running the app.

| Variable | Description | Default |
|---|---|---|
| DB_HOST | Database server hostname | localhost |
| DB_PORT | Database server port | 5432 |
| DB_NAME | Database name | csp451db |
| DB_USER | Database username | dbuser |
| DB_PASSWORD | Database password | (empty) |
