    // Fija el navbar al scroll
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    
    var sticky = navbar.offsetTop;
    navbar.classList.add("sticky")

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }



