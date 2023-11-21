
const TodoForm = document.querySelector(".form-todo");
const todoInput= document.querySelector(".form-todo input[type='text']");
const todolist=document.querySelector(".todo-list");

TodoForm.addEventListener("submit",function(e){
  e.preventDefault();
  const newTodo = todoInput.value;
  const newli= document.createElement("li");
  const newliInner=`<span>${newTodo}</span>
  <div class="todo-button">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
  </div>`;
  newli.innerHTML=newliInner;
  todolist.append(newli);
  todoInput.value='';
})

todolist.addEventListener("click",function(e){
  if(e.target.classList.contains("remove")){
    e.target.parentNode.parentNode.remove();
  }
  if(e.target.classList.contains("done")){
    const spaner=e.target.parentNode.previousElementSibling;
    spaner.style.textDecoration="line-through";
  }
})
  