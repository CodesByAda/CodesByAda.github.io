document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar")
    const navhead = document.querySelector(".navhead")

    window.addEventListener('scroll', function () {
        ;
        if (window.scrollY > 1) {
            navbar.classList.add("bg-white");
            navhead.classList.add("bg-gradient-to-r");
            navhead.classList.add("from-purple-500");
            navhead.classList.add("to-blue-500");
            navhead.classList.add("bg-clip-text");
            navhead.classList.add("text-transparent");

        } else {
            navbar.classList.remove("bg-white");
            navhead.classList.remove("bg-gradient-to-r");
            navhead.classList.remove("from-purple-500");
            navhead.classList.remove("to-blue-500");
            navhead.classList.remove("bg-clip-text");
            navhead.classList.remove("text-transparent");

        }
    });
})