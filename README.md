# Countdown App

A responsive countdown timer built with **React**, **TypeScript**, and **Vite**.

Create a personalized countdown with a target date, time, timezone, custom name, colors, background image, font, and display options.

## Features

* 📅 Set a target date and time
* 🌎 Select a timezone
* ✏️ Add a custom countdown name
* ⏱️ Display days, hours, minutes, and seconds
* 👁️ Show or hide countdown units
* 🎨 Customize background and font colors
* 🖼️ Add a custom background image
* 🔤 Choose a font family
* 🖥️ Fullscreen countdown display
* 📱 Responsive layout for different screen sizes

## Built With

* React
* TypeScript
* Vite
* SCSS
* Luxon

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine.

### Clone the repository

```bash
git clone https://github.com/christinecarizza/countdown-app.git
```

### Navigate to the project

```bash
cd countdown-app
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will start the development server and provide a local URL, usually:

```text
http://localhost:5173
```

Open the URL in your browser to use the application.

## Project Structure

```text
countdown-app/
├── public/
├── src/
│   ├── components/
│   │   ├── BackgroundSettings/
│   │   ├── CountdownDisplay/
│   │   ├── DateTimeSettings/
│   │   ├── FontSettings/
│   │   ├── Header/
│   │   └── Name/
│   ├── pages/
│   │   └── index.tsx
│   ├── types/
│   └── main.tsx
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## License

This project is for personal and learning purposes.