var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || []; //retornar um valor padrao caso nao exista o localstorage todos

function renderTodos() {
	listElement.innerHTML = '';

	for(todo of todos){
		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);
		
		var linkElement = document.createElement('a');

		linkElement.setAttribute('href', '#');

		var pos = todos.indexOf(todo)
		linkElement.setAttribute('onclick', 'deleteTodo(' + pos +')');

		var linkText = document.createTextNode(' Excluir')
		
		linkElement.appendChild(linkText);
		

		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);
		
		listElement.appendChild(todoElement)
	};
}

renderTodos();

function addTodo() {
	listElement.innerHTML ='';
	var todoText = inputElement.value;

	todos.push(todoText);
	inputElement.value = '';

	renderTodos();
	saveToStorage();
}

// buttonElement.onClick = addTodo();

function deleteTodo(pos) {
	todos.splice(pos, 1)
	renderTodos();
	saveToStorage();
}

function saveToStorage() {

	localStorage.setItem('list_todos', JSON.stringify(todos));
}

//escutar o enter
const inputEle = document.getElementById('enter');
inputEle.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) { 
  	addTodo();// executa a funcao oa apertar o enter
  }
});

