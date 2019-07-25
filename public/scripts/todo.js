const newSession = (req, res)=> {
    res.rend('accounts/login');
}

// const BASE_URL = '/api/users/current';

// //---------------------------------------STATE VARIABLES-----------//
// let state = {
//   user: {},
//   lists: []
// }

// const newListForm = document.getElementById('newListForm');
// const listSection = document.getElementById('list');

// const toDoTemplate = (list) => {
// 	return `<div id="${list._id}">
// 	<h4>${list.name}</h4>
// 	<p class="description">${list.description}</p>
// 	<button class="delete-button">&times;</button> 
// 	<button class="edit-button">edit</button>
// 	</div>`
//   }
  


// const render = (state) => {
// 	console.log(state)
//   listSection.innerHTML = '';
//   state.lists.forEach(list => {
//     const template = toDoTemplate(list);
//     listSection.insertAdjacentHTML('afterbegin', template)
//   });
// }

// const allListSuccess = (response) => {                           //passing city json data to our DOM, web browser
//     const { data } = response;
//     state = data;                                             //heree we given our app a memory
    
//   };
  
  
  
//   const getAllList = () => {                                     //function to display json data in html page
   
//     fetch(BASE_URL)
//       .then((res) => res.json())
//       .then(json => {
//         state.user = json.data;
//         state.lists = json.data.lists;
//         render(state);
//       })
//       .catch((err) => console.log(err));
//   }
  
//   getAllList();
  
  
  
  
  
//   const addNewList = (event) => {
//   //   event.preventDefault();
//     const name = document.getElementById('toDo')
//     const description = document.getElementById('description')
//     const newToDo = { name: name.value, description: description.value };
    
//     fetch(BASE_URL, {
//       method: 'POST',
//       headers: { 'Content-type': 'application/json', },
//       body: JSON.stringify(newToDo),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         state.push(state.data);
//         render(state);
//         name.value = '';
//         description.value = '';
//         name.focus();
//       })
//       .catch((err) => console.log(err))
//   }
  
//   const newListSuccess = (response) => {
//       console.log(response);
//       getAllList();
//   }
  
  
  
//   const deleteToDo = (event) => {                             //function to creat click button and delete.
    
//     const listId = event.target.parentNode.id;
    
//     fetch(`${BASE_URL}/${listId}`, {
//       method: 'DELETE',
//     })
//     .then((res) => res.json())
//     .then(data => getAllList())
//     .catch((err) => console.log(err));
//   }
  
//   const editToDo = (event) => {
    
//     const ToDoName = event.target.parentNode.children[0].innerText;
//     const ToDoDescription = event.target.parentNode.children[1].innerText;
//     event.target.parentNode.inneHTML = `
//     <h4>Edit ${ToDoName}</h4>
//       <form>
//         <div>
//           <label for="cityName">City Name</label>
//           <input type="text" id="editCityName" name="name" value="${ToDoName}"/>
//         </div>
//         <div>
//           <label for="cityDescription">City Descriptioin</label>
//           <input type="text" id="editCityDescription" name="description" value="${ToDoDescription}"/>
//         </div>
//         <button type="button" class="cancel-edit">Cancel</button>
//         <button class="submit-edit">Submit</button>
//       </form>
//     `;
//   };
  
//   const updateList = (event) => {
//     listId = event.target.parentNode.parentNode.id;
    
//       const listName = document.getElementById('editListName').value;
//       const listDescription = document.getElementById('editListDescription').value;
//       const newList= { name: listName, description: listDescription };
  
//     fetch(`${BASE_URL}/${listId}`, {
//       method: 'PUT',
//       headers: { 'Content-type': 'application/json'},
//       body: JSON.stringify(newList)
//     })
//     .then((res) => res.json())
//     .then((state) => getAllList())
//     .catch((err) => console.log(err));
//   };
  
//   const handleListSectionClick = (event) => {
//     event.preventDefault();
//     if(event.target.classList.contains('edit-button')) {
//       editToDo(event);
//     } else if (event.target.classList.contains('submit-edit')) {
//       updateList(event)
//     } else if (event.target.classList.contains('cancel-edit')) {
//       getAllList();
//     } else if(event.target.classList.contains('delete-button')) {
//       deleteToDo(event);
//     }
//   }
  
  
//   //----------------------------Event Listeners-----------------------
  
  
//   newListForm.addEventListener('submit', addNewList);
  
  
  
//   listSection.addEventListener('click', handleListSectionClick);
  
const BASE_URL = '/accounts/welcome';


let state = {
   lists: []
 }



  const text = document.getElementById('ToDo');
  const button = document.getElementById('button');
