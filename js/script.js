const form = document.querySelector('.form');
const input = document.querySelector('.input');
const list = document.querySelector('.block-list');
const listJust = document.querySelector('.list-just');

let arrList = [];

form.addEventListener('submit', addTask);


function addTask(e) {
    e.preventDefault();
    const inputValue = input.value;


    const newTask = {
        id: Date.now(),
        Text: inputValue,
        done: false,
    }
    const cssClass = newTask.done ? 'span active' : 'span';
    console.log(newTask)

    const inputHtml =
        `<li id='${newTask.id}' class="toDolist">
        <span class='${cssClass}'>${newTask.Text}</span>
        <div class="buttons">
            <button data-action="chek" class="btn chek">
                <img class="i" src="./img/tick.svg" alt="">
            </button>
            <button data-action="del" class="btn del">
                <img  class="i" src="./img/cross.svg" alt="">
            </button>
        </div>
    </li>`
    list.insertAdjacentHTML('beforeend', inputHtml);
    input.value = '';
    input.focus();
    if (list.children.length > 1) {
        listJust.classList.add('none')
    }
}

list.addEventListener('click', deleteTask)
list.addEventListener('click', noDelete)

function deleteTask(e) {
    if (e.target.dataset.action !== 'del') {
        return
    }
    const deleteLi = e.target.closest('li');
    deleteLi.remove();

    const id = Number(deleteLi.id);
    console.log(id)
    const index = arrList.findIndex(function(item){
        console.log(item)
        if(item.id === id){
            return true;
        }
    })
    console.log(index)
    if (list.children.length === 1)
        listJust.classList.remove('none')
}

function noDelete(e) {
    if (e.target.dataset.action === 'chek') {
        const span = e.target.closest('.toDolist');
        span.querySelector('.span').classList.toggle('active')
    }
}

