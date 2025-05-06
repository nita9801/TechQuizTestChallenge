# Tech Quiz Test Suite
![Cypress](https://img.shields.io/badge/Cypress-Testing-brightgreen.svg)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow.svg)

## Description

The **Tech Quiz Test Suite** is a robust testing framework for a fully functional Tech Quiz application. This application allows users to take a quiz with ten random questions and view their final score. It emphasizes reliability and robustness in modern web applications through comprehensive testing.

The project leverages **Cypress** for both **component testing** and **end-to-end (E2E) testing**, ensuring the functionality of individual components and the entire application.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
  - [Component Tests](#component-tests)
  - [End-to-End Tests](#end-to-end-tests)
- [Walkthrough Video](#walkthrough-video)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Dynamic Quiz**: Presents users with ten random questions.
- **Score Tracking**: Displays the final score after completing the quiz.
- **Component Testing**: Validates the functionality of the Quiz component in isolation.
- **End-to-End Testing**: Ensures the entire application works as expected from start to finish.
- **Accessibility**: Designed for a seamless and user-friendly experience.

---

## Installation

1. **Clone the Repository**:
   ```bash
        git clone https://github.com/nita9801/TechQuizTestChallenge.git
2. **Navigate to the Project Directory**:
    ```bash
        cd TechQuizTestSuiteChallenge/Develop/client

3.**Install Dependencies**:
    ```bash
    npm install
4. **Set Up Environment Variables**:
    - Rename the .env.example file to .env.
    - Configure the required environment variables.
5.**Start the Application**:
    ```bash
    npm run dev

---    
## Usage

1. **Launch the Application**:
    - Open your browser and navigate to http://127.0.0.1:3001 to access the Tech Quiz application.
2. **Take the Quiz**:
    - Use the quiz interface to answer questions and view your final score.
3. **Run Tests**:
    - Use Cypress to validate the functionality of the application.

---
## Testing

The testing suite uses **Cypress** to validate the application's functionality. Both **component tests** and **end-to-end tests** are included.

**Component Tests**:
    -**Purpose**: Validate the functionality of the Quiz component in isolation.
    -**Test File**: cypress/component/Quiz.cy.jsx
    -**Run Component Tests**:
    ```bash
        npx cypress open
    -**Select** "Component Testing" and run the Quiz.cy.jsx test.
**End-to-End Tests**:
    -**Purpose**: Validate the functionality of the entire application.
    -**Test File**: cypress/e2e/quiz.cy.js
    -**Run End-to-End Tests**:
    ```bash
        npx cypress open
    -**Select** "E2E Testing" and run the quiz.cy.js test.

---

## Walkthrough Video
A walkthrough video demonstrating the functionality of the application and the successful execution of all tests can be found here:

**Walkthrough Video Link**:
     (Replace with your video link)

**The video includes**:

    -Running the application.
    -Executing component tests for the Quiz component.
    -Executing end-to-end tests for the Tech Quiz application.
    -Demonstrating all tests passing.

---
## Technologies Used

**React**: Front-end library for building user interfaces.
**Node.js**: JavaScript runtime environment.
**Express.js**: Web framework for Node.js.
**MongoDB**: NoSQL database for storing quiz data.
**Cypress**: Testing framework for component and end-to-end tests.
**Vite**: Build tool for fast development.

---
## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For questions or feedback, please contact:

Name: Christine L
Email: nita9801@gmail.com
GitHub: nita9801
   
