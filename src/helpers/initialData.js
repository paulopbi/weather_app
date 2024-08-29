/**
 * while the API data don't load, the jsx will be filled with '-'
 */
const initialData = {
  location: {
    name: " - ",
    region: " - ",
    country: " - ",
  },
  current: {
    temp_c: 0,
    condition: {
      text: " - ",
      icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
    },
  },
};

export default initialData;
