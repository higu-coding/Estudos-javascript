const inputTask = document.querySelector(".input-task");
const btnTask = document.querySelector(".btn-add-tasks");
const tasks = document.querySelector(".tasks");

// =============================== FUNÇÕES =================================

function createLi() {
  // VAI CRIAR UM ELEMENTO <LI>
  const li = document.createElement("li");
  return li;
}

function createTask(inputText) {
  // VAI CRIAR UMA TAREFA
  const li = createLi();
  li.innerHTML = inputText;
  tasks.appendChild(li);
  clearInput();
  createDeleteButton(li);
  saveTask();
}

function clearInput() {
  // VAI LIMPAR O INPUT
  inputTask.value = "";
  inputTask.focus();
}

function createDeleteButton(li) {
  // VAI CRIAR UM BOTAO DE APAGAR
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Apagar";

  // O setAttribute() método da Element interface define o valor de um atributo no elemento especificado. Se o atributo já existir, o valor será atualizado; caso contrário, um novo atributo será adicionado com o nome e valor especificados.

  deleteBtn.setAttribute("class", "delete"); // criou uma classe com o nome delete
  deleteBtn.setAttribute("title", "Apagar tarefa");

  li.appendChild(deleteBtn);
}

function saveTask() {
  // VAI SALVAR AS TAREFAS
  const liTasks = tasks.querySelectorAll("li");
  const listOfTasks = [];

  for (let someTasks of liTasks) {
    let textTask = someTasks.innerText;
    textTask = textTask.replace("Apagar", "").trim();
    listOfTasks.push(textTask);
  }
  const JSONtask = JSON.stringify(listOfTasks); // stringify converte um elemento JS para uma string JSON
  localStorage.setItem("tasks", JSONtask); // setItem vai salvar no local storage
}

function redeemTasks() {
  // VAI RECUPERAR AS TAREFAS AO RECARREGAR A PAGINA
  const tasks = localStorage.getItem("tasks"); // getItem vai recuperar as informaçoes ao recarregar a pagina
  const taskList = JSON.parse(tasks); // parse converte um elemento JSON para um elemento JS

  for (let task of taskList) {
    createTask(task);
  }
}
redeemTasks();

// =============================== EVENTOS =================================

btnTask.addEventListener("click", (e) => {
  // EVENTO QUE CLICA NO BOTAO DE ADD. TAREFA
  if (!inputTask.value) return;
  createTask(inputTask.value);
});

inputTask.addEventListener("keypress", (e) => {
  // EVENTO QUE AO APERTAR ENTER VAI ADD. TAREFA
  if (!inputTask.value) return;
  if (e.keyCode === 13) {
    createTask(inputTask.value);
  }
});

document.addEventListener("click", (e) => {
  // BOTAO DE APAGAR A TAREFA
  const element = e.target;

  if (element.classList.contains("delete")) {
    element.parentElement.remove();
    saveTask();
  }
});
