function addTask() {
  var taskInput = document.getElementById('taskInput');
  var deadlineInput = document.getElementById('deadlineInput');
  var userInput = document.getElementById('userInput');
  var taskList = document.getElementById('taskList');
  
  if (taskInput.value !== '') {
    var taskItem = document.createElement('li');
    taskItem.innerHTML = '<input type="checkbox" onclick="toggleTaskStatus(this)">' +
     '<span>' + taskInput.value + '</span>' + 
     '<span class="deadline">' + deadlineInput.value + '</span>'+
     '<span class="user">' + userInput.value + '</span>';
    taskList.appendChild(taskItem);
    taskInput.value = '';
    deadlineInput.value = '';
    userInput.value = '';

    const button2 = document.createElement("button2"); 
  taskItem.appendChild(button2);
  button2.innerHTML ="X";
    taskInput.value = '';
    button2.addEventListener("click", function() {

      taskItem.remove();
    });
    
  }
}



function toggleTaskStatus(checkbox) {
  var taskItem = checkbox.parentNode;
  var taskProgress = taskItem.querySelector('progress');
  var completedTasks = taskItem.querySelectorAll('input[type="checkbox"]:checked');
  
  if (checkbox.checked) {
    taskItem.classList.add('completed');
  } else {
    taskItem.classList.remove('completed');
  }
}