var newInput;
var newDiv;
var newBtn;
var newPara;
var paraText;
var btnText;
var newText;
var paraText;


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
    newBtn.classList.add("deleteButton");

    newPara = document.createElement("p");
    paraText = document.createTextNode(newText);
    newPara.appendChild(paraText)

    newDiv.appendChild(newPara)
    newDiv.appendChild(newBtn)
    newDiv.classList.add("listItem");
    newDiv.id = 
    document.getElementById("list").appendChild(newDiv)
  }
  
}

document.querySelectorAll(".deleteButton").forEach( (delBtn) => delBtn.addEventListener("click", function() {
  console.log("delete button is working")
}));



