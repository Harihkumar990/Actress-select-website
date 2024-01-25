
 let americans = [
    {
        id:"001",
        name:"Lana Rhoades",
        price :"10000",
        description: "Will Give you full satisfaction with every position and with hard blowjob",
        image:"./products/lanaroades.jpg"

    },
    {
        id:"002",
        name:"Kendra Sunderland",
        price :"11000",
        description: "Big boobs and Pussy will bring you to heaven with hard sex",
        image:"./products/kendrA.jpg"

    },
    {
        id:"003",
        name:"Carter Cruise",
        price :"9000",
        description: "By smell of pussy. Your fatigue will gone",
        image:"./products/carter.jpg"

    },
    {
        id:"004",
        name:"Elsa Jean",
        price :"10000",
        description: "By the hard core sex.She will bring you in your younger age",
        image:"./products/elsa.jpg"

    }

]
 let russian = [
    {
        id:"005",
        name:"Gabriella Paltrova",
        price :"11000",
        description: "Will Give you full satisfaction with every position and with hard blowjob",
        image:"5./products/gabrial.jpg"

    },
    {
        id:"006",
        name:"Liya Silver",
        price :"11000",
        description: "Big boobs and Pussy will bring you to heaven with hard sex",
        image:"./products/Liya Silver.jpg"

    },
    {
        id:"007",
        name:"Jennifer White",
        price :"9000",
        description: "By smell of pussy. Your fatigue will gone",
        image:"./products/Jennifer White.jpg"

    },
    {
        id:"008",
        name:"Aspen Romanoff",
        price :"10000",
        description: "By the hard core sex.She will bring you in your younger age",
        image:"./products/Aspen Romanoff.jpg"

    }
]
 let italian = [
    {
        id:"009",
        name:"Artemisia Love",
        price :"11000",
        description: "Will Give you full satisfaction with every position and with hard blowjob",
        image:"./products/Artemisia Love.jpg"

    },
    {
        id:"010",
        name:"Nikki Capone",
        price :"11000",
        description: "Big boobs and Pussy will bring you to heaven with hard sex",
        image:"./products/Nikki Capone.jpg"

    },
    {
        id:"011",
        name:"Mona Azar",
        price :"9000",
        description: "By smell of pussy. Your fatigue will gone",
        image:"./products/Mona Azar.jpg"

    },
    {
        id:"012",
        name:"Crystal Taylor",
        price :"10000",
        description: "By the hard core sex.She will bring you in your younger age",
        image:"./products/Crystal Taylor.jpg"

    }
]
let container1 = document.querySelector(".pornstarcontainer");
let maincontainer = document.querySelector(".main");

let state = localStorage.getItem("option");
let isnotincart = (cart,whoreid)=>{
    let istrue = cart && cart.length>0 && cart.some(({id}) => id === whoreid);
    return istrue;
}
let cart =JSON.parse(localStorage.getItem("cart")) || [];
const func = (array,type,parentelement) => {
    for(let element of array){
    let container2 = document.createElement("div");
    container2.classList.add("container2");
    let imagecontainer = document.createElement("img");
    imagecontainer.setAttribute("src",element.image);
    imagecontainer.classList.add("imagecontainer")
    container2.appendChild(imagecontainer);
    let namecontianer = document.createElement("span");
    namecontianer.innerText = "Name :" + element.name;
    namecontianer.classList.add("name");
    container2.appendChild(namecontianer);

    let description = document.createElement("span");
    description.classList.add("description");
    description.innerText = "Description: " + element.description;
    container2.appendChild(description)
    let price = document.createElement("span");
    price.classList.add("name");
    price.innerText = "price: " + element.price + "RS Per Night";
    container2.appendChild(price)
    let button = document.createElement("button");
    button.setAttribute("data-id",element.id);
    button.classList.add("button");
    let spantag = document.createElement("span");
    spantag.setAttribute("data-id",element.id);
    spantag.classList.add("material-symbols-outlined");
    spantag.innerText = isnotincart(cart,element.id) ? "shopping_cart_checkout":"shopping_cart";
    button.appendChild(spantag)
    container2.appendChild(button)
    parentelement.appendChild(container2);
}
}
if(state == "Americans"){
    console.log(state);
    func(americans,"notcart",container1);
}else if(state == "Russians"){
    func(russian,"notcart",container1);
}else if(state ==="Italians"){
    func(italian,"notcart",container1);
}




container1.addEventListener("click",(e)=>{
    e.preventDefault()


    switch(state){
        case "Americans":
            
            if(!isnotincart(cart,e.target.dataset.id)){
                const whore = americans.filter(({id})=> id == e.target.dataset.id)
                cart = [...cart,...whore];
                
                e.target.innerHTML = `<span class='material-icons-outlined' data-id = ${e.target.dataset.id} >shopping_cart_checkout</span>`;
            }else{
                location.href = "cart.html";
            }
            
            
            
            break;
        case "Russians":
            let check = isnotincart(cart,e.target.dataset.id);
            
            if(!check){
                const whore = russian.filter(({id})=> id == e.target.dataset.id)
                cart = [...cart,...whore];
                
                e.target.innerHTML = `<span class='material-icons-outlined' data-id = ${e.target.dataset.id} >shopping_cart_checkout</span>`;
            }else{
                location.href = "cart.html";
                
            }
            break;
        case "Italians":

            
            if(!isnotincart(cart,e.target.dataset.id)){
                 const whore = italian.filter(({id})=> id == e.target.dataset.id)
                cart = [...cart,...whore];
                
                e.target.innerHTML = `<span class='material-icons-outlined' data-id = ${e.target.dataset.id} >shopping_cart_checkout</span>`;
            }else{
                location.href = "cart.html"
                
            }
            
            
            break;
    }
    localStorage.setItem("cart",JSON.stringify(cart));

})
