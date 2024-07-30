# React Component Library 
 This library provides a collection of reusable and customizable UI components including forms, buttons, modals, and more. The library is built with React and includes comprehensive testing with Jest and visual documentation using Storybook.
 

# Installation
# Using npm
npm install react-component-library

# Using yarn
yarn add react-component-library

# Components
# Button
 A customizable button component.

1. Props
- onClick (function): Function to call on button click.
- children (node): Button label or content.
 
# Modal
A modal dialog component.

1. Props
- isOpen (boolean): Controls the visibility of the modal.
- onClose (function): Function to call when the modal is closed.
- children (node): Content to display inside the modal.
  
# Form
 A form component with built-in validation.

1. Props
- onSubmit (function): Function to call when the form is submitted.
- children (node): Form fields and submit button.

  # Testing
  We use Jest for unit testing. To run the tests, use the following command:
-   npm test
-  yarn test
  
 #  Storybook
 Storybook for visual documentation and component development. To start Storybook, use the following command:
- npm run storybook
- yarn storybook

# Contributing
Contributions are welcome! If you have any suggestions or find any issues, please open an issue or submit a pull request. 

# Development Setup
1. Clone the repository.
2. Install dependencies: npm install or yarn install.
3. Run the development server: npm start or yarn start.
4. Run tests: npm test or yarn test.
5. Start Storybook: npm run storybook or yarn storybook.
   
# License
This project is licensed under the MIT License. See the LICENSE file for more details.


