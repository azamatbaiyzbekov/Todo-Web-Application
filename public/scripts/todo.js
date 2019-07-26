// const newSession = (req, res)=> {
//     res.rend('accounts/login');
// }

const BASE_URL = '/api/users/current';

// //---------------------------------------STATE VARIABLES-----------//
// let state = {
//   user: {},
//   lists: []
// }

// const newListForm = document.getElementById('newListForm');
const listSection = document.getElementById('list');

const toDoTemplate = (list) => {
	return `<div class='list-card' id="${list._id}">
  <h4>${list.typeOfList}</h4>
  <input name='task' id="task"><button>Add Task</button>
	<button class="delete-button">&times;</button> 
	<button class="edit-button">edit</button>
	</div>`
  }

  

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
// const TASK_URL = '/tasks';

const text = document.getElementById('ToDo');
const addList = document.getElementById('add-list');
const addTask = document.getElementById('task')


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


const editToDo = (event) => {
  const toDoName = event.target.parentNode.children[0].innerText;
  console.log(toDoName)
  event.target.parentNode.innerHTML = `
  <h4>Edit ${toDoName}</h4>
    <form>
      <div>
        <label for="listName">ToDo Name</label>
        <input type="text" id="editListName" name="name" value="${toDoName}"/>
      </div>
      <button type="button" class="cancel-edit">Cancel</button>
      <button class="submit-edit">Submit</button>
    </form>
  `;
};

const updateList = (event) => {
  listId = event.target.parentNode.parentNode.id;
    const listName = document.getElementById('editListName').value;
    const newList= { name: listName, };
  fetch(`${LIST_URL}/${listId}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json'},
    body: JSON.stringify(newList)
  })
  .then((res) => res.json())
  .then((data) => getUser())
  .catch((err) => console.log(err));
};


const includeTask = (event) => {
  event.preventDefault();
  const task = document.getElementById('task')
 
  const newTask = { task: task.value };

  console.log(newTask)
      
  fetch(LIST_URL, {
    method: 'POST',
    headers: { 'Content-type': 'application/json', },
    body: JSON.stringify(newTask),
  })
    .then((res) => res.json())
    .then((json) => {
    state.lists = json.data;
    console.log(json)
    // state.lists = json.data.lists;
    // render(state);
    // window.location.reload();
    task.value = '';
    task.focus();
    })
    .catch((err) => console.log(err))
    };




const handleListSectionClick = (event) => {
  event.preventDefault();
   if(event.target.classList.contains('delete-button')) {
    deleteList(event);
  } else if(event.target.classList.contains('edit-button')) {
    editToDo(event);
  } else if (event.target.classList.contains('submit-edit')) {
    updateList(event)
}

}

addList.addEventListener('click', addNewList);

listSection.addEventListener('click', handleListSectionClick);

addTask.addEventListener('click', includeTask)




