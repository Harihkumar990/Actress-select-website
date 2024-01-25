let submit = document.querySelector(".fieldset");
let error = document.querySelectorAll(".error");
let button = document.querySelector(".submit");
let fname,lname,email,pnumber,password;
let empty = document.querySelectorAll(".empty");
let check = false;
let ftarget,ltarget,ntarget,ptarget,etarget;
console.log(empty)
for(let errors of error){
    errors.classList.add("display-error");
}
for(let emptys of empty){
    emptys.classList.add("display-error");
}
submit.addEventListener("keyup",(e)=>{
    e.preventDefault()
    let str = e.target.dataset.id;
    switch(str){
        case "firstn":
            fname=e.target.value;
            ftarget=e.target
            break;
        case "lastn":
            lname = e.target.value;
            ltarget=e.target
            break;
        case "number":
            pnumber = e.target.value;
            ntarget=e.target;
            break;
        case "email":
            email = e.target.value;
            etarget=e.target
            break;
        case "password":
            password = e.target.value;
            ptarget=e.target
            break;
    }
})
let checkalphabet =  /^[a-z]+$/i;
let checkemail = "@gmail.com";
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
let savepoint =JSON.parse(localStorage.getItem("save"))||[];
button.addEventListener("click",(e)=>{
    e.preventDefault()
    
    if(fname){
        empty[0].classList.add("display-error");
        if(checkalphabet.test(fname)){
         savepoint.push(fname)
            localStorage.setItem("save",JSON.stringify(savepoint));
            error[0].classList.add("display-error");
            check = true;
        }else{
            error[0].classList.remove("display-error");
            check=false;
        }
    }else{
        empty[0].classList.remove("display-error")
        check=false;
    }
    if(lname){
        
        empty[1].classList.add("display-error");
        if(checkalphabet.test(fname)){
            savepoint.push(lname);
            localStorage.setItem("save",JSON.stringify(savepoint));
            error[1].classList.add("display-error");
            check=true;
        }else{
            error[1].classList.remove("display-error");
            check=false
        }
    }else{
        empty[1].classList.remove("display-error")
        check=false;
    }
    if(email){
        empty[2].classList.add("display-error");
        if(email.includes(checkemail)){
            savepoint.push(email);
            localStorage.setItem("save",JSON.stringify(savepoint));
            error[2].classList.add("display-error");
            check=true;
        }else{
            error[2].classList.remove("display-error");
            check=false;
        }
    }else{
        empty[2].classList.remove("display-error")
        check=false;
    }
    if(password){
        empty[3].classList.add("display-error");
        if(pwdRegex.test(password)){
            savepoint.push(password);
            localStorage.setItem("save",JSON.stringify(savepoint));
            error[3].classList.add("display-error");
            check=true;
        }else{
            error[3].classList.remove("display-error");
            check=false;
        }
    }else{
        empty[3].classList.remove("display-error");
        check=false;
    }
    if(pnumber){
        empty[2].classList.add("display-error");
        if(Number.isInteger(Number(pnumber)) && pnumber.length == 10){
            savepoint.push(pnumber);
            localStorage.setItem("save",JSON.stringify(savepoint));
            error[4].classList.add("display-error");
            check=true;
        }else{
            error[4].classList.remove("display-error");
            check=false;
        }
    }else{
        empty[4].classList.remove("display-error")
        check=false;
    }
  if(check){
    ptarget.value=ltarget.value=ftarget.value=etarget.value=ntarget.value="";
    localStorage.setItem("option","true");
    location.href = "firstpageofwebsite.html";

  }
  
})