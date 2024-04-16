function Showpswd() {
    const checkbox = document.querySelector("show>input");
    const pswd = document.querySelector("input[type=password]");
    checkbox.addEventListener("change", (e) => {
      pswd.type = checkbox.checked ? "text" : "password";
    });
}
Showpswd();


document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('.menu-links a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});







