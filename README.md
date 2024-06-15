# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

This project is a React application that displays a list of items fetched from an API. It includes features like pagination, item detail view, item editing, and deletion. The project uses the following technologies:

- React
- TypeScript
- Tailwind CSS
- Axios
- React Router

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Feature

### Pagination

The application uses pagination to display items. The Pagination component manages the current page and allows navigation between pages. The total number of items is retrieved from the API using Axios.

### Item Details

Clicking on an item displays its details, including options to edit or delete the item.

### Item Editing

The edit functionality allows users to modify item details on a separate page.

### Item Deletion

The delete functionality removes an item from the list and updates the state.

## API Integration

The project integrates with the JSONPlaceholder API to fetch data. Axios is used to make HTTP requests.

### Fetching Items

The items are fetched from the API with pagination support. The total number of items is obtained from the response headers.

### Usage in the Component

The fetched items and total number of items are used in the Home component to manage pagination.

## Custom CSS for Truncation

To ensure that text does not exceed a certain number of lines and is truncated with an ellipsis, custom CSS is used: