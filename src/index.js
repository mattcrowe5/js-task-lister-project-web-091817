document.addEventListener("DOMContentLoaded", () => {
  createList();
  createTask();
});

function createList() {
  let form = document.getElementById("create-list-form");
  form.addEventListener("submit", function(event) {
    let list = new List(document.querySelector("#new-list-title").value);
    event.preventDefault();
    createListDiv(list);
    addListToSelect(list);
  });
}

function addListToSelect(list) {
  let select = document.getElementById("parent-list");
  let option = document.createElement("option");
  option.text = list.title;
  option.id = `option-${list.id}`;
  select.add(option);
}

function createListDiv(list) {
  let div = document.createElement("div");
  document.getElementById("lists").append(div);
  div.className = "list";
  div.id = `list-${list.id}`;
  button = document.createElement("button");
  button.className = "delete-list";
  div.append(button);
  div.innerHTML = `<h2> <button class="delete-list"> X </button>  ${list.title} </h2>`;
  let ul = document.createElement("ul");
  div.appendChild(ul);
  deleteList(list, div);
}

function createTask() {
  let form = document.getElementById("create-task-form");
  form.addEventListener("submit", function(event) {
    let description = document.getElementById("new-task-description").value;
    let priority = document.getElementById("new-task-priority").value;
    let parentList = document.getElementById("parent-list").value;
    let task = new Task(description, priority, parentList);
    event.preventDefault();
    addTaskToList(task, parentList);
  });
}

function addTaskToList(task, parentList) {
  const list = List.findByTitle(parentList);
  let listDiv = document.querySelector(`#list-${list.id} ul`);
  let li = document.createElement("li");
  listDiv.appendChild(li);
  li.innerHTML =
    `Task: ${task.description}` + "<br />" + `Priority: ${task.priority}`;
}

function deleteList(list, div) {
  let button = document.getElementById(`list-${list.id}`);
  let option = document.getElementById(`option-${list.id}`);
  let select = document.getElementById("parent-list");
  button.addEventListener("click", function(event) {
    event.preventDefault();
    div.remove();
    select.remove(option);
  });
}
