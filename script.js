const translations = {
    en: {
        title: "Jesús Gaitán - Freelance Data Scientist",
        about: "About me",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        tagline: "Freelance data scientist specialized in data visualization",
        aboutMe: `Data Scientist with a background in physics and mathematics. 
        Currently working on informetrics with a strong emphasis on data visualization, 
        I'm open to freelance opportunities in data science or programming. 
        My scientific training has equipped me with skills in data analysis, problem-solving, 
        and quantitative modeling, while my previous experience in the BPO industry sharpened my communication, 
        leadership, and training abilities. This combination enables me to tackle challenges from a holistic 
        perspective. I am fully bilingual in English and Spanish, which allows me to thrive in international 
        environments.`,
        skill1: "Development of custom and pre-made interactive data visualizations",
        skill2: "Data mining, processing, and analysis",
        skill3: "Programming languages: Python, JavaScript, HTML, CSS",
        project1Title: "Project 1",
        project1Desc: "Coming soon",
        project2Title: "Project 2",
        project2Desc: "Coming soon",
        viewProject: "View Project",
        nameLabel: "Name:",
        emailLabel: "Email:",
        messageLabel: "Message:",
        sendButton: "Send",
        rightsReserved: `Licensed under CC BY-SA 4.0. You are free to share and adapt the content as long as 
        you give appropriate credit and distribute any derivative works under the same license.`
    },
    es: {
        title: "Jesús Gaitán - Científico de Datos Freelance",
        about: "Sobre mí",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
        tagline: "Científico de datos freelance especializado en visualización de datos",
        aboutMe: `Científico de datos con formación en física y matemáticas. Actualmente trabajo en 
        informetría con énfasis en visualización de datos, y estoy abierto a trabajar en otros proyectos 
        relacionados a datos o programación como freelance. Mi formación científica me ha dotado de fuertes 
        capacidades en análisis de datos, resolución de problemas y modelado cuantitativo, mientras que mi 
        experiencia previa en la industria del BPO afinó mis habilidades de comunicación, liderazgo y 
        capacitación de personal, lo que me permite abordar proyectos desde una perspectiva holística.
        Soy bilingüe con un nivel avanzado de inglés, lo que me permite comunicarme eficazmente en entornos 
        internacionales.`,
        skill1: "Desarrollo de visualizaciones de datos interactivas, personalizadas o predefinidas",
        skill2: "Minado, procesamiento y análisis de datos",
        skill3: "Lenguajes de programación: Python, JavaScript, HTML, CSS",
        project1Title: "Proyecto 1",
        project1Desc: "Disponible próximamente",
        project2Title: "Proyecto 2",
        project2Desc: "Disponible próximamente",
        viewProject: "Ver Proyecto",
        nameLabel: "Nombre:",
        emailLabel: "Correo electrónico:",
        messageLabel: "Mensaje:",
        sendButton: "Enviar",
        rightsReserved: `Licenciado bajo CC BY-SA 4.0. Usted es libre de compartir y adaptar el contenido, 
        siempre que otorgue el crédito correspondiente y distribuya las obras derivadas bajo la misma licencia.`
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    updateContent();
    document.documentElement.lang = currentLang;
    document.title = translations[currentLang]['title']
}

function updateContent() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[currentLang][key];
    });
}

document.getElementById('langToggle').addEventListener('click', toggleLanguage);

// Initial content update
updateContent();