const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    // Will not let you add to the to do list if the field is empty
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    // Allow you to add to the to-do list
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // Allows for the information in the box to disappear after pressing add
    inputBox.value = "";

    // Call the saveData function every time a task is added to the list
    saveData();
}

/*
Click function to cross out the task
 - If it is already crossed out when clicked, it will get uncrossed
Check if we have already crossed out the task
 - If we have and we click the 'x' button, it will remove it from list
*/
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

/* 
Store the entire list within the browser
 - If you exit out the browser, the to do list will be saved
*/
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();