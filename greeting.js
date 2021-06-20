const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser';

saveName = (a) =>{
  localStorage.setItem(USER_LS, a);
}
handleSubmit = (event) =>{
  event.preventDefault();
  //preventDefault() = 이벤트의 기본동작을 막음
  const currentValue = input.value;
  paintGreetings(currentValue);
  saveName(currentValue)
}
askForName = () => {
  form.classList.add('showing');
  form.addEventListener('submit', handleSubmit)
}

paintGreetings = (a) =>{
  form.classList.remove('showing');
  greeting.classList.add('showing');
  greeting.classList.add('greetingsFade');
  greeting.innerText = `Hello ${a}`;
}

loadName = () => {
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null) {
    //로컬 스토리지 데이터가 없을 때 
    askForName();
  }else{
    paintGreetings(currentUser);
  }
}

init = () =>{
  loadName()

}

init()