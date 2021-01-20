let textValue = document.querySelector("#insert");
let addbtn = document.querySelector("#add");
let list = document.querySelector(".list");
let month = [" Jan "," Feb "," Mar "," April "," May "," June "," July "," Aug "," Sept "," Oct "," Nov "," Dec "];
let date = new Date();
let fulldate = date.getDate() + month[date.getMonth()] + date.getFullYear();
document.querySelector(".date").innerHTML=fulldate;


addbtn.addEventListener("click", function(){
  var li = document.createElement("li");
  var checkbox= document.createElement("input");
  checkbox.type="checkbox";
  var t = document.createTextNode(textValue.value);
  li.appendChild(checkbox);
  li.appendChild(t);
  document.querySelector("ul").appendChild(li);
  textValue.value ="";
  });