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




// const BASE_URL = '/accounts/profile';

// const state = {
//   list: [],
// }

// const newListForm = document.getElementById('newListForm');
// const myList = document.getElementById('myList');


// const render = (data) => {
//   myList.innerHTML = '';
//   data.forEach(list => {
//     const template = cityTemplate(list);
//     myList.insertAdjacentHTML('afterbegin', template)
//   });
// }


// const allListSuccess = (response) => {                           
//   const { data } = response;
//   state.list = data;                                             
// };



// const getAllList = () => {                                     
//   fetch(BASE_URL)
//     .then((res) => res.json())
//     .then(json => {
//       state.list = json.data;
//       render(state.list);
//     })
//     .catch((err) => console.log(err));
// }

// getAllList();


// const cityTemplate = (list) => {
//   return `<div id="${city._list}">
//   <h4>${list.name}</h4>
//   <p class="description">${list.description}</p>
//   <button class="delete-button">&times;</button> 
//   <button class="edit-button">edit</button>
//   </div>`
// }



// const addNewList = (event) => {
//   event.preventDefault();
//   const name = document.getElementById('My-To-Do-List')
//   const description = document.getElementById('description')
//   const newList = { name: name.value, description: description.value };
//   fetch(BASE_URL, {
//     method: 'POST',
//     headers: { 'Content-type': 'application/json', },
//     body: JSON.stringify(newList),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       state.list.push(data.data);
//       render(state.list);
//       name.value = '';
//       description.value = '';
//       name.focus();
//     })
//     .catch((err) => console.log(err))
// }

// const newListSuccess = (response) => {
//     console.log(response);
//     getAllList();
// }

// const deleteList = (event) => {                             
 
//   const ListId = event.target.parentNode.id;
//   fetch(`${BASE_URL}/${ListId}`, {
//     method: 'DELETE',
//   })
//   .then((res) => res.json())
//   .then(data => getAllList())
//   .catch((err) => console.log(err));
// }

// const editList = (event) => {
//   const listName = event.target.parentNode.children[0].innerText;
//   const listDescription = event.target.parentNode.children[1].innerText;
//   event.target.parentNode.inneHTML = `
//   <h4>Edit ${listName}</h4>
//     <form>
//       <div>
//         <label for="cityName">City Name</label>
//         <input type="text" id="editCityName" name="name" value="${listName}"/>
//       </div>
//       <div>
//         <label for="cityDescription">City Descriptioin</label>
//         <input type="text" id="editCityDescription" name="description" value="${listDescription}"/>
//       </div>
//       <button type="button" class="cancel-edit">Cancel</button>
//       <button class="submit-edit">Submit</button>
//     </form>
//   `;
// };

// const updateList = (event) => {
//   cityId = event.target.parentNode.parentNode.id;
//     const listName = document.getElementById('editCityName').value;
//     const listDescription = document.getElementById('editCityDescription').value;
//     const newList = { name: listName, description: listDescription };
//   fetch(`${BASE_URL}/${listId}`, {
//     method: 'PUT',
//     headers: { 'Content-type': 'application/json'},
//     body: JSON.stringify(updatedList)
//   })
//   .then((res) => res.json())
//   .then((data) => getAllList())
//   .catch((err) => console.log(err));
// };

// const handleListSectionClick = (event) => {
//   event.preventDefault();
//   if(event.target.classList.contains('edit-button')) {
//     editList(event);
//   } else if (event.target.classList.contains('submit-edit')) {
//     updateList(event)
//   } else if (event.target.classList.contains('cancel-edit')) {
//     getAllList();
//   } else if(event.target.classList.contains('delete-button')) {
//     deleteList(event);
//   }
// }


// newListForm.addEventListener('submit', addNewList);

// myList.addEventListener('click', handleListSectionClick);
