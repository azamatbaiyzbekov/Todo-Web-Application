const BASE_URL = '/api/users/current';

// //---------------------------------------STATE VARIABLES-----------//
// let state = {
//   user: {},
//   lists: []
// }

// const newListForm = document.getElementById('newListForm');
const listSection = document.getElementById('list');

const toDoTemplate = (list) => {
	return `<div id="${list._id}">
	<h4>${list.typeOfList}</h4>
	<button class="delete-button">&times;</button> 
	<button class="edit-button">edit</button>
	</div>`
  }


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

  

const render = (state) => {
	console.log(state)
  listSection.innerHTML = '';
  state.lists.forEach(list => {
    console.log(list)
    const template = toDoTemplate(list);
    listSection.insertAdjacentHTML('afterbegin', template)
  });
}

  
const LIST_URL = '/lists';

const text = document.getElementById('ToDo');
const addList = document.getElementById('add-list');


let state = {
  user: {},
  lists: []
 }

 const getUser = () => {                                    
 
      fetch(BASE_URL)
       .then((res) => res.json())
       .then(json => {
   	    state.user = json.data;
   	    state.lists = json.data.lists;
        render(state);
       }).catch((err) => console.log(err));
  }
  
getUser();

// // SECTION TEMPLATE OUTPUT
// const listTemplate = (list) => {
//   return `
//     <div class="return-info" >
// ​
//     <div class="dog-cards" id="${list._id}">
//       <h4>Name:</h4>
//       <p class="form-text">${task.data}</p>
//       <h4>Age:</h4>
//       <p class="form-text">${task.dateadded}</p>
      
//       <button class="btn btn-danger delete-button">Delete</button>
//       <button class="btn btn-success edit-button">Edit</button>
      
//     </div>
//     </div>
//   `;
// }


 const addNewList = (event) => {
      event.preventDefault();
      const name = document.getElementById('ToDo')
      const newToDo = { typeOfList: name.value };

      console.log(newToDo)
      
      fetch(LIST_URL, {
         method: 'POST',
         headers: { 'Content-type': 'application/json', },
         body: JSON.stringify(newToDo),
      })
         .then((res) => res.json())
         .then((json) => {
          console.log(json)
          // state.lists = json.data.lists;
          // render(state);
          window.location.reload();
           name.value = '';
           name.focus();
         })
         .catch((err) => console.log(err))
     };
console.log(addList)


const deleteList = (event) => {
  const listId = event.target.parentNode.id;
  fetch(`${LIST_URL}/${listId}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((data) => getUser())
    .catch((err) => console.log(err));
}
​

// const handleListSectionClick = (event) => {
//   event.preventDefault();
//   if (event.target.classList.contains('edit-button')) {
//     editList(event);
//   } else if (event.target.classList.contains('cancel-edit')) {
//     getUser();
//   } else if (event.target.classList.contains('delete-button')) {
//     deleteList(event);
//   }
// }





     addList.addEventListener('click', addNewList);
    //  button.addEventListener('click', addNewList);