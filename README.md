# Gitwitter Monorepo

## Packages

- **Twitter** - Gitwitter Twitter API Helper library
- **GitHub** - Gitwitter GitHub API Helper library

## Products

- **gitwitter-api** - API to fetch Repositories on Github and Tweets where it has been mentioned.

## Installation

> To run the server you will need `node >=10.14.1` and `yarn >=1.12.3` to support Yarn Workspaces.

Paste your Twitter Authentication keys in the `.env` file inside `products/gitwitter-api` and run the commands below:

```sh

$ yarn install

$ cd products/gitwitter-api

$ yarn start

```

## Fetching data

Make a `GET` request to: http://localhost:3000/search?q=reactive to fetch all Repositories with the word "reactive" and its respective tweets.

### Supported parameters

| Parameters    | Description                                                | Example          |
| ------------- | ---------------------------------------------------------- | ---------------- |
| **q**         | Search parameter                                           | `q=redux`        |
| **normalise** | Show a squashed version of the response with relevant data | `normalise=true` |

## Examples

- Normalised response of repositories with the keyword "react": http://localhost:3000/search?q=react&normalise=true
- Full response of repositories with the keyword "react": http://localhost:3000/search?q=react

## Unit Tests

To run the Unit tests for the libs

```sh
$ cd packages/lib/twitter

$ yarn test

```

```sh
$ cd packages/lib/github

$ yarn test

```

Lucas Sacramento
