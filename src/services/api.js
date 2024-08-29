// API KEY
const KEY = `25d5892ebfe942d482192643242808`;

const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;
  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();
  return data;
};

export default fetchData;
