const translations = {
    en: {
        title: "Jesús Gaitán - Freelance Data Scientist",
        about: "About me",
        skills: "Skills",
        projects: "Projects",
        journey: "Profesional Path",
        tagline: "Freelance data scientist, specialized in data visualization",
        github: "Check my GitHub",
        email: "Send me an email",
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
        aboutJourney: `It would be very naive of me to consider I'm at the peak of any of my skills, as I am still at the beginning 
        of my professional career. However, I am confident in my ability to effectively apply the skills I have acquired so far. 
        This section documents part of my journey, including the development of my initial projects, the courses 
        I am currently taking, and the new skills I am working to acquire.`,
        upcomingProjectsTitle: `Upcoming projects`,
        coursesTitle: `Courses`,
        skillProgressTitle: `New skills`,
        upcomingProjects: `I have already decided my first portfolio project, it's going to be centered around
        data visualization. So far I've determined the data I'm using (historic global temperature changes), the
        main tool will be dc.js and I'm halfway trough a design. Hopefully I'll be able to start a page for that
        and link it here before the end of August.`,
        courses: `I'm currently doing courses on:`,
        courses1: `Research Management with an emphasis on Science, Technology, and Innovation Programs and Projects, at Universidad del Valle (Colombia)`,
        courses2: `Django web framework, as part of Meta Back-End Developer Professional Certificate`,
        skillProgress: `I'm using roadmap.sh to learn about software design and architecture`,
        rightsReserved: `Licensed under CC BY-SA 4.0. You are free to share and adapt the content as long as 
        you give appropriate credit and distribute any derivative works under the same license.`
    },
    es: {
        title: "Jesús Gaitán - Científico de Datos Freelance",
        about: "Sobre mí",
        skills: "Habilidades",
        projects: "Proyectos",
        journey: "Camino profesional",
        tagline: "Científico de datos, especializado en visualización de datos",
        github: "Enlace a mi GitHub",
        email: "Envíame un email",
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
        aboutJourney: `Sería ingenuo de mi parte considerar que tengo un dominio completo de todas mis habilidades, aún 
        más considerando que estoy iniciando mi carrera profesional. Sin embargo, confío en mi capacidad para aplicar eficazmente 
        las habilidades que he adquirido hasta ahora. Esta sección documenta parte de mi trayectoria, incluyendo el desarrollo de mis primeros proyectos, 
        los cursos que estoy realizando y las nuevas habilidades que estoy en proceso de adquirir.`,
        upcomingProjectsTitle: `Proyectos futuros`,
        coursesTitle: `Cursos`,
        skillProgressTitle: `Nuevas habilidades`,
        upcomingProjects: `Ya decidí mi primer proyecto para el portafolio, va a estar centrado en visualización de datos. 
        Hasta el momento determiné los datos que voy a utilizar (cambios históricos en la temperatura global), 
        la herramienta principal será dc.js y he podido completar aproximadamente la mitad del diseño. Espero 
        poder comenzar una página para el proyecto y mostrar mis avances aquí antes de finales de agosto.`,
        courses: `Actualmente estoy haciendo cursos en:`,
        courses1: `Gestión de Investigación con Énfasis en Programas y Proyectos de Ciencia, Tecnología e Innovación, en la Universidad del Valle (Colombia)`,
        courses2: `Marco web Django, como parte del certificado profesional de Desarrollador Backend de Meta`,
        skillProgress: `Estoy usando roadmap.sh para aprender sobre desarrollo y arquitectura de software.`,
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