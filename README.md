# 🌤️ React Weather App

A sleek and responsive weather application built with **React**, powered by the **WeatherAPI**. Instantly fetch real-time weather data by city name with a clean, modern UI.

---

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ Displays current temperature, condition, humidity, and wind speed
- 🎨 Beautiful, responsive UI with animated weather icons
- 🌐 Uses WeatherAPI for accurate real-time data
- 🔐 API key stored securely via environment variables

---

## 🛠️ Tech Stack

- ⚛️ React + Vite
- 📡 WeatherAPI
- 🎨 CSS (custom styling)
- 🖋️ Google Fonts: [Inter](https://fonts.google.com/specimen/Inter)

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/cryptic0053/Weather-App.git
cd Weather-App
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of your project:

```
VITE_APP_ID=your_weatherapi_key
```

> ⚠️ Get your free API key from [https://www.weatherapi.com](https://www.weatherapi.com)

### 4. Run the App

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to view it.

---

## 📁 Folder Structure

```
Weather-App/
├── public/
├── src/
│   ├── assets/              # Static icons/images
│   ├── Components/
│   │   └── Weather.jsx      # Main component
│   ├── App.jsx              # Root component
│   ├── App.css              # Global styles
│   └── main.jsx             # Entry point for React + Vite
├── .env                     # API key environment variable
├── package.json
└── vite.config.js
```

---

## 🙏 Acknowledgements

- [WeatherAPI](https://www.weatherapi.com)
- [React](https://reactjs.org)
- [Vite](https://vitejs.dev)

---


## 👤 Author

Developed by [@cryptic0053](https://github.com/cryptic0053)

Feel free to contribute or fork for improvements.
