let todosArray = [
  { id: 1, title: "آموزش جاوااسکریپت جلسه 80", isDoing: false },
  { id: 2, title: "درست کردن ناهار", isDoing: false },
  { id: 3, title: "ورزش", isDoing: false },
  { id: 4, title: "درس", isDoing: false },
];

let ulList = document.querySelector(".ul-list");
let btnAdd = document.querySelector(".btn-plus");

function addNode() {
  todosArray.forEach(function (todo) {
    let liNode = document.createElement("li");
    liNode.setAttribute("class", "item-list");
    let textliNode = (document.createTextNode = `
                          <button class="Btn btn-checkbox">
                          <span class="svgIcon">
                            <i class="bi bi-x"></i>
                          </span>
                        </button>
                        <button class="Btn btn-delete">
                          <span class="svgIcon">
                            <i class="bi bi-trash"></i>
                          </span>
                        </button>
                        <span class="text-item">${todo.title}</span>
`);
    liNode.innerHTML = textliNode;
    ulList.appendChild(liNode);
  });
}

addNode();

btnAdd.addEventListener("click", function () {
  let nameAddTodo = prompt("نام جدید کارتان را وارد کنید : \n ");
  let newTodo = {
    id: todosArray.length + 1,
    title: nameAddTodo,
    isDoing: false,
  };
  todosArray.push(newTodo);
  let liNode = document.createElement("li");
  liNode.setAttribute("class", "item-list");
  let textliNode = (document.createTextNode = `
                          <button class="Btn btn-checkbox">
                          <span class="svgIcon">
                            <i class="bi bi-x"></i>
                          </span>
                        </button>
                        <button class="Btn btn-delete">
                          <span class="svgIcon">
                            <i class="bi bi-trash"></i>
                          </span>
                        </button>
                        <span class="text-item">${newTodo.title}</span>
`);
  liNode.innerHTML = textliNode;
  ulList.appendChild(liNode);
  console.log(todosArray);
});