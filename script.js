document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navbar Links
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Auto-close Navbar on Link Click (Mobile View)
    const navItems = document.querySelectorAll(".nav-item");
    const navBar = document.querySelector(".navbar-collapse");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            if (navBar.classList.contains("show")) {
                new bootstrap.Collapse(navBar).toggle();
            }
        });
    });

    // Auto-play Bootstrap Carousel
    const myCarousel = new bootstrap.Carousel("#cakeCarousel", {
        interval: 3000,
        pause: "hover"
    });

    // Highlight Active Nav Link on Scroll
    window.addEventListener("scroll", () => {
        let current = "";
        document.querySelectorAll("section, main").forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 50) {
                current = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});
// Get the button
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block"; // Show the button
    } else {
        mybutton.style.display = "none"; // Hide the button
    }
};

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
