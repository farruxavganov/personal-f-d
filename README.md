# React Vite Project

This is a React project bootstrapped with [Vite](https://vitejs.dev/).

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v22 or later) - [Download Node.js](https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)

### Installation

1. **Clone the Repository**

   ```bash
   git clone git@github.com:farruxavganov/personal-f-d.git
   cd personal-f-d
   ```

2. **Install Dependencies**

   Run the following command to install the required dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

1. **Start the Development Server**

   To start the development server, run:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   This will start the server and you can view the application in your browser at `http://localhost:5173` by default.

2. **Building for Production**

   To build the project for production, run:

   ```bash
   npm run build
   # or
   yarn build
   ```

   The production-ready files will be in the `dist` folder.

3. **Preview the Production Build**

   To locally preview the production build, run:

   ```bash
   npm run preview
   # or
   yarn preview
   ```

   This will start a server to preview the files built in the `dist` folder.

### Project Structure

Here is an overview of the project structure:

```
personal-f-d/
├── public/        # Static assets
├── src/
│   ├── assets/   # Images, icons, etc.
│   ├── components/ # Reusable React components
|   ├── context/ # Manage data flow
|   ├── utils/ # Extra functions
├── App.jsx   # Main App component
├── main.jsx  # Application entry point
├── .gitignore     # Git ignore rules
├── index.html     # Main HTML file
├── package.json   # Project dependencies and scripts
├── vite.config.js # Vite configuration
```

### Customizing Configuration

See the [Vite Configuration Reference](https://vitejs.dev/config/) for more information on customizing the build and development setup.

## Contributing

If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).



## Problems encountered:

### Integrating Exchange Rate API

**Problem:**

- Fetching exchange rates from the API might have resulted in network errors, incorrect API key usage, or exceeding free tier limits.
- Formatting the fetched data for use in components may have been tricky.

**Solution:**

- Verified the API key and tested API calls using Postman or a browser to ensure the endpoint was accessible.
- Implemented error handling with try-catch in the fetch function to gracefully handle failed API requests.
- Parsed the fetched exchange rates into a structured format using `Object.entries()` for easy iteration in components.


## Suggestions for improving the project:

### Enhanced User Authentication

**Current Limitation:**

- No authentication or user-specific data storage.

**Improvement:**

- Add user authentication with Firebase, Auth0, or a custom backend to ensure each user has a personalized dashboard.
- Allow users to securely log in and access their saved transactions and settings.