let listContainer = document.getElementById("list-container");
let inputBox = document.getElementById("input-box");
let currentDate = document.getElementById("date");

inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addTask();
    }
});

listContainer.addEventListener("click", function (e) {
    //e is the event object contains info about event & target element that was clicked.
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); //if it is added remove it and if it does not sxist add it
        saveTask();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();

    }
    else if (e.target.tagName === "BUTTON") {
        let li = e.target.parentElement;
        let currentTask = li.firstChild.textContent;
        let newTask = prompt("Edit Your Task: ", currentTask);
        if (newTask !== null && newTask.trim() !== "") {
            li.firstChild.textContent = newTask;
            saveTask();
        }
    }
})

function addTask() {
    if (inputBox.value === '') {
        alert("No Task Added!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let xSign = document.createElement("span");
        xSign.classList.add('fa-solid','fa-trash')
        li.appendChild(xSign);

        let editBtn = document.createElement("button");
        editBtn.classList.add('btn', 'btn-outline-success', 'fas', 'fa-edit');
        li.appendChild(editBtn);
    }
    inputBox.value = "";  //so that input text become empty again
    saveTask();

}

function saveTask() {
    localStorage.setItem("Task", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("Task");
}

function displayDate() {
    let date = new Date();
    date = date.toString().split(" ");
    console.log(date);
    //split the date to string to take from it the important info only
    currentDate.innerHTML = date[0] + " " + date[2] + '/' + date[1] + '/' + date[3];
}

showTask();
window.onload = displayDate();