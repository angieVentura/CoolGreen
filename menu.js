
window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    var navbarBrand = navbar.querySelector(".navbar-brand");
    var navLinks = navbar.querySelectorAll(".navbar-nav .nav-link.active");

   
    if (window.scrollY > 50) {
      
        navbar.style.backgroundColor = "#898DED";
        navbar.style.color = "#fff";
        navbarBrand.style.color = "#fff"; 

        navLinks.forEach(function(link) {
            link.style.color = "#fff";
        });
    } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.color = "#898DED"; 
        navbarBrand.style.color = "#898DED"; 

        navLinks.forEach(function(link) {
            link.style.color = "#898DED";
        });
    }
});
