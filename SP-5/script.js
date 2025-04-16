const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
//event listener for tht add button
addTask.addEventListener('click',function(){
    let task = document.createElement('div');  //cerate a div
    task.classList.add('task');  // adding a class task

    let li = document.createElement('li');// and then create a list
    li.innerText = inputTask.value; 
    task.appendChild(li); //adding the li into div

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class = "fa-solid fa-check"></li>'; // just giving the check sign
    checkButton.classList.add('checkTask') // giving a class
    task.appendChild(checkButton); //adding it into div

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML='<i class = "fa-solid fa-trash-can"</i>'
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === ""){
        alert("please enter a task");
    }
    else{
        taskContainer.appendChild(task);
    }
    inputTask.value = "";
    checkButton.addEventListener('click',function(){
        checkButton.parentElement.style.textDecoration = "line-through";
    })

    deleteButton.addEventListener('click',function(e){
        let target = e.target;
        target.parentElement.parentElement.remove();
    });
})