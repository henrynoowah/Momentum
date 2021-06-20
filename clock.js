const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h2');

getTime = () => {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}`: minutes}`;
  setInterval(getTime, 60000);
}



function init(){
  getTime();

}

init();