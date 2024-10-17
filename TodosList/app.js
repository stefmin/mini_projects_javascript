const addForm = document.querySelector("form.add");
const ul = document.querySelector("ul");
const searchBox = document.querySelector(".search");

const generateTemplate = todo => {
    const html = `<li class="text-light list-group-item d-flex justify-content-between allign-items-center border">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
                </li>`;
    ul.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length)
    {
        generateTemplate(todo);
        addForm.reset();
    }
})

ul.addEventListener('click', e => {
    if(e.target.classList.contains("fa-trash-alt"))
        e.target.parentElement.remove();
})

searchBox.addEventListener('keyup', e => {
    const searchText = e.target.value.toLowerCase();
    let lis = document.querySelectorAll('li');
    lis.forEach(li => {
        if( !( li.textContent.trim().toLowerCase().includes(`${searchText}`) ) )
        {
            li.classList.add("filtered");
        }
        else
        {
            li.classList.remove("filtered");
        }
    })
})