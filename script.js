
const titleInput = document.querySelector('#title-input');
const descriptionInput = document.querySelector('#description-input');

const saveButton = document.querySelector('#save-button');
const cancelButton = document.querySelector('#cancel-button');

const dataArr = [];
const itemsList = document.querySelector('#item-list');

// document.addEventListener('DOMContentLoaded', loadItems);

saveButton.addEventListener('click', () => {
    if (titleInput.value === '' && descriptionInput.value === '') {
        return
    }

    function getThemaValue() {
        const themaInput = document.getElementById('thema-input');
        return themaInput.value;
    }

    const dataObj = {
        title: titleInput.value,
        description: descriptionInput.value,
        thema: getThemaValue()
    };

    renderItem(dataObj);
    // localSaving(dataObj);
    

    titleInput.value = '';
    descriptionInput.value = '';
    getThemaValue.value = '';
});

function renderItem(dataObj) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
        <div class="list-card">
            <div class="first-container">
                <div class="badge">${dataObj.thema}</div>
                <div class="icons-container">
                    <div class="icon-button">/</div>
                    <button data-action="remove" class="icon-button">Delete</button>
                </div>
            </div>
            <div class="second-container">
                <h2>${dataObj.title}</h2>
                <p>${dataObj.description}</p>
            </div>
            <div class="third-container">
                <button data-action="complete" class="complete-button">Completed</button>
            </div>
        </div>
    `;

    itemsList.append(todoItem);
}

itemsList.addEventListener('click', (event) => {
    if  (event.target?.dataset?.action === 'remove'){
        const removeButton = event.target;
        const todoItem = removeButton.closest('.todo-item');
        todoItem.remove();
        
    }

    if (event.target?.dataset?.action === 'complete') {
        const completeButton = event.target;
        const todoItem = completeButton.closest('.todo-item');
        todoItem.classList.toggle('todo-item-completed');
    }
});

// Local Srorage

// function localSaving(item) {
//     const lists = JSON.parse(localStorage.getItem('todoItems')) || [];
//     lists.push(item);
//     localStorage.setItem('todoItems', JSON.stringify(lists));
// }

// function loadItems() {
//     const lists = JSON.parse(localStorage.getItem('todoItems')) || [];
//     lists.forEach(item => renderItem(item));
// }
