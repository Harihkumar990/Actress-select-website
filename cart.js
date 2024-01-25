
let createarray = JSON.parse(localStorage.getItem("cart"))||[];
let cartcaontainer = document.querySelector(".cartcontainer");

let func = (array,type,parentelement) => {
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
    spantag.innerText = type === "cart" ? "remove_shopping_cart":"shopping_cart";
    button.appendChild(spantag)
    container2.appendChild(button)
    parentelement.appendChild(container2);
    }
}
func(createarray,"cart",cartcaontainer);
cartcaontainer.addEventListener("click",(e)=>{
    location.reload();
    console.log(e.target.dataset.id)
    createarray = createarray.filter(({id}) => id !== e.target.dataset.id);
    localStorage.setItem("cart",JSON.stringify(createarray));
})