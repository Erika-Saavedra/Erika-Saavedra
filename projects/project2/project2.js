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
en: {
    "t-back": "← Back",
    "t-context": "Context",
    "t-context-text": "The topic of this project is based on the fact that crime is an issue...",

    "t-objectives": "Objectives",
    "t-objectives-text": "The objective of this project is to use geospatial data...",

    "t-tools": "Tools",
    "t-tools-text": "R, RStudio, geospatial data, crime datasets...",

    "t-tasks": "Tasks",
    "t-tasks-text": "Data processing, spatial analysis (KDE, LISA)...",

    "t-results": "Results",

    "t-applications": "Applications",
    "t-applications-text": "Urban planning, risk management..."
},

fr: {
    "t-back": "← Retour",
    "t-context": "Contexte",
    "t-context-text": "Le sujet de ce projet repose sur le fait que la criminalité...",

    "t-objectives": "Objectifs",
    "t-objectives-text": "L'objectif de ce projet est d'utiliser des données géospatiales...",

    "t-tools": "Outils",
    "t-tools-text": "R, RStudio, données géospatiales...",

    "t-tasks": "Tâches",
    "t-tasks-text": "Traitement des données, analyse spatiale...",

    "t-results": "Résultats",

    "t-applications": "Applications",
    "t-applications-text": "Urbanisme, gestion des risques..."
},

es: {
    "t-back": "← Volver",
    "t-context": "Contexto",
    "t-context-text": "El tema de este proyecto se basa en que la criminalidad...",

    "t-objectives": "Objetivos",
    "t-objectives-text": "El objetivo de este proyecto es usar datos geoespaciales...",

    "t-tools": "Herramientas",
    "t-tools-text": "R, RStudio, datos geoespaciales...",

    "t-tasks": "Tareas",
    "t-tasks-text": "Procesamiento de datos, análisis espacial...",

    "t-results": "Resultados",

    "t-applications": "Aplicaciones",
    "t-applications-text": "Urbanismo, gestión de riesgos..."
}
