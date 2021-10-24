var arr = document.querySelectorAll("#comingsoon .slick-slide");
console.log(arr);
arr.forEach(function(item){
    console.log(item);
    item.addEventListener("click", function(){
        document.querySelector(".slideOne").style.opacity = "0";
        document.querySelector(".slideOne").style.height = "0";

        document.querySelector(".slideTwo").style.opacity = "0";
        document.querySelector(".slideTwo").style.height = "0";

        document.querySelector(".slideThree").style.opacity = "0";
        document.querySelector(".slideThree").style.height = "0";

       if (item.getAttribute("data-slide") == "slideOne")  {
        document.querySelector(".slideOne").style.opacity = "1";
        document.querySelector(".slideOne").style.height = "auto"; 

       } else if (item.getAttribute("data-slide") == "slideTwo") {
        document.querySelector(".slideTwo").style.opacity = "1";
        document.querySelector(".slideTwo").style.height = "auto"; 
        
       } else if (item.getAttribute("data-slide") == "slideThree") {
        document.querySelector(".slideThree").style.opacity = "1";
        document.querySelector(".slideThree").style.height = "auto";   

       }
    });
});
