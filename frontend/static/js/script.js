document.addEventListener("DOMContentLoaded", () => {
    // Automatically keep the copyright year current.
    const footer = document.querySelector("footer span");

    if (footer) {
        footer.textContent = `© ${new Date().getFullYear()} Shlok Vishwakarma`;
    }

    // Smoothly navigate to sections.
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = document.querySelector(link.getAttribute("href"));

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
