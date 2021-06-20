const weather = document.querySelector('.js-weather');

const API_KEY = 'ef2edd56341e5f879dd566500f57d6f9';
const COORDS = 'coords';

getWeather = (lat, lng) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function(response){
      return response.json();
  })
    .then(function(json){
      const temp = json.main.temp;
      const place = json.name;
      weather.innerText = `${temp}deg Celcius ${place}`;
  })
} 

saveCoords = (coordsObj) => {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

handleGeoSuccess = (position) =>{
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  }
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

handleGeoError = () =>{
  console.log(`can't access geo location`);
};

askForCoords = () => {
  //자바스크립트 내 지역 위치 가져오기
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

loadCoords = () => {
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude)
  }
}


init = () =>{
  loadCoords();
};

init();