function doSomething(){
  let name= document.querySelector("#nm").value;
  
  let city= document.querySelector("#ct").value;
  
  document.querySelector("#box").innerHTML=`<h1>Your Name : ${name} Your City: ${city}</h1>`;
  
  
}