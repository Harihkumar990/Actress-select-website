let submit = document.querySelector(".fieldset");
let error = document.querySelectorAll(".error");
let button  =document.querySelector(".submit")
let email,password;
let empty = document.querySelectorAll(".empty");
let check1 = check2 = false;
let savepoints  = JSON.parse(localStorage.getItem("save"))||[];
let ptarget,etarget;

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
        
        case "email":
            email = e.target.value;
            etarget = e.target;
            break;
        case "password":
            password = e.target.value;
            ptarget = e.target;
            break;
    }
})
function ispresentornot(array,element){
    let str = array.some((char) => element==char);
    return str;
}


button.addEventListener("click",(e)=>{
    e.preventDefault()
    if(email){
        empty[0].classList.add("display-error");
        let istrurornot = ispresentornot(savepoints,email);
   
        if(istrurornot){
            
            error[0].classList.add("display-error");
            check1=true;
        }else{
            error[0].classList.remove("display-error");
            check1=false;
        }
    }else{
        empty[0].classList.remove("display-error")
        check1=false;
    }

    if(password){
        istrurornot = ispresentornot(savepoints,password);
        empty[1].classList.add("display-error");
        if(istrurornot){
    
            
            error[1].classList.add("display-error");
            check2=true;
        }else{
            error[1].classList.remove("display-error");
            check2=false;
        }
    }else{
        empty[1].classList.remove("display-error");
        check2=false;
    }
   
  if(check1 && check2){
    etarget.value = e.target.value ="";
    location.href = "firstpageofwebsite.html";
    localStorage.setItem("option","true");
  }
  
})