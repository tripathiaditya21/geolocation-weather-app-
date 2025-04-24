# Weather App with Geolocation

A modern, responsive weather application that provides real-time weather information based on your location or city search. The app features a beautiful, dynamic user interface that adapts to current weather conditions and time of day.

## Features

- 🌍 **Geolocation Support**: Automatically detects and shows weather for your current location
- 🔍 **City Search**: Search weather information for any city worldwide
- 🌙 **Day/Night Mode**: Dynamic backgrounds and icons that change based on time of day
- 🌡️ **Temperature Units**: Toggle between Celsius and Fahrenheit
- 📱 **Fully Responsive**: Optimized for all devices including:
  - iPhones (SE to 12 Pro)
  - Pixel phones (2 to 5)
  - Tablets and Desktop

## Weather Information Displayed

- Temperature
- Weather Description
- Humidity
- Wind Speed
- Weather Icons
- Dynamic Backgrounds

## Technical Details

### Technologies Used

- HTML5
- CSS3 (with Flexbox)
- JavaScript (ES6+)
- OpenWeatherMap API

### Responsive Design Features

- Device-specific optimizations
- Portrait and landscape modes
- Notch-aware design (for modern phones)
- Touch-optimized interactions

### Browser Support

- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

## Setup

1. Clone the repository
2. Open `index.html` in your browser
3. Allow location access when prompted

## API Key

The app uses the OpenWeatherMap API. The current API key is included in the code, but for production use, you should:
1. Get your own API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Replace the API key in `app.js`

## File Structure

```
geolocation.app/
├── geolocation/
│   ├── index.html      # Main HTML file
│   ├── styles.css      # Styles and responsive design
│   ├── app.js         # Application logic
│   └── img/           # Weather icons and backgrounds
└── README.md          # This file
```

## Weather Conditions

The app supports various weather conditions including:
- Clear (Day/Night)
- Cloudy
- Rain
- Thunderstorm
- Snow
- Haze/Mist

## Responsive Design

The app is optimized for various screen sizes:
- Mobile phones (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)

### Device-Specific Optimizations

- iPhone SE/5/5S/5C (320px)
- iPhone 6/7/8 (375px)
- iPhone X/XS/11 Pro (375px)
- iPhone XR/11 (414px)
- iPhone 12/12 Pro (390px)
- Pixel 2/2 XL (411px)
- Pixel 3/3 XL (393-415px)
- Pixel 4/4 XL (353-412px)
- Pixel 5 (393px)

## License

This project is open source and available under the MIT License.

## Author

Created by Aditya Tripathi
