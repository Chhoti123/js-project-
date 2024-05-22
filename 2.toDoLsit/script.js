// console.log("Hello")
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
        // console.log("You must write something");
    }
    else{
        //for adding data
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        //for cross symbol we use span
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
      
    }

    inputBox.value = '';
    saveData()
}


        //for checked or mark that is completed the task
        listContainer.addEventListener("click", function(e){
            if(e.target.tagName == "LI"){
                e.target.classList.toggle("checked")
                saveData()
            }
            else if(e.target.tagName == "SPAN"){
                e.target.parentElement.remove();
                saveData()
            }
           }, false);

        function saveData(){
            localStorage.setItem("data", listContainer.innerHTML)
        }
        function showTask(){
            listContainer.innerHTML = localStorage.getItem("data")
        }
        showTask();