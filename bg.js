const body = document.querySelector('body');

paintImage = (imgNumber) =>{
  const image = new Image();
  image.src = `./img/0${imgNumber + 1}.jpg`;
  image.classList.add('bgImg')
  body.prepend(image)
}

genRandom = () => {
  const number = Math.floor(Math.random() * 3);
  return number;
}

init = () =>{
  const randomNumber =  genRandom();
  paintImage(randomNumber);
}

init();