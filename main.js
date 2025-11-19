// Translations
const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_studyhub: "StudyHub",
    nav_contact: "Contact",
    hero_greeting: "Hi, my name is",
    hero_subtitle: "Data Scientist & AI Student.",
    hero_description: "I'm a 4th-year Engineering Student at <strong>Efrei Paris</strong>, specializing in Data Science & Artificial Intelligence. I turn data into innovation.",
    hero_cta: "Check out my work",
    hero_contact: "Contact Me",
    about_title: "About Me",
    about_p1: "Hello! I'm Doryan, a passionate student-engineer at Efrei Paris. My journey combines a solid academic foundation in modeling, data analysis, and machine learning with concrete projects in AI and Data Science.",
    about_p2: "I thrive in collaborative environments and have honed my project management and communication skills through strong associative engagement. I love solving complex problems and building tools that have a real impact.",
    about_tech: "Here are a few technologies I've been working with recently:",
    projects_title: "Some Things I've Built",
    project_tgv_desc: "Interactive web tool to analyze SNCF TGV performance using open data. Features temporal analysis, dynamic filtering, and root cause identification of delays.",
    project_trashmap_desc: "Web tool for mapping and proactive detection of overflowing bins. Uses image analysis (CNN) to alert field teams before waste accumulates.",
    project_airline_desc: "Machine Learning project anticipating airline customer satisfaction from 100k+ reviews. KNN model achieved 92% accuracy.",
    project_anssi_desc: "Automated analysis platform for ANSSI vulnerabilities. Extracts CVEs, enriches data via APIs (MITRE & EPSS), and produces consolidated datasets.",
    contact_title: "Get In Touch",
    contact_text: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!",
    contact_cta: "Say Hello"
  },
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_projects: "Projets",
    nav_studyhub: "StudyHub",
    nav_contact: "Contact",
    hero_greeting: "Bonjour, je m'appelle",
    hero_subtitle: "Data Scientist & Étudiant en IA.",
    hero_description: "Je suis étudiant-ingénieur en 4ème année à <strong>Efrei Paris</strong>, spécialisé en Data Science & Intelligence Artificielle. Je transforme les données en innovation.",
    hero_cta: "Voir mes travaux",
    hero_contact: "Me contacter",
    about_title: "À propos de moi",
    about_p1: "Bonjour ! Je suis Doryan, un étudiant-ingénieur passionné à Efrei Paris. Mon parcours allie une solide formation académique en modélisation, analyse de données et apprentissage automatique avec des projets concrets en IA et Data Science.",
    about_p2: "Je m'épanouis dans des environnements collaboratifs et j'ai affiné mes compétences en gestion de projet et en communication grâce à un fort engagement associatif. J'aime résoudre des problèmes complexes et créer des outils qui ont un impact réel.",
    about_tech: "Voici quelques technologies avec lesquelles j'ai travaillé récemment :",
    projects_title: "Quelques réalisations",
    project_tgv_desc: "Outil web interactif pour analyser la performance des TGV SNCF à partir de données ouvertes. Analyse temporelle, filtrage dynamique et identification des causes de retards.",
    project_trashmap_desc: "Outil web de cartographie et de détection proactive des poubelles débordantes. Utilise l'analyse d'images (CNN) pour alerter les équipes de terrain avant accumulation.",
    project_airline_desc: "Projet de Machine Learning anticipant la satisfaction des clients aériens à partir de plus de 100k avis. Le modèle KNN a atteint 92% de précision.",
    project_anssi_desc: "Plateforme d'analyse automatisée des vulnérabilités ANSSI. Extrait les CVE, enrichit les données via API (MITRE & EPSS) et produit des jeux de données consolidés.",
    contact_title: "Me contacter",
    contact_text: "Je suis actuellement à la recherche de nouvelles opportunités. Que vous ayez une question ou juste envie de dire bonjour, ma boîte de réception est toujours ouverte !",
    contact_cta: "Dire Bonjour"
  }
};

let currentLang = 'en';

function updateContent(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.textContent = lang === 'en' ? 'FR' : 'EN';
  }
}

const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    updateContent(currentLang);
  });
}

// Scroll Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.section, .project-card, .about-content');
hiddenElements.forEach((el) => {
  el.classList.add('hidden');
  observer.observe(el);
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if (navLinks.style.display === 'flex') {
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '80px';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = 'rgba(2, 12, 27, 0.95)';
      navLinks.style.padding = '2rem';
      navLinks.style.textAlign = 'center';
    } else {
      navLinks.style.display = ''; // Reset to css default
    }
  });
}

// Smooth Scroll for Anchor Links (handling fixed header)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Close mobile menu if open
      if (window.innerWidth <= 768 && navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      }
    }
  });
});
