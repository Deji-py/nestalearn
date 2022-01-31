const myform= document.getElementById("myform");
const login = document.getElementById("loginpage");
function show(){
  myform.style.display="flex";
}

function loginpage(){
  login.style.left="0%";
  login.style.opacity="1";
}


const webmodal= document.getElementById("webmodal");
const webcard = document.getElementById("webcard");
const prevs = document.getElementById("prevs");

function webpreview(){
  prevs.style.display="block";
  webmodal.style.opacity="0.9";
  setTimeout(()=>{
    webcard.style.top="30%";
  },500);
}
webmodal.addEventListener("click",()=>{
  webcard.style.top="100%";
  webmodal.style.opacity="0";
  setTimeout(()=>{
    webmodal.style.opacity="none";
    prevs.style.display="none";
  },500);
})
