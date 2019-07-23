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

const addButton = document.getElementById('add');
// console.log(addButton);
const inputTask = document.getElementById('new-task');

const unifinishedTasks = document.getElementById('unfinished-tasks');

const finishedTasks = document.getElementById('finished-tasks');

function createNewElement(task) {
  const listItem = document.createElement('li');
  const checkbox = document.createElement('button');
  checkbox.className="material-icons checkbox";
  checkbox.innerHTML="<i class="material-icons">check_box_outline</i>";
}