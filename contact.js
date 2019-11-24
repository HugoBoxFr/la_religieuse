//TODO: Rajouter une apparition en la   

function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}

function changeVisibleForm(checkbox, form1, form2) {
    if (checkbox.checked) {
        form1.style.display = "flex";
        form2.style.display = "none";
    } else {
        form1.style.display = "none";
        form2.style.display = "flex";
    }
}

let formButton = document.getElementById("toggle-button");

let contactForm = document.getElementById("form1");
let orderForm = document.getElementById("form2");

let contactCheckbox = document.getElementById("radio-contact");
let orderCheckbox = document.getElementById("order-checkbox");

let radios = document.getElementById("radios");

radios.addEventListener("click", function(){
    changeVisibleForm(contactCheckbox, contactForm, orderForm);
    //alert("Work done!");
});

function calculatePrice(elt, htmlElement) {
    let total = elt.value * 45;
    htmlElement.innerHTML = total;
    if (elt.value > 100) {
        alert("La Religieuse étant une distillerie artisanale, nous ne pouvons malheureusement pas assurer uen commande de plus de 100 bouteilles")
        elt.value = 100;
    } 
}

let quantity = document.getElementById("number-input");
let total = document.getElementById("total");
quantity.addEventListener("input", function(){
    calculatePrice(quantity, total);
});
