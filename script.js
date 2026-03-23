const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const totalTasksElement = document.getElementById("total-tasks");
const completedTasksElement = document.getElementById("completed-tasks");

function AddTask(){
    if(inputBox.value === ''){
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    inputBox.value = "";
    saveData();
    updateStats();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        updateStats();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        updateStats();
    }
}, false);

function updateStats() {
    const allTasks = listContainer.querySelectorAll("li");
    const completedTasks = listContainer.querySelectorAll("li.checked");

    totalTasksElement.textContent = allTasks.length;
    completedTasksElement.textContent = completedTasks.length;
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    updateStats();
}

showTask();

// Add keyboard support
inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        AddTask();
    }
});
