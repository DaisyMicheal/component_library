# Modal Component Library

This library provides a customizable React modal component that can be used to display messages, such as cookie consent information, to users. The modal features an icon, title, message, and an accept button. When the user accepts the cookies, a success message is shown briefly.

# Installation

- npm Install

# Usage

To integrate the modal component into your application, follow these steps:

1. Import the Component: Start by importing the Modal component into your main application or the component where you want to use the modal.

2. Manage Modal State: Use React's state management to control the visibility of the modal. Typically, this involves creating a state variable (e.g., isModalOpen) and corresponding functions to open and close the modal.

3. Render the Modal: In your component's render method, conditionally render the Modal component based on the state variable. Pass the necessary props (isOpen, onClose, onAccept) to control its behavior.

4. Handle User Actions: Define functions to handle user interactions, such as opening the modal, closing the modal, and accepting cookies. These functions should update the state accordingly and perform any additional actions (e.g., logging acceptance to the console).

# Props

The modal component accepts the following props:

- isOpen: Boolean that determines if the modal is open.
- onClose: Function to call when the modal is closed.
- onAccept: Function to call when the accept button is clicked.'

# Customization

You can customize the appearance of the modal by modifying the styles object in the Modal.js file. Various styles are available for customization, such as the overlay, modal container, close button, content area, icon, title, text, accept button, show modal button, and success message.

# Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

# License

This project is licensed under the MIT License. See the LICENSE file for details.
