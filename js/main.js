
var elForm = document.querySelector(".current");
var elInput = document.querySelector(".current__value");
var elSelect = document.querySelector(".current__money");
var elResult = document.querySelector(".current__result");


elForm.addEventListener("submit" , function(event){

    event.preventDefault();

    var elInputVal = elInput.value;
    var elSelectVal = elSelect.value;
    var elPrice = elInputVal * elSelectVal;

    elResult.textContent = (`${elPrice}`)

    if (elInputVal <= 0 ){
        elResult.textContent = ("Warning !!!")
    }

})


