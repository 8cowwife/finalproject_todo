
// Grabbing the selected category from the dropdown list
var selectElement = document.querySelector('#Add');
var selectedCategory = selectElement.options[selectElement.selectedIndex].value;

function selectCategory(){
  selectedCategory = selectElement.options[selectElement.selectedIndex].value;
}


document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
      //putting tasks in the correct category
     
    }
  else{
  if (selectedCategory === 'Home')
    { 
       console.log (selectedCategory)  
    // Checking to see which category is selected
    // this will tell us which container to put the task in 
        document.querySelector('#showhome').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector("#newtask input").value = "";
       }
  else {
    document.querySelector('#showwork').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector("#newtask input").value = "";
  }
      }
}
    