function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    
    if (taskInput.value !== '') {
      var taskItem = document.createElement('li');
      taskItem.innerHTML = '<input type="checkbox" onclick="toggleTaskStatus(this)"><span>' + taskInput.value + '</span>';
      taskList.appendChild(taskItem);

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
    
    if (checkbox.checked) {
      taskItem.classList.add('completed');
    } else {
      taskItem.classList.remove('completed');
    }
    
}

  