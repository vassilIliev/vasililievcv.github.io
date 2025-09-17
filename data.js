// CV Data Storage - Vasil Iliev's Professional Information
const cvData = {
    personal: {
        name: "Vasil Iliev",
        title: "Full Stack Software Engineer",
        email: "vasil.iliev.97@gmail.com",
        phone: "+359894380148",
        location: "Bulgaria",
        summary: "Full Stack Software Engineer specializing in AI-powered applications and investment intelligence platforms. Currently developing MAIA, Mubadala's proprietary AI-enabled platform that transforms investment workflows and strategic decision-making processes. My expertise spans front-end and back-end web development, with a growing focus on AI/ML integration and data analytics. I excel at building scalable, high-quality applications that provide exceptional user experiences while incorporating cutting-edge AI technologies. Passionate about designing robust databases and implementing efficient programming patterns, I continually develop my skills in both traditional software engineering and emerging AI technologies. Over the past four years, I have successfully contributed to numerous high-impact projects, adapting quickly to new environments and demonstrating efficiency from the start. My strong interpersonal skills and collaborative mindset consistently enable me to integrate smoothly into teams, ensuring projects are delivered on time and to the highest standards.",
        profileImage: "1.jpg" // Your professional profile image
    },
    
    experience: [
        {
            id: 1,
            company: "Mubadala",
            position: "Software Engineer",
            startDate: "2024",
            endDate: "Present",
            description: "Working on MAIA (Mubadala AI & Analytics), Mubadala's proprietary AI-enabled platform designed to transform investment intelligence and corporate workflows. Seamlessly integrating AI into both strategic investment processes and everyday operations, MAIA aims to accelerate decision-making, enhance precision, and boost operational efficiency. Contributing to a long-term vision of becoming a voting member on the Investment Committee, representing a major leap toward data-driven, AI-powered investment strategies and organizational innovation."
        },
        {
            id: 2,
            company: "IAV GmbH",
            position: "Software Engineer",
            startDate: "2023",
            endDate: "2024",
            description: "Developed Wellness Infotainment System for VW ID cars, integrating advanced vehicle features including climate system, electromagnetic panoramic roof, ambient lighting, seat massage, and smart lights. Created customized programs combining these features for immersive in-car experiences. Traveled frequently to factories for direct in-car development and testing."
        },
        {
            id: 3,
            company: '"Saint Sofia" Private School',
            position: "Software Engineer & Project Lead",
            startDate: "2023",
            endDate: "2023",
            description: "Led full-stack development of school management system for creating and managing exams, tests, and assignments. Took ownership as project representative, communicating directly with clients. Implemented innovative features including complex data relationships and AI functionality integration. Enhanced existing live application with new capabilities."
        },
        {
            id: 4,
            company: "Celonis",
            position: "Software Engineer Consultant",
            startDate: "2023",
            endDate: "2023",
            description: "Refactored legacy fintech application codebase from outdated imperative style to modern ES6 standards. Mentored fellow developers on best programming practices and modern technologies. Focused on creating clean, efficient, and scalable code for future development while maintaining existing functionality."
        },
        {
            id: 5,
            company: "IAV GmbH",
            position: "Software Engineer",
            startDate: "2022",
            endDate: "2023",
            description: "Developed WeCharge infotainment system for Volkswagen Group (VW, SEAT, Škoda). Built real-time navigation tool for electric vehicle charging stations with availability status and pricing information. Implemented features for efficient journey planning and enhanced electric vehicle experience."
        },
        {
            id: 6,
            company: "Telerik",
            position: "Software Engineer",
            startDate: "2022",
            endDate: "2022",
            description: "Designed and implemented Impulse communication platform for multi-team collaboration. Developed centralized messaging, task organization, and project management tools. Implemented authentication protocols, rich UI/UX design, and real-time features including group chats, file sharing, and notifications."
        }
    ],
    
    education: [
        {
            id: 1,
            institution: "Telerik Academy",
            degree: "Computer Software Engineering",
            field: "Software Development",
            startDate: "",
            endDate: "",
            description: "Intensive software development program focusing on modern web technologies and best practices"
        },
        {
            id: 2,
            institution: "Cisco",
            degree: "CCNA Introduction to Networking",
            field: "Network Engineering",
            startDate: "",
            endDate: "",
            description: "Professional networking certification covering network fundamentals and protocols"
        },
        {
            id: 3,
            institution: "Bulgarian Ministry of Education",
            degree: "Software Engineer Professional Certificate",
            field: "Software Engineering",
            startDate: "",
            endDate: "",
            description: "Official professional certification in software engineering"
        },
        {
            id: 4,
            institution: "NATFA 'Krastyo Sarafov'",
            degree: "Bachelor's Degree",
            field: "",
            startDate: "",
            endDate: "",
            description: "Bachelor's degree from National Academy for Theatre and Film Arts"
        },
        {
            id: 5,
            institution: "'Friedrich Schiller' German Language School",
            degree: "High School Diploma",
            field: "German Language",
            startDate: "",
            endDate: "",
            description: "Ruse, Bulgaria - German language specialized education"
        }
    ],
    
    skills: {
        "Primary Programming Languages": [
            "TypeScript", "JavaScript"
        ],
        "Secondary Programming Languages": [
            "Java", "Python"
        ],
        "Frontend Technologies": [
            "React", "Redux", "Redux Saga", "Angular", "RxJS", "NgRx", "HTML5", "CSS3", "SCSS", "Tailwind", "MUI", "Bootstrap"
        ],
        "Backend Technologies": [
            "Node.js", "Express.js"
        ],
        "Databases": [
            "MongoDB", "SQL", "MySQL", "Firebase"
        ],
        "Development Tools": [
            "Git", "GitLab", "GitHub", "Bitbucket", "Docker"
        ],
        "Project Management": [
            "Jira", "Azure", "Agile", "Scrum", "Kanban", "Waterfall"
        ],
        "AI & Machine Learning": [
            "AI/ML Platforms", "Data Analytics", "Investment Intelligence", "Python ML Libraries"
        ],
        "Other Technologies": [
            "JSON", "XML", "Design Patterns", "Clean Architecture", "Clean Code", "OOP", "Functional Programming"
        ]
    },
    
    projects: [
        {
            id: 1,
            name: "MAIA (Mubadala AI & Analytics)",
            description: "Proprietary AI-enabled platform designed to transform investment intelligence and corporate workflows. Seamlessly integrating AI into strategic investment processes and everyday operations to accelerate decision-making, enhance precision, and boost operational efficiency. Long-term vision of becoming a voting member on the Investment Committee.",
            technologies: ["AI/ML", "Python", "TypeScript", "React", "Node.js", "Data Analytics", "Investment Intelligence", "Cloud Computing"],
            githubUrl: null,
            liveUrl: null,
            image: "mubadala.png"
        },
        {
            id: 2,
            name: "Wellness Infotainment System",
            description: "In-car infotainment web application for VW ID cars integrating advanced vehicle features including climate control, panoramic roof, ambient lighting, seat massage, and smart lights. Created customized programs for immersive driving experiences.",
            technologies: ["JavaScript", "TypeScript", "React", "Redux", "Node.js", "VW Libraries", "Git", "GitLab"],
            githubUrl: null,
            liveUrl: null,
            image: "volkswagen.jpg"
        },
        {
            id: 3,
            name: "Saint Sofia School Management System",
            description: "Full-stack school management application for creating and managing exams, tests, and assignments. Implemented complex data relationships and AI functionality integration for enhanced educational tools.",
            technologies: ["JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "Mongoose", "MUI", "Docker"],
            githubUrl: null,
            liveUrl: null,
            image: "saintSofia.png"
        },
        {
            id: 4,
            name: "WeCharge Electric Vehicle System",
            description: "Infotainment system for Volkswagen Group electric vehicles providing real-time charging station information, availability status, and pricing. Built-in navigation for efficient journey planning.",
            technologies: ["React", "Node.js", "Redux", "Leaflet", "VW Libraries", "Git", "Bitbucket"],
            githubUrl: null,
            liveUrl: null,
            image: "volkswagen.jpg"
        },
        {
            id: 5,
            name: "Impulse Communication Platform",
            description: "Multi-team collaboration platform with centralized messaging, task organization, and project management. Features include group chats, file sharing, real-time notifications, and authentication protocols.",
            technologies: ["React", "TypeScript", "Firebase", "MUI", "Git", "GitHub"],
            githubUrl: null,
            liveUrl: null,
            image: "telerik.png"
        },
        {
            id: 6,
            name: "Celonis Bank Application",
            description: "Fintech application refactoring project. Modernized legacy codebase from imperative style to ES6 standards, implementing clean architecture and modern programming practices.",
            technologies: ["JavaScript", "TypeScript", "React", "Redux", "Redux Saga", "MySQL", "Git", "Bitbucket"],
            githubUrl: null,
            liveUrl: null,
            image: "celonis.png"
        }
    ],
    
    social: {
        linkedin: "https://linkedin.com/in/vasil-iliev",
        github: "https://github.com/vasil-iliev",
        twitter: null,
        email: "vasil.iliev.97@gmail.com"
    },
    
    // Additional sections
    certifications: [
        {
            name: "CCNA Introduction to Networking",
            issuer: "Cisco",
            date: "",
            url: null
        },
        {
            name: "Software Engineer Professional Certificate",
            issuer: "Bulgarian Ministry of Education",
            date: "",
            url: null
        },
        {
            name: "Computer Software Engineering",
            issuer: "Telerik Academy",
            date: "",
            url: null
        }
    ],
    
    languages: [
        {
            language: "Bulgarian",
            level: "Native"
        },
        {
            language: "English",
            level: "Fluent"
        },
        {
            language: "German",
            level: "Basic"
        }
    ]
};

// Configuration for the CV website
const config = {
    theme: {
        default: 'light', // 'light' or 'dark'
        allowToggle: true
    },
    animations: {
        enabled: true,
        duration: 600 // milliseconds
    },
    contact: {
        showEmail: true,
        showPhone: true,
        showLocation: true
    },
    sections: {
        about: true,
        experience: true,
        education: true,
        skills: true,
        projects: true,
        certifications: true, // Show certifications section
        languages: true // Show languages section
    }
};

// Export data for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cvData, config };
}
