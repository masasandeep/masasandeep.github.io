const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function addTask() {
	// create new task list item
	const li = document.createElement('div');
    li.classList.add("task");
    const li1 = document.createElement('div');
    li1.classList.add("buttons");
	const span = document.createElement('span');
	const button = document.createElement('button');
	const button1 = document.createElement('button');
	button.classList.add("btn" ,"btn-outline-danger");
	button1.classList.add("btn" ,"btn-outline-info");
	span.innerText = taskInput.value;
	button1.innerText = 'check';
	button.innerText = 'Delete';
    button1.onclick = function() {
		span.style.textDecoration='line-through';
	};
	button.onclick = function() {
		taskList.removeChild(li);
	};
	
	// add span and button to li
	li.appendChild(span);
	li1.appendChild(button1);
	li1.appendChild(button);
    li.appendChild(li1);
	// add li to ul
    if(taskInput.value==="") alert("Please enter a task");
	else taskList.appendChild(li);
	taskInput.value = '';
}

// add task on button click
addButton.onclick = addTask;
