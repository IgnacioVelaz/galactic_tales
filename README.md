**Galactic Tales** is a mobile sci-fi book store, crafted to showcase my journey in mastering React and a range of essential libraries. It represents the result of my first month immersed in the world of React with TypeScript.

## Project Overview

My primary focus with Galactic Tales was to guide users through the entire journey of exploring, selecting, and obtaining their favorite sci-fi books. This process includes:

- **Account Registration Simulation**
    
- **User Authentication Simulation**

- **Book Purchase Simulation**
    

## Technology Stack

To bring Galactic Tales to life, I harnessed the power of React, with an added twist of TypeScript for type safety and enhanced developer experience. This project has been developed with the primary objective of practicing and learning React concepts, making it an ideal playground to experiment with various libraries and tools.

I played with some libraries in this project, including:

- **Axios** for handling HTTP requests, ensuring smooth interactions between the front-end and the simulated backend.
- **React Router v6** for efficient and dynamic routing, enhancing user navigation.
- **React Hook Form** for simplified and robust form handling.
- **React Toastify** for providing user-friendly notifications and feedback.
- **React Query** to streamline data fetching and management, ensuring a responsive user experience.

I've also utilized **json-server** to simulate the backend, creating a dynamic environment that mimics real-world data interactions. It's important to note that, given the time constraints of this project (part of my web development journey), my emphasis was primarily on functionality and learning. Performance and design, while important, took a backseat to my goal of mastering React and delivering a functional product.

In the spirit of experimentation and exploration, this project may not adhere to best practices in terms of performance optimization, but it serves as a testament to my journey in the world of React and the libraries that empower it.

## Getting Started

To get Galactic Tales up and running on your local machine, follow these simple steps:

### Prerequisites

Before you begin, ensure you have the following software and tools installed:

- [Node.js](https://nodejs.org/): Make sure you have Node.js installed to run the project and its dependencies.
- [pnpm](https://pnpm.io/) (Package Manager): We use pnpm as our package manager for Galactic Tales.

### Installation

1. Clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/yourusername/galactic-tales.git
   ```

2. Navigate to the project directory:

   ```bash
   cd galactic-tales
   ```

3. Install the project dependencies using pnpm:

   ```bash
   pnpm install
   ```

### Running the Development Server and JSON Server

To access the books and user data, you'll need to start the JSON server in addition to the development server. Here's how you can do it:

1. Start the development server:

   ```bash
   pnpm start
   ```

   This command will launch the application locally, typically at `http://localhost:3000`. You can access it using your web browser.

2. Start the JSON server to access the books and users data:

   ```bash
   pnpm run back
   ```

   The JSON server will be accessible at `http://localhost:3000`. Your Galactic Tales application will interact with this server to provide book and user data.

With these steps, you've successfully set up and run Galactic Tales on your local machine using pnpm.


I'm truly excited to share this journey with you, and your feedback is invaluable. Please feel free to share your thoughts and suggestions as we continue to improve Galactic Tales.