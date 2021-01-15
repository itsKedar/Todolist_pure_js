let month = [" Jan "," Feb "," Mar "," April "," May "," June "," July "," Aug "," Sept "," Oct "," Nov "," Dec "];
let date = new Date();
let fulldate = date.getDate() + month[date.getMonth()] + date.getFullYear();
document.querySelector(".date").innerHTML=fulldate;
