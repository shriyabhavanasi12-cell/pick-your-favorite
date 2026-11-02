const dropdown=document.getElementById("dropdown-options");

function openDropdown(){
if (dropdown.classList.contains("open")){
dropdown.classList.remove("open");


}else{

dropdown.classList.add("open");

}

};

const body= document.querySelector("body");
const instruction= document.querySelector("#instruction");
const content=document.querySelector("#content-holder");
const title=document.querySelector("#title");
const slot1=document.querySelector("#slot-1");
const slot2=document.querySelector("#slot-2");
const slot3=document.querySelector("#slot-3");

function clear(){
body.classList.remove='';

body.classList='';

slot2.classList='content';
slot3.classList='content';

dropdown.classList.remove("open");

}

