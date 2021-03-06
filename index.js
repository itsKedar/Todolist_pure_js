let textValue = document.querySelector("#insert");
let addbtn = document.querySelector("#add");
let list = document.querySelector(".list");
let month = [" Jan "," Feb "," Mar "," April "," May "," June "," July "," Aug "," Sept "," Oct "," Nov "," Dec "];
let date = new Date();
let fulldate = date.getDate() + month[date.getMonth()] + date.getFullYear();
document.querySelector(".date").innerHTML=fulldate;



textValue.addEventListener("keyup" , function(event){
  
   if(event.keyCode===13){
    var li = document.createElement("li");
  var t = document.createTextNode(textValue.value);
  li.appendChild(t);
  document.querySelector("ul").appendChild(li);
  textValue.value ="";  
  addbtn.click();
  }
  });

addbtn.addEventListener("click" , function(){
  if(textValue.value=="")
  {
    textValue.value='';
  }
  else{
    var li = document.createElement("li");
  var t = document.createTextNode(textValue.value);
  li.appendChild(t);
  document.querySelector("ul").appendChild(li);
  textValue.value ="";  
  }
  });


list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
  
  