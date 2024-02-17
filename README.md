# Ricky & Morty App

## Overview

This web application is designed to interact with the Ricky & Morty API to provide users with information about
locations, residents and episodes from the popular TV series Ricky & Morty.

The application offers features that allows users to fetch location details, search or filter the results, view resident information
including images and status and add persistent notes about characters.

## Features

### Retrieve List of Locations:

Display a list of locations with their names, types, and residents along with their statuses.

### Search and Filter:

Implement search or filter functionality to allow users to search for locations, characters, or episodes by name.

### Display Data:

Display information in a user-friendly manner, allowing users to view locations, residents, and images of characters with their names and statuses.

### View Resident Details:

Tapping on a resident will navigate to a screen displaying detailed information about the resident, including the ability to add persistent notes.

### Persistent Notes:

Allow users to add and save notes about characters, providing a means to recall important information.

## API Integration

The app integrates with the Rick & Morty API to fetch data regarding locations, residents, and episodes. It utilizes appropriate API endpoints and handles responses effectively to populate the application with relevant information.

## Technologies Used

Programming Language: `NextJS and Typescript`

Data Persistence: `LocalStorage`

Styling: `TailwindCSS` : It is very simple and increases the development speed because you don't have to work on a separate file for styles.

## Choice of Database

I chose LocalStorage because it stores data on the client side hence I don't have to make a request to the DB to get the information.
Localstorage will also isolate this data hence a security measure for our application.

## Choice of API Endpoint

I chose REST API over GraphQL due to it's simplicity and it's caching mechanism. GraphQL is revolutionary and flexible but a bit complex when working with different sources of data. I am also more familiar with REST than GraphQL.

## Getting Started

To run the application locally, follow these steps:

```bash

git clone git@github.com:Trend20/shamiri-code-test.git

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
