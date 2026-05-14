// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash) {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animation for project cards
const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

cards.forEach(card => observer.observe(card));


// LANGUAGE SYSTEM
const translations = {
    en: {
        "t-about": "About me",
        "t-cv": "CV",
        "t-contact": "Contact",
        "t-subtitle": "Geomatics Professional",
        "t-projects": "Projects",
        "t-p1": "Computer Vision for grapevine phenology monitoring",
        "t-p2": "Crime Monitoring and Prediction using R",
        "t-p3": "Flood monitoring with Satellite Imagery",
        "t-keywords": "• GIS •  Remote Sensing  • Spatial Analysis  • Monitoring Land"
    },
    fr: {
        "t-about": "À propos",
        "t-cv": "CV",
        "t-contact": "Contact",
        "t-subtitle": "Professionnelle en géomatique",
        "t-projects": "Projets",
        "t-p1": "Vision par ordinateur pour le suivi de la phénologie de la vigne",
        "t-p2": "Surveillance et prédiction de la criminalité avec R",
        "t-p3": "Suivi des inondations à l’aide d’images satellitaires",
        "t-keywords": "• SIG  • Télédétection  • Analyse spatiale  • Agriculture de précision"
    },
    es: {
        "t-about": "Sobre mí",
        "t-cv": "CV",
        "t-contact": "Contacto",
        "t-subtitle": "Profesional en geomática",
        "t-projects": "Proyectos",
        "t-p1": "Aplicación en análisis del crimen",
        "t-p2": "Monitoreo y predicción de la criminalidad utilizando R",
        "t-p3": "Visión por computadora para el monitoreo de la fenología de la vid",
        "t-keywords": "• SIG  • Teledetección  • Análisis espacial  • Agricultura de precisión"

    }
};


// FIXED VERSION — WORKS 100%
document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => {

        const lang = btn.dataset.lang;

        // Cambiar textos
        for (const key in translations[lang]) {
            const el = document.querySelector("." + key);
            if (el) el.textContent = translations[lang][key];
        }

        // Cambiar link del About Me según idioma
        const aboutLink = document.getElementById("about-link");
        if (aboutLink) {
            if (lang === "en") aboutLink.href = "about.html";
            if (lang === "fr") aboutLink.href = "about-fr.html";
            if (lang === "es") aboutLink.href = "about-es.html";
        }

        // Cambiar link del Contact según idioma
        const contactLink = document.getElementById("contact-link");
        if (contactLink) {
            if (lang === "en") contactLink.href = "contact.html";
            if (lang === "fr") contactLink.href = "contact-fr.html";
            if (lang === "es") contactLink.href = "contact-es.html";
        }

    });
});
