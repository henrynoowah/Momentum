const toDoForm = document.querySelector('.js-toDo');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');


const TODO_LS = 'toDos';
let toDo = [];

delToDo = (event) =>{
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDo = toDo.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  });
  toDo = cleanToDo;
  saveToDo();
}

saveToDo = ()=>{
  localStorage.setItem(TODO_LS, JSON.stringify(toDo))
}

paintToDo = (a) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const delBtn = document.createElement('div');
  delBtn.addEventListener('click', delToDo);
  const newId = toDo.length + 1;
  span.innerHTML = a;
  delBtn.innerText = '❤';
  delBtn.classList.add('delBtn')
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: a,
    id: newId
  }
  toDo.push(toDoObj);
  saveToDo();
}



handleSubmit = (event) => {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  // after input, delete input value in the input box
  toDoInput.value = '';
}

loadToDo = () => {
  const loadedToDo = localStorage.getItem(TODO_LS);
  if (loadedToDo !== null){
    const parsed = JSON.parse(loadedToDo);
    parsed.forEach(function(toDo) {
      paintToDo(toDo.text)
    });
  }
}

init = () => {
  loadToDo();
  toDoForm.addEventListener('submit', handleSubmit)
}

init()
