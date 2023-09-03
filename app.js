const addForm = document.querySelector('.add');
const list = document.querySelector('.todos')
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
    const html = `
    <li class="list-group-item flex justify-between items-center p-2 shadow bg-[#423a6f] m-1">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete cursor-pointer"></i>
</li>
    `
    list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim()
    // check to see if todo your trying to add has text, if not then it will not be added
    if(todo.length){
        generateTemplate(todo)
        addForm.reset()
    }
})

// Delete Todos
list.addEventListener('click', e => { 

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})

// Reusable Code
const filterTodos = (term) => {

    Array.from(list.children)
        .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
        .forEach((todo)=> todo.classList.add('filtered'))

    Array.from(list.children)
        .filter((todo)=>  todo.textContent.includes(term))
        .forEach((todo)=> todo.classList.remove('filtered'))
}

// keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})