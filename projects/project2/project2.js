document.addEventListener("DOMContentLoaded", () => {

    // BOTONES TOGGLE (+)
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

    // 🔹 BOTONES DE IDIOMA
    const langButtons = document.querySelectorAll(".lang-switch button");

    langButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.lang;
            switchLanguage(lang);
        });
    });

    // 🔹 idioma por defecto
    switchLanguage("en");

});

function switchLanguage(lang) {

    // ocultar todos
    document.querySelectorAll(".text-en, .text-fr, .text-es").forEach(el => {
        el.style.display = "block";
    });

    // mostrar idioma activo
    document.querySelectorAll(".text-" + lang).forEach(el => {
        el.style.display = "inline";
    });
}
