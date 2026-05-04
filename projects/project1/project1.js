document.addEventListener("DOMContentLoaded", () => {

    // BOTONES TOGGLE
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            const text = button.nextElementSibling;

            if (!text) return;

            if (text.style.display === "inline") {
                text.style.display = "none";
                button.textContent = "+";
            } else {
                text.style.display = "inline";
                button.textContent = "-";
            }

        });
    });

});
