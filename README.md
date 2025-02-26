# Stopwatch App

A simple and elegant stopwatch application built with React and Vite. This application allows users to start, stop, and reset a stopwatch, displaying time in format "mm:ss:ms" for precise timing.

## Features

- **Start/Stop Functionality**: Start and stop the stopwatch with a single button click.
- **Reset Functionality**: Reset the stopwatch to zero.
- **Smooth Hand Animation**: The stopwatch hand moves smoothly to represent elapsed time.
- **Numerals Display**: Displays numerals around the watch face, similar to a traditional clock.
- **Responsive Design**: Works well on various screen sizes.
- **Millisecond Precision**: The stopwatch increments by milliseconds for accurate timing.
- **Customizable Appearance**: The stopwatch can be styled with different colors and sizes.
- **Dynamic Line Configuration**: The stopwatch face can be customized with different line configurations for visual enhancements.
- **Nested Stopwatch Faces**: Supports inner stopwatch faces with their own configurations.
- **Lap Timing**: Users can now record lap times and view them in a list format.
- **Best and Worst Times Indication**: The lap entries visually indicate the best and worst lap times:
  - **Best Time**: Displayed in **green** to highlight the fastest lap.
  - **Worst Time**: Displayed in **red** to indicate the slowest lap.
- **First-Class Lap Timing**: Each lap time is precisely recorded at the moment of pressing the lap button, ensuring accurate individual timings.
- **Dynamic Lap List**: The lap list updates dynamically and is optimized for performance even with a large number of laps.
- **Progressive Web App (PWA)**: The application now supports PWA features, allowing users to install it on their devices for offline access and enhanced performance.

## Technologies Used

- **React19**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool that serves your code via native ESM.
- **Vitest**: A library for testing React components.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Motion**: A library for animations in React applications.
- **Zustand**: A modern state management library for improved state handling and performance.

## Installation

To run this project locally, follow these steps:

1. Clone the Repository
   git clone https://github.com/njordulv/stopwatch.git
   cd stopwatch

2. Install Dependencies
   Ensure you have Node.js installed, then run:
   npm install

3. Run the Application
   Start the development server:
   npm run dev

4. Build for Production
   To create an optimized build for deployment:
   npm run build

The production-ready files will be in the "build" directory.

## Usage

1. Click the Start button to begin timing.
2. Click the Stop button to pause the timer.
3. Click the Reset button to set the timer back to zero.

## Contributing

Contributions are welcome! If you have suggestions for improvements or features, feel free to open an issue or submit a pull request.

## Screenshot

![Stopwatch Screenshot](./public/screenshot.jpg)

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

This application draws design inspiration from the stopwatch functionality found on Apple devices. While the core concept and layout are similar, the colors, fonts, and element sizes have been customized to provide a unique experience.
Thanks to the creators of React, Vite, Zustand and Framer Motion for their amazing tools and libraries.
