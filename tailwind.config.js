/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-primary": "#DD5746",
        "blue-primary": "#4793AF",
        "orange-bg": "#E65B48",
        "pinky": "#E48073",
        "pink-primary": "#EE99C2",
        "cream-primary": "#FFE3CA",
        "green-indrive": "#8ACA18",
        "bg-indrive":"#DDF89E",
        "green-gojek":"#00AA13",
      },
      shadow: {
        "custom": "4px 4px 10px rgba(0, 0, 0, 0.1)",
      }
    },
  },
  plugins: [],
};

