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
            themeToggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            icon.className = 'fas fa-moon';
            themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    // Event Listeners
    setupEventListeners() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }


        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        window.addEventListener('scroll', () => {
            this.updateActiveNavLink();
        });
    }

    // Data Population
    populateData() {
        this.populatePersonalInfo();
        this.populateExperience();
        this.populateSkills();
        this.populateStrengths();
        this.populateSideProjects();
        this.setupExperienceTabs();
        this.populateEducation();
        this.populateContact();
    }

    populatePersonalInfo() {
        const { personal } = cvData;
        this.setTextContent('heroName', personal.name);
        this.setTextContent('heroTitle', personal.title);
        this.setTextContent('heroDescription', personal.summary);

        if (personal.profileImage) {
            const imagePlaceholder = document.querySelector('.image-placeholder');
            if (imagePlaceholder) {
                const img = document.createElement('img');
                img.src = personal.profileImage;
                img.alt = personal.name;
                imagePlaceholder.innerHTML = '';
                imagePlaceholder.appendChild(img);
            }
        }
    }

    renderTechStack(technologies) {
        if (!technologies) return '';
        const chip = t => `<span class="tech-tag">${t}</span>`;

        const list = Array.isArray(technologies)
            ? technologies
            : [
                ...(technologies.frontend || []),
                ...(technologies.backend || []),
                ...(technologies.infra || [])
            ];

        if (!list.length) return '';

        return `<div class="tech-stack"><span class="tech-heading">Main technologies:</span><div class="tech-chips">${list.map(chip).join('')}</div></div>`;
    }

    populateExperience() {
        const timeline = document.getElementById('experienceTimeline');
        if (!timeline || !cvData.experience.length || !config.sections.experience) return;

        timeline.innerHTML = cvData.experience.map((exp, index) => {
            const typeLabel = exp.type === 'contract'
                ? '<span class="experience-type">Contract</span>'
                : '';

            const highlights = exp.highlights
                ? `<ul class="experience-highlights">${exp.highlights.map(h => `<li>${h}</li>`).join('')}</ul>`
                : '';

            const techTags = this.renderTechStack(exp.technologies);

            const detailsSection = exp.details
                ? `<div class="experience-details" id="details-${exp.id}">
                       <p>${exp.details}</p>
                   </div>
                   <button class="experience-toggle" type="button" aria-expanded="false" aria-controls="details-${exp.id}" data-target="details-${exp.id}">
                       <span class="toggle-text">Read more</span>
                       <i class="fas fa-chevron-down" aria-hidden="true"></i>
                   </button>`
                : '';

            const logoHtml = exp.image
                ? `<div class="experience-logo${exp.imageStyle === 'contain-scaled' ? ' experience-logo--scaled' : ''}">
                       <img src="${exp.image}" alt="${exp.company} logo">
                   </div>`
                : '';

            const projectLabel = exp.projectName
                ? `<span class="experience-project">${exp.projectName}</span>`
                : '';

            return `
            <div class="experience-item fade-in" style="animation-delay: ${index * 0.1}s">
                <div class="experience-marker"></div>
                <div class="experience-content">
                    <div class="experience-header">
                        <div class="experience-header-left">
                            ${logoHtml}
                            <div>
                                <h3>${exp.position}</h3>
                                <h4>${exp.company} ${typeLabel}</h4>
                                ${projectLabel}
                            </div>
                        </div>
                        <div class="experience-dates">${exp.startDate} - ${exp.endDate}</div>
                    </div>
                    ${highlights}
                    ${techTags}
                    ${detailsSection}
                </div>
            </div>
            `;
        }).join('');

        // Setup toggle buttons
        timeline.querySelectorAll('.experience-toggle').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');
                const details = document.getElementById(targetId);
                const isExpanded = btn.getAttribute('aria-expanded') === 'true';

                btn.setAttribute('aria-expanded', !isExpanded);
                details.classList.toggle('expanded');
                btn.querySelector('.toggle-text').textContent = isExpanded ? 'Read more' : 'Show less';
            });
        });
    }

    populateSkills() {
        const skillsGrid = document.getElementById('skillsGrid');
        if (!skillsGrid || !config.sections.skills) return;

        skillsGrid.innerHTML = Object.entries(cvData.skills).map(([category, skills], index) => `
            <div class="skill-category fade-in" style="animation-delay: ${index * 0.1}s">
                <h3>${category}</h3>
                <div class="skill-list">
                    ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    populateStrengths() {
        const grid = document.getElementById('strengthsGrid');
        if (!grid || !cvData.strengths || !config.sections.strengths) return;

        grid.innerHTML = cvData.strengths.map((s, index) => `
            <div class="strength-card fade-in" style="animation-delay: ${index * 0.1}s">
                <div class="strength-icon"><i class="${s.icon}" aria-hidden="true"></i></div>
                <h3>${s.title}</h3>
                <p>${s.description}</p>
            </div>
        `).join('');
    }

    setupExperienceTabs() {
        const tabs = document.querySelectorAll('.experience-tab');
        const timeline = document.getElementById('experienceTimeline');
        const sideContainer = document.getElementById('sideProjectsContainer');
        if (!tabs.length || !timeline || !sideContainer) return;

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                if (tab.dataset.tab === 'career') {
                    timeline.style.display = '';
                    sideContainer.style.display = 'none';
                } else {
                    timeline.style.display = 'none';
                    sideContainer.style.display = '';
                }
            });
        });
    }

    populateSideProjects() {
        const grid = document.getElementById('sideProjectsContainer');
        if (!grid || !cvData.sideProjects || !config.sections.sideProjects) return;

        grid.innerHTML = '<div class="side-projects-grid">' + cvData.sideProjects.map((project, index) => {
            const statusClass = project.status === 'Released' ? 'status--released' : 'status--dev';
            const techTags = this.renderTechStack(project.technologies);
            const aiNote = project.aiApproach
                ? `<div class="side-project-ai"><i class="fas fa-robot" aria-hidden="true"></i> ${project.aiApproach}</div>`
                : '';
            const links = project.links && project.links.website
                ? `<div class="side-project-links"><a href="${project.links.website}" target="_blank" rel="noopener" class="side-project-link"><i class="fas fa-external-link-alt" aria-hidden="true"></i> Visit Website</a></div>`
                : '';

            return `
            <div class="side-project-card fade-in" style="animation-delay: ${index * 0.15}s">
                <div class="side-project-header">
                    <div class="side-project-icon"><i class="${project.icon}" aria-hidden="true"></i></div>
                    <div>
                        <h3>${project.name}</h3>
                        <div class="side-project-meta">
                            <span class="side-project-role">${project.role}</span>
                            <span class="side-project-status ${statusClass}">${project.status}</span>
                        </div>
                        <div class="side-project-date">Since ${project.startDate}</div>
                    </div>
                </div>
                <p class="side-project-description">${project.description}</p>
                ${aiNote}
                ${techTags}
                ${links}
            </div>
            `;
        }).join('') + '</div>';
    }

    populateEducation() {
        const educationGrid = document.getElementById('educationGrid');
        if (!educationGrid || !config.sections.education) return;

        educationGrid.innerHTML = cvData.education.map((edu, index) => `
            <div class="education-card fade-in" style="animation-delay: ${index * 0.1}s">
                <div class="education-icon"><i class="fas fa-graduation-cap" aria-hidden="true"></i></div>
                <h3>${edu.degree}</h3>
                <h4>${edu.institution}</h4>
                ${edu.field ? `<p class="education-field">${edu.field}</p>` : ''}
                ${edu.description ? `<p class="education-description">${edu.description}</p>` : ''}
            </div>
        `).join('');
    }


    populateContact() {
        const container = document.getElementById('contactIcons');
        if (!container) return;

        const { personal, social } = cvData;

        const items = [];

        if (social.linkedin) {
            items.push({
                icon: 'fab fa-linkedin',
                label: personal.name,
                value: social.linkedin,
                href: social.linkedin,
            });
        }

        if (personal.phone) {
            items.push({
                icon: 'fas fa-phone',
                label: personal.phone,
                value: personal.phone,
            });
        }

        if (personal.email) {
            items.push({
                icon: 'fas fa-envelope',
                label: personal.email,
                value: personal.email,
            });
        }

        container.innerHTML = items.map(item => `
            <div class="contact-row" data-value="${item.value}"${item.href ? ` data-href="${item.href}"` : ''}>
                <div class="contact-row-icon"><i class="${item.icon}" aria-hidden="true"></i></div>
                <span class="contact-row-label">${item.label}</span>
                <span class="contact-row-copied">Copied!</span>
            </div>
        `).join('');

        container.querySelectorAll('.contact-row').forEach(row => {
            row.addEventListener('click', () => {
                const href = row.dataset.href;
                const value = row.dataset.value;

                if (href) {
                    window.open(href, '_blank', 'noopener');
                }

                navigator.clipboard.writeText(value);
                const badge = row.querySelector('.contact-row-copied');
                badge.classList.add('show');
                setTimeout(() => badge.classList.remove('show'), 1500);
            });
        });
    }

    // Navigation
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
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

        document.querySelectorAll('.skill-category, .strength-card, .side-project-card, .education-card, .experience-item').forEach(el => {
            observer.observe(el);
        });
    }

    // Utility
    setTextContent(elementId, content) {
        const element = document.getElementById(elementId);
        if (element && content) {
            element.textContent = content;
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.cvWebsite = new CVWebsite();
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CVWebsite;
}
