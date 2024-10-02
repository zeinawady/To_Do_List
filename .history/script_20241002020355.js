let listContainer = document.getElementById("list-container");
let inputBox = document.getElementById("input-box");
let currentDate= document.getElementById("date");
function addTask() {
    if (inputBox.value === '') {
        alert("No Task Added!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let xSign = document.createElement("span");
        xSign.classList.add("delete-btn")
        xSign.innerHTML = '\u00d7';  // x sign code
        li.appendChild(xSign);

        let editBtn = document.createElement("button");
        editBtn.innerHTML="✎";
        
        li.appendChild(editBtn);
    }
    inputBox.value = "";  //so that input text become empty again
    saveTask();

}

inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { 
        e.preventDefault();  
        addTask();
    }
});

listContainer.addEventListener("click", function (e) {
    //e is the event object contains info about event & target element that was clicked.
    if (e.target.classList.contains("delete-btn")) {
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();

    }
})

function saveTask() {
    localStorage.setItem("Task", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("Task");
}
showTask();

function displayDate(){
    let date=new Date();
    date=date.toString().split(" ");
    currentDate.innerHTML=date[0]+" "+ date[2]+'/'+ date[1] +'/'+ date[3];
    console.log();
}
window.onload=displayDate();