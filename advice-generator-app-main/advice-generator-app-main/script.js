// 1 Use Grid Layout
// 2 Learn How To Setup A New API Call On Each Click
// 3 

// Fetching Elements
var btn = document.querySelector(".btn");
var card = document.querySelector(".card");
var adviceLogo = document.querySelector(".adviceLogo");
var advice = document.getElementById("advice");
var number = document.getElementById("number");

var xhr = ""
var parsed = ""

let quote = "";



// Click Event Listener
btn.addEventListener("click",myRequest);


// Setting Up Event Listener Function
function myRequest(){

    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // Setting response object to a variable
            var responseObj = xhr.responseText;
            // Parsing Object
            parsed = JSON.parse(responseObj);
            // Saving Advice to variable
            quote = parsed.slip.advice;
            // Inserting textnode inside paragraph element
            advice.innerText = quote;
            // Inserting element into DOM tree
            adviceLogo.after(advice);


            // Adding Quote Number
            number.innerText = parsed.slip.id;
            //console.log(quote);

        }
    }
    
    
    xhr.open("GET","https://api.adviceslip.com/advice");
    xhr.send();
    



}




// Need to make it responsive