let maincontainer = document.querySelector(".main");
let str;
maincontainer.addEventListener("click" ,(e)=>{
    str = e.target.value;
    console.log(str)
    switch(e.target.value){
        case "Americans":
            localStorage.setItem("option",e.target.value);
            
            break;
        case "Russians":
            localStorage.setItem("option",e.target.value);
            break;
        case "Italians":
            localStorage.setItem("option",e.target.value);
            break
    }
    if(e.target.dataset.id == "submit"){
        location.href = "pornstarpage.html";
        e.preventDefault()
    }
    


})
let istrue = JSON.parse(localStorage.getItem("option"));

let navbar = document.querySelector(".buttoncontainer");

let login = document.createElement("span")
login.innerText = istrue ? "User":"login";


let loginbutton  = document.createElement("button");
loginbutton.classList.add("button");
loginbutton.setAttribute("data-id",istrue ? "user":"login");


let loginicon = document.createElement("span");
loginicon.classList.add("material-symbols-outlined")
loginicon.setAttribute("data-id",istrue ? "user":"login");
loginicon.innerText = istrue ? "person":"login";


navbar.appendChild(login);
loginbutton.appendChild(loginicon);
navbar.appendChild(loginbutton)

// Signup Button ;

let signup = document.createElement("span");
signup.innerText = istrue? "logout":"signup";

let signupbutton =  document.createElement("button");
signupbutton.classList.add("button");
signupbutton.setAttribute("data-id",istrue ? "user":"signup");

let signupicon  = document.createElement("span");
signupicon.classList.add("material-symbols-outlined");
signupicon.innerText = istrue ? "logout" : "tv_signin";
signupicon.setAttribute("data-id",istrue ? "logout":"signup");

navbar.appendChild(signup);
signupbutton.appendChild(signupicon);
navbar.appendChild(signupbutton)

navbar.addEventListener("click",(e)=>{
    e.preventDefault();
    switch(e.target.dataset.id){
        case "login":
            location.href = "login.html";
            break;
        case "signup":
            location.href = "signup.html";
            break;
        case "logout":
            location.href = "firstpageofwebsite.html"
            console.log("true")
            localStorage.setItem("option","false");
            break;
    }
})
