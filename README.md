# An Amazing Weather App.

## Overview

The Weather Application is a web-based tool that provides real-time weather information based on the user's geolocation. It fetches data from the OpenWeatherMap API and displays various weather metrics and modules.

## Features

- **Geolocation-based Weather**: Automatically fetches weather data based on the user's current location.
- **Modular Design**: Supports multiple weather modules like current weather, sunrise/sunset times, wind conditions, etc.
- **Unit Conversion**: Allows switching between Celsius and Fahrenheit units for temperature.
- **Error Handling**: Displays appropriate error messages for failed API requests or geolocation errors.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Chakra UI**: Component library for styling and layout.
- **OpenWeatherMap API**: Provides weather data including current weather, forecasts, and more.
- **TypeScript**: Enhances code quality and development experience with static typing.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/samehel/weather-app
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

   ```
   VITE_OPEN_WEATHER_API_KEY=your-api-key
   ```

4. Start the development server:

   ```
   npm start
   ```

5. Open the application in your browser:

   ```
   http://localhost:3000
   ```

## Usage

- Upon loading the application, it will request geolocation access. Allow the browser to share your location to fetch accurate weather data.
- Weather modules such as current weather, sunrise/sunset times, wind conditions, etc., will be displayed once data is fetched successfully.
- Use the toggle switch to change temperature units between Celsius and Fahrenheit.
