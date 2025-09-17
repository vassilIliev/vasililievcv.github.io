// Main JavaScript for CV Website
class CVWebsite {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || config.theme.default;
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        this.setupEventListeners();
        this.populateData();
        this.setupAnimations();
        this.setupNavigation();
        this.setupLocalStorage();
    }

    // Theme Management
    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        const themeToggle = document.getElementById('themeToggle');
        const icon = themeToggle.querySelector('i');
        
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    // Event Listeners
    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Download CV
        const downloadBtn = document.getElementById('downloadCV');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.downloadCV();
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Window scroll events
        window.addEventListener('scroll', () => {
            this.updateActiveNavLink();
            this.animateOnScroll();
        });

        // Resize events
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    // Data Population
    populateData() {
        this.populatePersonalInfo();
        this.populateProjects();
        this.populateSkills();
        this.populateEducation();
        this.populateLanguages();
        this.populateCertifications();
        this.populateContact();
        this.populateSocialLinks();
    }

    populatePersonalInfo() {
        const { personal } = cvData;
        
        // Hero section
        this.setTextContent('heroName', personal.name);
        this.setTextContent('heroTitle', personal.title);
        this.setTextContent('heroDescription', personal.summary);
        
        // Profile image
        if (personal.profileImage) {
            const imagePlaceholder = document.querySelector('.image-placeholder');
            if (imagePlaceholder) {
                imagePlaceholder.innerHTML = `<img src="${personal.profileImage}" alt="${personal.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
            }
        }
    }


    populateEducation() {
        const educationGrid = document.getElementById('educationGrid');
        if (!educationGrid || !cvData.education.length) return;

        educationGrid.innerHTML = cvData.education.map((edu, index) => `
            <div class="education-card fade-in" style="animation-delay: ${index * 0.1}s">
                <h3>${edu.degree}</h3>
                <h4>${edu.institution}</h4>
                <div class="education-date">${edu.startDate} - ${edu.endDate}</div>
                ${edu.field ? `<p>${edu.field}</p>` : ''}
                ${edu.description ? `<p>${edu.description}</p>` : ''}
            </div>
        `).join('');
    }

    populateSkills() {
        const skillsGrid = document.getElementById('skillsGrid');
        if (!skillsGrid) return;

        skillsGrid.innerHTML = Object.entries(cvData.skills).map(([category, skills], index) => `
            <div class="skill-category fade-in" style="animation-delay: ${index * 0.1}s">
                <h3>${category}</h3>
                <div class="skill-list">
                    ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    populateProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid || !cvData.projects.length) return;

        projectsGrid.innerHTML = cvData.projects.map((project, index) => {
            const imageStyle = project.image === 'mubadala.png' 
                ? 'width: 100%; height: 100%; object-fit: contain; background: white; transform: scale(1.4); object-position: center;'
                : 'width: 100%; height: 100%; object-fit: contain; background: white;';
            
            return `
            <div class="project-card fade-in" style="animation-delay: ${index * 0.1}s">
                <div class="project-image">
                    ${project.image ? `<img src="${project.image}" alt="${project.name}" style="${imageStyle}">` : '<i class="fas fa-code"></i>'}
                </div>
                <div class="project-content">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.githubUrl ? `<a href="${project.githubUrl}" class="project-link" target="_blank" rel="noopener"><i class="fab fa-github"></i> GitHub</a>` : ''}
                        ${project.liveUrl ? `<a href="${project.liveUrl}" class="project-link" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                    </div>
                </div>
            </div>
            `;
        }).join('');
    }

    populateLanguages() {
        const languagesGrid = document.getElementById('languagesGrid');
        if (!languagesGrid || !cvData.languages.length || !config.sections.languages) return;

        languagesGrid.innerHTML = cvData.languages.map((lang, index) => `
            <div class="language-card fade-in" style="animation-delay: ${index * 0.1}s">
                <h3>${lang.language}</h3>
                <div class="language-level">${lang.level}</div>
            </div>
        `).join('');
    }

    populateCertifications() {
        const certificationsGrid = document.getElementById('certificationsGrid');
        if (!certificationsGrid || !cvData.certifications.length || !config.sections.certifications) return;

        certificationsGrid.innerHTML = cvData.certifications.map((cert, index) => `
            <div class="certification-card fade-in" style="animation-delay: ${index * 0.1}s">
                <h3>${cert.name}</h3>
                <h4>${cert.issuer}</h4>
                ${cert.date ? `<div class="certification-date">${cert.date}</div>` : ''}
                ${cert.url ? `<a href="${cert.url}" target="_blank" rel="noopener" class="project-link">
                    <i class="fas fa-external-link-alt"></i> View Certificate
                </a>` : ''}
            </div>
        `).join('');
    }

    populateContact() {
        const { personal } = cvData;
        this.setTextContent('contactEmail', personal.email);
        this.setTextContent('contactPhone', personal.phone);
        this.setTextContent('contactLocation', personal.location);
    }

    populateSocialLinks() {
        const socialLinks = document.getElementById('socialLinks');
        if (!socialLinks) return;

        const socialIconMap = {
            linkedin: 'fab fa-linkedin',
            github: 'fab fa-github',
            twitter: 'fab fa-twitter',
            email: 'fas fa-envelope'
        };

        socialLinks.innerHTML = Object.entries(cvData.social)
            .filter(([key, url]) => url)
            .map(([platform, url]) => {
                const href = platform === 'email' ? `mailto:${url}` : url;
                return `
                    <a href="${href}" class="social-link" target="_blank" rel="noopener" title="${platform}">
                        <i class="${socialIconMap[platform] || 'fas fa-link'}"></i>
                    </a>
                `;
            }).join('');
    }

    // Navigation
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Animations
    setupAnimations() {
        if (!config.animations.enabled) return;

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all animatable elements
        document.querySelectorAll('.skill-category, .project-card, .education-card, .language-card, .certification-card').forEach(el => {
            observer.observe(el);
        });
    }

    animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('fade-in');
            }
        });
    }

    // Local Storage Management
    setupLocalStorage() {
        // Save user preferences
        this.saveUserPreferences();
        
        // Load user customizations if any
        this.loadUserCustomizations();
    }

    saveUserPreferences() {
        const preferences = {
            theme: this.currentTheme,
            timestamp: Date.now()
        };
        localStorage.setItem('cvPreferences', JSON.stringify(preferences));
    }

    loadUserCustomizations() {
        const preferences = localStorage.getItem('cvPreferences');
        if (preferences) {
            try {
                const parsed = JSON.parse(preferences);
                if (parsed.theme) {
                    this.setTheme(parsed.theme);
                }
            } catch (e) {
                console.log('Error loading preferences:', e);
            }
        }
    }

    // CV Download
    downloadCV() {
        // Create a print-friendly version
        window.print();
    }

    // Utility Methods
    setTextContent(elementId, content) {
        const element = document.getElementById(elementId);
        if (element && content) {
            element.textContent = content;
        }
    }

    setHTMLContent(elementId, content) {
        const element = document.getElementById(elementId);
        if (element && content) {
            element.innerHTML = content;
        }
    }

    handleResize() {
        // Handle any resize-specific logic
        this.updateActiveNavLink();
    }

    // Public API methods for dynamic updates
    updatePersonalInfo(newInfo) {
        Object.assign(cvData.personal, newInfo);
        this.populatePersonalInfo();
        this.saveDataToLocalStorage();
    }

    addExperience(experience) {
        cvData.experience.unshift(experience);
        this.populateExperience();
        this.saveDataToLocalStorage();
    }

    addProject(project) {
        cvData.projects.unshift(project);
        this.populateProjects();
        this.saveDataToLocalStorage();
    }

    saveDataToLocalStorage() {
        localStorage.setItem('cvData', JSON.stringify(cvData));
    }

    loadDataFromLocalStorage() {
        const savedData = localStorage.getItem('cvData');
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                Object.assign(cvData, parsed);
                this.populateData();
            } catch (e) {
                console.log('Error loading CV data:', e);
            }
        }
    }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.cvWebsite = new CVWebsite();
});

// Service Worker Registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(registrationError => console.log('SW registration failed'));
    });
}

// Export for testing or external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CVWebsite;
}
