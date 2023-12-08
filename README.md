# Pyrography ART Gallery

Welcome to Pyrography ART Gallery, an immersive platform that celebrates the art of pyrography. Our application is a curated gallery where pyrography enthusiasts can explore and appreciate the beauty of meticulously crafted items.

## Technologies Used

[![Static Badge](https://img.shields.io/badge/JavaScript-FAFA1A)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)   [![Static Badge](https://img.shields.io/badge/HTML5-FA4E1A)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)   [![Static Badge](https://img.shields.io/badge/CSS3-1D86EF)](https://developer.mozilla.org/en-US/docs/Web/CSS)   [![Static Badge](https://img.shields.io/badge/React-v18.2.0-35A7FF)](https://react.dev/)   [![Static Badge](https://img.shields.io/badge/Vite-v4.4.5-FFDD35)](https://vitejs.dev/)   [![Static Badge](https://img.shields.io/badge/React%20Router%20Dom-v6.18.0-332767)](https://www.npmjs.com/package/react-router-dom)   [![Static Badge](https://img.shields.io/badge/React%20Bootstrap-v2.9.1-3E23B6)](https://react-bootstrap.netlify.app/)   [![Static Badge](https://img.shields.io/badge/Firebase-F6C12F)](https://firebase.google.com/)   [![Static Badge](https://img.shields.io/badge/License-MIT-2EA74C)](https://opensource.org/license/mit/)

## Table of Contents

- [General Information](#general-information)
- [Project Deployment](#live-demo)
- [Features](#features)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [API Endpoints](#api-endpoints)
- [Improvements](#improvements)
- [Features that can be Added](#features-that-can-be-added)
- [Acknowledgement](#acknowledgement)
- [Contacts](#contacts)

## General Information

- Pyrography ART Gallery creates a dedicated online space for pyrography enthusiasts to showcase their creations, fostering a vibrant and supportive community.

- By organizing items into collections and providing a dynamic home page, PyroCraft Haven serves as a centralized platform where users can easily explore and discover a variety of pyrography pieces.

- The purpose of Pyrography ART Gallery is to cultivate a thriving community, celebrate artistic talent, facilitate learning, encourage personal expression, overcome existing limitations, and provide a unique online experience for individuals passionate about the art of pyrography.

## Live Demo

Check out the live demo of Pyrography ART Gallery [here](https://pyrographyart-gallery-on-react.web.app/).

**Note:** The website is optimized for the latest versions of Chrome and Mozilla Firefox, with a desktop resolution of 1920x1080.

## Features

- **Collections:** Explore three distinct collections - Home Decorations, Gift Sets, and Custom Items. Each collection embodies the passion and creativity of pyrography, offering a unique visual journey.

- **User Creations:** For logged-in users, Pyrography ART Gallery opens the door to artistic expression. Create, edit, and delete your items, shaping them with the warmth of your creativity. Each item tells a story, and you have the power to craft your narrative.

- **Dynamic Home Page:** The home page dynamically showcases the last three added items, creating an ever-evolving visual experience. Witness the latest additions and be inspired by the diversity of pyrography.

- **Authentication Tracking:** A custom hook ensures seamless authentication for users, tracking login, register, and logout activities across various routes. Feel the connection with the community as you navigate through Pyrography ART Gallery.

- **Like Functionality:** Express your appreciation for fellow artists with the like functionality. Each like is a virtual nod of approval, creating a sense of camaraderie within the Pyrography ART Gallery community.

## Project Structure

This repository hosts the source code for our immersive platform dedicated to the art of pyrography. Below is an overview of the project structure.

- `/client`: The client-side application built with React and Vite
    - `/public`: Contains static assets, including images
    - `/src`: Holds the React components, styles, and other client-side code

- `/server`: The server-side code for handling backend logic and API requests, using SoftUni's practice server

Feel free to explore each directory to understand how different components and functionalities are structured within the project.

## Usage

**1. Clone the Repository**

`git clone https://github.com/KristinaStrateva/Pyrography-Art-Gallery.git`

**2. Start the Server**

Open a new terminal window in the root directory of the project and navigate to the server:

`cd server`

Start the server by running the following command:

`node server.js`

**3. Setup the Client**

Open a new terminal window in the root directory of the project and navigate to the client:

`cd client`

Install client dependencies:

`npm install`

Start the client in development mode:

`npm run dev`

Now when the client setup is complete you can open the following link in your web browser: [http://localhost:5173](http://localhost:5173)

**Note:** These instructions are intended for users operating on the Windows OS.

## Screenshots

- **Guest experience:**

<img src="/client/public/images/home_page.jpg" alt="Home Page" width="700" />
<img src="/client/public/images/details_page_guest.jpg" alt="Details Page" width="700" />

- **Authorized experience:**

<img src="/client//public/images/home_page_logged_in_1.jpg" alt="Home Page" width="700" />
<img src="/client//public/images/my_items_page_1.jpg" alt="My Items Page" width="700" />

- **Authorized owner experience:**

<img src="/client//public/images/details_page_owner.jpg" alt="Details Page" width="700" />

- **Authorized not owner experience:**

before like
<br>
<img src="/client//public/images/details_page_not_owner.jpg" alt="Not Liked Item Page" width="700" />

after like
<br>
<img src="/client//public/images/details_page_with_like.jpg" alt="Liked Item Page" width="700" />

## API Endpoints

The Base URL for the API is: `http://localhost:3030/data`

The documentation below assumes you are pre-pending the Base URL to the endpoints in order to make requests.

**Authentication**

- **POST /users/login**
    - _Request:_
    {
    `
        username": "string",
        "password": "string"
    }
    `
    - _Response:_
    `
    {
        "User Data": "userData"
    }
    `
    - _Description:_ Authenticate and log in a user

## Room for Improvements

- ### Improvements

    - **Improvement 1:** Stronger validations can be implemented on the server side.

    - **Improvement 2:** Enhance user experience with additional effects.

- ### Features that can be Added

    - **Feature to be added 1:** Implement buy functionality.

    - **Feature to be added 2:** Introduce a search bar.

    - **Feature to be added 3:** Enable corresponding by email.

## Acknowledgement

- This project was inspired by my sister, Veselina Hendry's, passion for pyrography crafting. With her guidance, I had the opportunity to immerse myself in this beautiful world of art.

- I extend my sincere gratitude to Mr. Ivaylo Papazov for guiding me through the process of creating a React application with Vite. Thanks to his insightful lectures, I successfully developed and presented a basic application, complete with its core functionalities.

## Contacts

<p><span style="margin-right: 30px;"></span><a href="https://www.linkedin.com/in/kristina-strateva-a820ba254/"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" style="width: 5%;"></a>         <span style="margin-right: 30px;"></span><a href="https://github.com/KristinaStrateva"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style="width: 5%;"></a>         <span style="margin-right: 30px;"></span><a href="https://www.facebook.com/profile.php?id=100000144024793"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" style="width: 5%;"></a></p>