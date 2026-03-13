async function login(){

const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;

const res = await fetch("/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({email,password})

});

const data = await res.json();

if(data.success){

alert("تم تسجيل الدخول");

}else{

alert("بيانات خاطئة");

}

}
