var newInput;
var newDiv;
var newBtn;
var newPara;
var paraText;
var btnText;
var newText;
var paraText;
var tagNumber = 0;
//use the tagnumbers to delete a div 
var deleteDiv = function() {
  
  var thisBtnId = this.id;
  var divId = this.id - 1;
  
  document.getElementById(divId).remove();
}


function getInput() { 
  newInput = document.getElementById("input").value;
  document.getElementById("input").value = "";
  return newInput;
}

function addToList() {
  if (document.getElementById("input").value === "") {
    return;
  } else {
    newText = getInput();
    newDiv = document.createElement("div");

    newBtn = document.createElement("button");
    btnText = document.createTextNode("X");
    newBtn.appendChild(btnText);

    newPara = document.createElement("p");
    paraText = document.createTextNode(newText);
    newPara.appendChild(paraText)

    newDiv.appendChild(newPara)
    newDiv.appendChild(newBtn)
    newDiv.classList.add("listItem"); //it will get styled correctly
    
   //tag the new div with a number identifier
    tagNumber = Number(tagNumber) + 1;
    newDiv.id = tagNumber;
    newBtn.id = Number(newDiv.id) + 1;
    tagNumber = Number(tagNumber) + 1;
    
    //add completed div to webpage
    newBtn.addEventListener('click', deleteDiv)
    document.getElementById("list").appendChild(newDiv)
  
    
  }
}
