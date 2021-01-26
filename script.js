
document.addEventListener("DOMContentLoaded", pageLoaded);

function pageLoaded() {
    const menuBurger = document.querySelector(".mobile__burger");
    const menuCloseBtn = document.querySelector(".menu__mobile-close");
    const menu = document.querySelector(".menu__mobile");
    const menuLinks = document.querySelectorAll(".menu__frame-link");


    menuBurger.addEventListener("click", openMenu);
    menuCloseBtn.addEventListener("click", closeMenu);

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            const section = document.getElementById("section-" + link.dataset.target);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    })

    function openMenu() {
        menu.classList.add("is-active");
    }

    function closeMenu() {
        menu.classList.remove("is-active");
    }
}


let acc = document.getElementsByClassName("accordion");
            let i;

    for (i = 0; i < acc.length; i++){
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
               let panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                }
                else
                {
                panel.style.display = "block";
                }
            });
};
