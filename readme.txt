# ropstamtesttask

## Description

`ropstamtesttask` is a test task developed by Arslan Ahmad. This is a Node.js application that serves as an API endpoint with various functionalities, including CRUD operations, authentication, and email services. 

The application uses a number of high-quality, mature libraries to build and serve HTTP requests. This includes `express`, `cors`, `helmet`, `joi`, `jsonwebtoken`, `lodash`, and `mongoose`. The application is designed to be secure, reliable, and efficient.

## Features

- CORS support via the `cors` module
- Environment variable management through `dotenv`
- Express server with `express` module
- Google APIs support with `googleapis` module
- Basic security with `helmet` module
- Input validation with `joi` module
- JWT authentication with `jsonwebtoken`
- Utility functions with `lodash`
- MongoDB object modeling with `mongoose`
- Email service with `nodemailer`

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this project, you will need:

- Node.js installed (version 14 or later recommended)
- MongoDB database setup (either locally or online)
- Google API credentials (for `googleapis` to function)

### Installing

1. Clone the repository to your local machine:

```
git clone https://github.com/your-username/ropstamtesttask.git
```

2. Change into the project directory:

```
cd ropstamtesttask
```

3. Install the dependencies:

```
npm install
```

### Configuration

You need to create a `.env` file in the root directory with the following keys:



PORT=5000
CLIENT_ID
CLIENT_SECRET
REFRESH_TOKEN
SECRET_KEY_JWT



Replace `your_google_api_key`, `your_mongodb_connection_string`, and `your_secret_key` with your actual Google API key, MongoDB connection string, and JWT secret key respectively.

### Running the application

In the project directory, you can run:

```
npm start
```

This starts the server in development mode with `nodemon`.
