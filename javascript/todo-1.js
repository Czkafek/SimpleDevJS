let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function AddElement() {
    let input = document.body.querySelector('input');
    if(input.value !== "") {
        todoList.push(input.value);
        input.value = "";
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }
    console.log(todoList);
}

function checkKey(event) {
    if(event.key === 'Enter') {
        AddElement();
    }
}