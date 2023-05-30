const bill = $("bill");
const people = $("people");

const amount = $("amount");
const total = $("total");

let amountValue;
let totalValue;

const buttons = document.querySelectorAll(".select-btn");

let custom = $("custom");
let reset = $("reset");

//------------------ Events ---------------------
buttonsActive();

//Reset
reset.addEventListener("click", ()=>{
    resetBtn();
    
})

//Buttons
let tipValue;

buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
        tipValue = parseInt(button.value);
    
        calculate();

    })
})

//Bill
let billValue = 0;

bill.addEventListener("keyup", ()=> {

    billValue = parseFloat(bill.value);
    amount.innerText = billValue.toFixed(2);

    if (bill.value == "") {
        amount.innerText = "0.00";
    }
});

//People
let peopleValue = 1;


    people.addEventListener("keyup", ()=>{
        peopleValue = parseInt(people.value);
    
        let error = $("error");
    
        calculate();
    
        if (peopleValue == 0 || isNaN(peopleValue)) {
            amount.innerText = "0.00";
            total.innerText = "0.00";
    
            people.classList.add("people-alert");
            error.classList.add("alert");
        } else {
            people.classList.remove("people-alert");
            error.classList.remove("alert");
        }
    });


//Custom

custom.addEventListener("click", ()=>{
    removeActived();
});

custom.addEventListener("keyup", ()=>{
    tipValue = parseInt(custom.value);
    if (!isNaN(tipValue)) {
        calculate();
    }
});




//------------------ Functions -------------------

//Active Buttons
function buttonsActive() {
    buttons.forEach(button =>{
        button.addEventListener("click", ()=>{
            buttons.forEach(button =>{
                removeActived();
            })
            button.classList.add("select-btn-active");
        })
    });
};


//Remove Actived
function removeActived() {
    buttons.forEach(button =>{
        button.classList.remove("select-btn-active");
        
    })
}

//Reset
function resetBtn() {


    bill.value = "";
    people.value = "";

    billValue = 0;
    peopleValue = "";

    amountValue = 0;
    totalValue = 0;

    amount.innerText = "0.00";
    total.innerText = "0.00";

    people.classList.remove("people-alert");
    error.classList.remove("alert");

    custom.value = "";

    removeActived();

}



//Calculate
function calculate() {
    amountValue = ((billValue * tipValue /100) / peopleValue);
    amount.innerText = amountValue.toFixed(2);

    totalValue = ((billValue * tipValue / 100) + billValue) / peopleValue;
    total.innerText = totalValue.toFixed(2);

    if (peopleValue == 0) {
        amount.innerText = (billValue * tipValue /100).toFixed(2);
        total.innerText = ((billValue * tipValue / 100) + billValue).toFixed(2);
    }
}
//------------------ GET ID ------------------------

function $(id) {
    return document.getElementById(id);
}