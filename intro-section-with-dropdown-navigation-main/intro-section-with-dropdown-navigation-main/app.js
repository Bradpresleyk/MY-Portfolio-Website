// Hover effects
// Arrows of dropdown items need to face up when expanded
// needs responsiveness

// Fetching Elements
var burgerMenu = $("#burgerMenu");
var sideBar = $(".sideBar");
var crossBtn = $("#closeCross");
var features = $("#featuresSlide");
var company = $("#companySlide");
var featuresDrop = $(".featuresDropDownSide");
var companyDrop = $(".companyDropDownSide");
var companyDownArrow = $("#companyDownArrow");
var featureNav = $("#featuresNav");
var featuresNavDropDown = $(".featuresDropDown");
var companyNav = $(".company");
var companyNavDropDown = $(".companyDropDown");



// Adding Functionality for NavBar features dropdown item list

var featuresStateCheck = "closed";

$(featureNav).click(function(){
    if(featuresStateCheck === "closed"){
        $(featuresNavDropDown).toggle().css({
            "display":"block",
        })

        featuresStateCheck = "open"
    }
    else if(featuresStateCheck === "open"){
        $(featuresNavDropDown).toggle().css({
            "display":"none"
        })
        
        featuresStateCheck = "closed"
    }
})

// Adding functionality for NavBar company dropdown list

var companyStateCheck = "closed";

$(companyNav).click(function(){
    if(companyStateCheck === "closed"){
        $(companyNavDropDown).toggle().css({
            "display":"block"
        })

        companyStateCheck = "open"
    }

    else if(companyStateCheck === "open"){
        $(companyNavDropDown).toggle().css({
            "display":"none"
        })

        companyStateCheck = "closed"
    }
})


// Adding click event for burger menu
$(burgerMenu).click(function(){
    $(sideBar).css({
        "width":"65%"
    })
})

// Adding click event for cross button
$(crossBtn).click(function(){
    $(sideBar).css({
        "width":"0"
    })
})

// setting intial state of features dropdown list
var featuresListState = "open";

// Adding toggle functionality to features dropdown list
$(features).click(function(){
    if(featuresListState === "closed"){
        $(featuresDrop).toggle().css({
            "display":"block"
        })
        
        featuresListState = "open";
        
} 
else if(featuresListState === "open"){
    $(featuresDrop).toggle().css({
        "display":"none"
    })
    featuresListState = "closed";
}
}
)

// setting intial state of company dropdown list
var companyListState = "closed";

// Adding toggle functionality to company dropdown list
$(company).click(function(){
    if(companyListState === "closed"){
        $(companyDrop).toggle().css({
            "display":"block"
        })

        companyListState = "open";

    }

    else if(companyListState === "open"){
        $(companyDrop).toggle().css({
            "display":"none"
        })
        companyListState = "closed";
    }
})