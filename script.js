var newInput;
var newDiv;
var newBtn;
var newPara;
var paraText;
var newLabel
var btnText;
var newText;
var newInput;
var newSpan;
var paraText;
var tagNumber = 0;

var addToCompleted = function() {
  var thisSpanId = this.id;
  var divId = this.id - 0.1;
  var deleteBtnId = divId + 1;
  
  var completedDiv = document.getElementById(divId);
 
  document.getElementById(deleteBtnId).remove();
  document.getElementById("completedList").appendChild(completedDiv);
}

//use the tagnumbers to delete a div 
var deleteDiv = function() {
  var thisBtnId = this.id;
  var divId = this.id - 1;
  
  document.getElementById(divId).remove();
}

var getInput = function() { 
  newInput = document.getElementById("input").value;
  document.getElementById("input").value = "";
  console.log(newInput)
  return newInput;
}

function addToList() {
  if (document.getElementById("input").value === "") {
    return;
  } else {
    newText = getInput();
    newDiv = document.createElement("div");
    newDiv.classList.add("itemsContainer");
    
    newLabel = document.createElement("label");
    newLabel.classList.add("listItem");
    newInput = document.createElement("input");
    newInput.classList.add("checkbox");
    newInput.setAttribute("type", "checkbox")
    newLabel.appendChild(newInput);
    newSpan = document.createElement("span");
    newSpan.classList.add("checkmark");
    newLabel.appendChild(newSpan);
    newPara = document.createElement("p");
    paraText = document.createTextNode(newText);
    newPara.appendChild(paraText);
    newLabel.appendChild(newPara);
    newDiv.appendChild(newLabel);
    

    newBtn = document.createElement("button");
    btnText = document.createTextNode("X");
    newBtn.classList.add("deleteButton");
    newBtn.appendChild(btnText);
    newDiv.appendChild(newBtn)
    
    
   //tag the new div with a number identifier
    tagNumber = Number(tagNumber) + 1;
    newDiv.id = tagNumber;
    newBtn.id = Number(newDiv.id) + 1; //used when div in deleted
    newSpan.id = Number(newDiv.id) + 0.1; //used to move div to completed list
    
    tagNumber = Number(tagNumber) + 1;
    console.log(newBtn.id)
    //add completed div to webpage
    newBtn.addEventListener('click', deleteDiv)
    newSpan.addEventListener('click', addToCompleted)
    document.getElementById("list").appendChild(newDiv)
    
  }
}
