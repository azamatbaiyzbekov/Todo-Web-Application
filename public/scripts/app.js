console.log('Public');

const mainPage = document.querySelector('main-page');
const navLinks = document.querySelector('nav li');
const form = document.querySelector('form');


// ADD NAV ACTIVE CLASS
// navLinks.forEach(link => {
//   if (window.location.pathname === link.firstChild.getAttribute('href')) {
//     link.classList.add('active')
//   }
// });

// Create an Account
const newSession = (req, res)=> {
  res.rend('accounts/login');
}


const dateElement = document.getElementById('date');

const options = {weekday: 'long', month: 'short', day: 'numeric'}
const today = new Date();

dateElement.innerText = today.toLocaleDateString('en-US', options)



window.onload = function() {
	//variables
	const form = document.getElementById("form");
	const input = document.getElementById("input");
	const btn = document.getElementById("btn");
	const list = document.getElementById("list");	
	const btnClr = document.getElementById("btnClr");	
	const id = 1;
	// listItem = {item: "todo item", checked: flase}
	const liItem = "";
	const todoList = [];

	//button event listener
	btn.addEventListener("click", addTodoItem);

	//list event listener
	list.addEventListener("click", boxChecked);

	//event listener for clear list
	btnClr.addEventListener("click", clearList);

