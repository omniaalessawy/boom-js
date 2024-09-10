window.addEventListener("scroll", function(){
    var navbar = document.querySelector(".navbar");
    var scrollValue = window.scrollY;

    if (scrollValue > 300) {
        navbar.classList.remove("bg-dark");
        navbar.classList.add("bg-danger");
    } else {
        navbar.classList.remove("bg-danger");
        navbar.classList.add("bg-dark");
    }
});

//  settimout
function myfunc(){
    alert("hello");
}




//  setInterval
var mouse = setInterval(myfun, 1000);
function myfun(){
    var d = new Date();
    document.querySelector("#demo").innerHTML = d.toLocaleTimeString();
}

function stopTimer() {
    clearInterval(mouse);
}
