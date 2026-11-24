# GitHub Repository Search

A React frontend exercise that searches public GitHub repositories through the GitHub Search API.

## Features

- Search repositories by a text query.
- Display repository names, descriptions, star counts and fork counts.
- Sort results by stars or forks, with ascending/descending controls.
- Navigate result pages using pagination controls.
- Manage fetched data with Redux and Redux Thunk.

## Stack

React 17, JavaScript, Redux, Redux Thunk, Axios, React Router 5, Bootstrap 5 and SCSS.

## Run locally

Requires Node.js and npm. From the repository directory:

```sh
npm install
npm start
```

Open `http://localhost:3000`.

```sh
npm run build
npm test
```

These are the configured scripts. The project uses an older React Scripts 4 toolchain and may need a compatible Node.js environment or dependency updates.

## Source guide

- `src/pages/Search/SearchBar.js`: search input and navigation.
- `src/pages/Repo/Repo.js`: results, sorting and pagination.
- `src/redux/store/Test/actions.js`: request to GitHub's repository search endpoint.

## Scope and limitations

This is a learning exercise, not a GitHub client for production use. Search availability depends on GitHub's API and unauthenticated rate limits. The current pagination page count is fixed in the UI rather than calculated from the API total. No production-readiness or current test-pass claim is made. Do not put an access token in browser source code.
