### React Components Library

---

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![Coverage Status](https://img.shields.io/badge/coverage-100%25-brightgreen)  ![Maintainability](https://img.shields.io/badge/maintainability-A-brightgreen)

---

### Overview

This library contains reusable React components designed for easy integration into various projects. It includes components like buttons, forms, and modals, ensuring consistent design and functionality across your application.

### Table of Contents

- [Technologies](#technologies)
- [Components](#components)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Storybook](#storybook)
- [Pivotal Tracker](#pivotal-tracker)
- [API Deployment](#api-deployment)
- [Features](#features)
- [License](#license)

---

### Technologies

- **React** - A JavaScript library for building user interfaces.
- **Styled Components** - Utilizes tagged template literals to style your components.
- **Jest** - JavaScript testing framework.
- **Storybook** - Tool for developing UI components in isolation.
- **PropTypes** - Runtime type checking for React props.

---

### Components

#### Button Component
- **Basic Button Structure**: A standard button element with customizable styles.
- **Variants**: Support for different button styles (e.g., primary, secondary, and danger).
- **Accessibility**: Ensures that the button is accessible (e.g., focusable, screen-reader friendly).
- **Customizable Props**: Allows customization through props such as `color`, `size`, and `onClick` handler.

#### Form Component
- **Basic Form Structure**: A standard form element with customizable input fields and a submit button.
- **Validation**: Built-in validation for required fields and email format.
- **Accessibility**: Ensures that the form is accessible, including keyboard navigation and screen-reader friendly.
- **Customizable Props**: Allows customization through props such as `onSubmit`, `onChange`, and initial form values.

#### Modal Component
- **Header**: Includes a title and a close button.
- **Body**: Main content area.
- **Footer**: Actions like "Accept" or "Cancel".
- **Accessibility**: Ensures the modal is accessible, including keyboard navigation and screen-reader support.
- **Customizable Props**: Allows customization through props such as `show`, `onClose`, `title`, and `children`.

---

### Getting Started

#### Prerequisites
Ensure you have Node.js and npm installed on your computer by running `node -v` and `npm -v` in your terminal. If you don't have Node.js installed, go to the [Node.js website](https://nodejs.org/), and follow the download instructions.

#### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/DaisyMicheal/component_library.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd react-components-library
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```

#### Usage
1. **Run the development server:**
   ```sh
   npm start
   ```
2. **Open your browser and navigate to:**
   ```sh
   http://localhost:3000
   ```

---

### Testing

1. **Run unit tests:**
   ```sh
   npm test
   ```

---

### Storybook

1. **Run Storybook:**
   ```sh
   npm run storybook
   ```
2. **Open your browser and navigate to:**
   ```sh
   http://localhost:6006
   ```

---

### Pivotal Tracker

Track the project's progress on [Pivotal Tracker](https://www.pivotaltracker.com/n/projects/2710500).

---

### API Deployment

The API endpoint is hosted [here](https://api.yourdomain.com).

---

### Features

- **Reusable Components:** Modular components for easy integration.
- **Customizable:** Flexible props to tailor components to your needs.
- **Accessible:** Built with accessibility in mind.
- **Tested:** Thoroughly tested components to ensure reliability.

---

### License

This project is licensed under the MIT License.

---

### Additional Notes

- **Ensure the components are accessible with proper focus management and ARIA attributes.**
- **Test the components on various devices and screen sizes for responsiveness.**
- **Review the styles to ensure they align with the overall design system.**

For more information, check the documentation in each component's respective `.md` file.
