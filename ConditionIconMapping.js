const currentHour = new Date().getHours();

const conditionIconMapping = {
  'Sunny': 113,
  'Partly cloudy': 116,
  'Cloudy': 119,
  'Overcast': 122,
  'Mist': 143,
  'Patchy rain possible': 176,
  'Patchy snow possible': 179,
  'Patchy sleet possible': 182,
  'Patchy freezing drizzle possible': 185,
  'Thundery outbreaks possible': 200,
  'Blowing snow': 227,
  'Blizzard': 230,
  'Fog': 248,
  'Freezing fog': 260,
  'Patchy light drizzle': 263,
  'Light drizzle': 266,
  'Freezing drizzle': 281,
  'Heavy freezing drizzle': 284,
  'Patchy light rain': 293,
  'Light rain': 296,
  'Moderate rain at times': 299,
  'Moderate rain': 302,
  'Heavy rain at times': 305,
  'Heavy rain': 308,
  'Light freezing rain': 311,
  'Moderate or heavy freezing rain': 314,
  'Light sleet': 317,
  'Moderate or heavy sleet': 320,
  'Patchy light snow': 323,
  'Light snow': 326,
  'Patchy moderate snow': 329,
  'Moderate snow': 332,
  'Patchy heavy snow': 335,
  'Heavy snow': 338,
  'Ice pellets': 350,
  'Light rain shower': 353,
  'Moderate or heavy rain shower': 356,
  'Torrential rain shower': 359,
  'Light sleet showers': 362,
  'Moderate or heavy sleet showers': 365,
  'Light snow showers': 368,
  'Moderate or heavy snow showers': 371,
  'Light showers of ice pellets': 374,
  'Moderate or heavy showers of ice pellets': 377,
  'Patchy light rain with thunder': 386,
  'Moderate or heavy rain with thunder': 389,
  'Patchy light snow with thunder': 392,
  'Moderate or heavy snow with thunder': 395,
};

let conditionIconImages = {};

if (currentHour >= 6 && currentHour < 18) {
  // Daytime icons
  conditionIconImages = {
    113: require('./weather/day/113.png'),
    116: require('./weather/day/116.png'),
    119: require('./weather/day/119.png'),
    122: require('./weather/day/122.png'),
    143: require('./weather/day/143.png'),
    176: require('./weather/day/176.png'),
    179: require('./weather/day/179.png'),
    182: require('./weather/day/182.png'),
    185: require('./weather/day/185.png'),
    200: require('./weather/day/200.png'),
    227: require('./weather/day/227.png'),
    230: require('./weather/day/230.png'),
    248: require('./weather/day/248.png'),
    260: require('./weather/day/260.png'),
    263: require('./weather/day/263.png'),
    266: require('./weather/day/266.png'),
    281: require('./weather/day/281.png'),
    284: require('./weather/day/284.png'),
    293: require('./weather/day/293.png'),
    296: require('./weather/day/296.png'),
    299: require('./weather/day/299.png'),
    302: require('./weather/day/302.png'),
    305: require('./weather/day/305.png'),
    308: require('./weather/day/308.png'),
    311: require('./weather/day/311.png'),
    314: require('./weather/day/314.png'),
    317: require('./weather/day/317.png'),
    320: require('./weather/day/320.png'),
    323: require('./weather/day/323.png'),
    326: require('./weather/day/326.png'),
    329: require('./weather/day/329.png'),
    332: require('./weather/day/332.png'),
    335: require('./weather/day/335.png'),
    338: require('./weather/day/338.png'),
    350: require('./weather/day/350.png'),
    353: require('./weather/day/353.png'),
    356: require('./weather/day/356.png'),
    359: require('./weather/day/359.png'),
    362: require('./weather/day/362.png'),
    365: require('./weather/day/365.png'),
    368: require('./weather/day/368.png'),
    371: require('./weather/day/371.png'),
    374: require('./weather/day/374.png'),
    377: require('./weather/day/377.png'),
    386: require('./weather/day/386.png'),
    389: require('./weather/day/389.png'),
    392: require('./weather/day/392.png'),
    395: require('./weather/day/395.png'),
  };
} else {
  // Nighttime icons
  conditionIconImages = {
    113: require('./weather/night/113.png'),
    116: require('./weather/night/116.png'),
    119: require('./weather/night/119.png'),
    122: require('./weather/night/122.png'),
    143: require('./weather/night/143.png'),
    176: require('./weather/night/176.png'),
    179: require('./weather/night/179.png'),
    182: require('./weather/night/182.png'),
    185: require('./weather/night/185.png'),
    200: require('./weather/night/200.png'),
    227: require('./weather/night/227.png'),
    230: require('./weather/night/230.png'),
    248: require('./weather/night/248.png'),
    260: require('./weather/night/260.png'),
    263: require('./weather/night/263.png'),
    266: require('./weather/night/266.png'),
    281: require('./weather/night/281.png'),
    284: require('./weather/night/284.png'),
    293: require('./weather/night/293.png'),
    296: require('./weather/night/296.png'),
    299: require('./weather/night/299.png'),
    302: require('./weather/night/302.png'),
    305: require('./weather/night/305.png'),
    308: require('./weather/night/308.png'),
    311: require('./weather/night/311.png'),
    314: require('./weather/night/314.png'),
    317: require('./weather/night/317.png'),
    320: require('./weather/night/320.png'),
    323: require('./weather/night/323.png'),
    326: require('./weather/night/326.png'),
    329: require('./weather/night/329.png'),
    332: require('./weather/night/332.png'),
    335: require('./weather/night/335.png'),
    338: require('./weather/night/338.png'),
    350: require('./weather/night/350.png'),
    353: require('./weather/night/353.png'),
    356: require('./weather/night/356.png'),
    359: require('./weather/night/359.png'),
    362: require('./weather/night/362.png'),
    365: require('./weather/night/365.png'),
    368: require('./weather/night/368.png'),
    371: require('./weather/night/371.png'),
    374: require('./weather/night/374.png'),
    377: require('./weather/night/377.png'),
    386: require('./weather/night/386.png'),
    389: require('./weather/night/389.png'),
    392: require('./weather/night/392.png'),
    395: require('./weather/night/395.png'),
  };
}

export { conditionIconMapping, conditionIconImages };
