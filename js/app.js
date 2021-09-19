// counter increment and decrement start
var counterNumber = document.querySelector(".count_number");
var plusOne = document.querySelector(".fa-plus");
var minusOne = document.querySelector(".fa-minus");
var count = 1;
    //increment event start
function incrementOner() {
	count++;
	counterNumber.innerHTML = `${count}`;
	if (count < 10) {
		counterNumber.innerHTML = `0${count}`;
	}
}
plusOne.addEventListener("click", incrementOner);
    //increment event end
    // decrement event start 
function decrementOne() {
    if(count > 1){
        count--;
        counterNumber.innerHTML = `${count}`;
    }else{
        alert("Sorry!! You Cant Buy empty Product!! Select at least One!! Thank You!!")
    }
	if (count < 10) {
		counterNumber.innerHTML = `0${count}`;
	}
}
    // decrement event end
minusOne.addEventListener("click", decrementOne);
// counter increment and decrement end

// colourfull showes start
var colorLiOne = document.querySelector(".color_li_1")
var colorLiTwo = document.querySelector(".color_li_2")
var colorLiThree = document.querySelector(".color_li_3")
var product = document.querySelector(".product")    
    //colorOne event start 
function colorLiOnefunc(){
    product.src = "../img/red_shoe.png"
    colorLiOne.classList.add("active")
    colorLiTwo.classList.remove("active")
    colorLiThree.classList.remove("active")
}
colorLiOne.addEventListener("click", colorLiOnefunc)
//colorOne event end
    //colorTwo event start
function colorLiTwofunc(){
    product.src = "../img/blue_shoe.png"
    colorLiOne.classList.remove("active")
    colorLiTwo.classList.add("active")
    colorLiThree.classList.remove("active")
}
colorLiTwo.addEventListener("click", colorLiTwofunc)
    //colorTwo event end
    //colortHREE event start
function colorLiThreefunc(){
    product.src = "../img/green_shoe.png"
    colorLiOne.classList.remove("active")
    colorLiTwo.classList.remove("active")
    colorLiThree.classList.add("active")
}
colorLiThree.addEventListener("click", colorLiThreefunc)
    //colorThree event end
// colourfull showes end

// resseting everythinf
var resetting = document.querySelector(".reaet_button")
function resettingFnc(){
    count = 1;
    counterNumber.innerHTML = `0${count}`
    product.src = "../img/shoe.png"
    colorLiOne.classList.remove("active")
    colorLiTwo.classList.remove("active")
    colorLiThree.classList.remove("active")
}
resetting.addEventListener("click", resettingFnc)
