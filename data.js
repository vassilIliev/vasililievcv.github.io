// CV Data Storage - Vasil Iliev's Professional Information
const cvData = {
    personal: {
        name: "Vasil Iliev",
        title: "Full Stack Software Engineer",
        email: "vasil.iliev.97@gmail.com",
        phone: "+359894380148",
        location: "Bulgaria",
        summary: "Full Stack Web Developer with expertise in both front-end and back-end development, delivering scalable, high-quality web applications with exceptional user experiences. Skilled in combining creative UI design with precise backend logic to build seamless, maintainable solutions. Passionate about clean architectures and robust design patterns, ensuring performance, scalability, and long-term reliability. Over four years of experience contributing to diverse projects, quickly adapting to new environments, and integrating effectively into teams to deliver results on time and to the highest standards. Committed to continuous growth, collaboration, and technical excellence.",
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
            "React", "Redux", "Redux Saga", "Angular", "RxJS", "NgRx", 
            "HTML5", "CSS3", "SCSS", "Tailwind", "MUI", "Bootstrap", "Fluent UI"
        ],
        "Backend & APIs": [
            "Node.js", "Express.js", "RESTful API", "gRPC"
        ],
        "Databases": [
            "MongoDB", "MySQL", "SQL", "Firebase", "Snowflake"
        ],
        "ORM/ODM": [
            "Mongoose"
        ],
        "Development & DevOps Tools": [
            "Git", "GitLab", "GitHub", "Bitbucket", "Docker", "Azure DevOps"
        ],
        "Project Management & Methodologies": [
            "Jira", "Agile", "Scrum", "Kanban", "Waterfall"
        ],
        "Software Principles & Practices": [
            "Design Patterns","Data structures & algorithms", "Clean Architecture", "Clean Code", "OOP", "Functional Programming"
        ],
    },
    
    projects: [
        {
            id: 1,
            name: "MAIA (Mubadala AI & Analytics)",
            description: "Proprietary AI-enabled platform designed to transform investment intelligence and corporate workflows. Seamlessly integrating AI into strategic investment processes and everyday operations to accelerate decision-making, enhance precision, and boost operational efficiency. Long-term vision of becoming a voting member on the Investment Committee.",
            technologies: ["TypeScript", "React", "Jotai", ".NET", "Tailwind","Fluent UI", "Azure DevOps"],
            githubUrl: null,
            liveUrl: null,
            image: "mubadala.png"
        },
        {
            id: 2,
            name: "Wellness Infotainment System",
            description: "In-car infotainment web application for VW ID cars integrating advanced vehicle features including climate control, panoramic roof, ambient lighting, seat massage, and smart lights. Created customized programs for immersive driving experiences.",
            technologies: ["Angular", "RxJS", "NgRx", "Node.js", "gRPC", "VW Internal Libraries", "Git", "Bitbucket"],
            githubUrl: null,
            liveUrl: null,
            image: "volkswagen.jpg"
        },
        {
            id: 3,
            name: "Saint Sofia School Management System",
            description: "Full-stack school management application for creating and managing exams, tests, and assignments. Implemented complex data relationships and AI functionality integration for enhanced educational tools.",
            technologies: ["JavaScript", "TypeScript", "React", "Redux", "Redux Saga", "Node.js", "Express", "MongoDB", "Mongoose", "MUI", "Docker"],
            githubUrl: null,
            liveUrl: null,
            image: "saintSofia.png"
        },
        {
            id: 4,
            name: "WeCharge Electric Vehicle System",
            description: "Infotainment system for Volkswagen Group electric vehicles providing real-time charging station information, availability status, and pricing. Built-in navigation for efficient journey planning.",
            technologies: ["Angular", "RxJS", "NgRx", "Node.js", "gRPC", "Leaflet", "VW Internal Libraries", "Git", "Bitbucket"],
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
        linkedin: "https://www.linkedin.com/in/vassil-iliev-41935b239/",
        github: null,
        twitter: null,
        email: "vassil.iliev.97@gmail.com"
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
