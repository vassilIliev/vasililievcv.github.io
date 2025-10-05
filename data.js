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
            role: "Software Engineer",
            company: "Mubadala",
            startDate: "2024",
            endDate: "Present",
            description: "Proprietary AI-enabled platform designed to transform investment intelligence and corporate workflows. Seamlessly integrating AI into strategic investment processes and everyday operations to accelerate decision-making, enhance precision, and boost operational efficiency. Long-term vision of becoming a voting member on the Investment Committee.",
            personalExperience: "This is the project I am currently working on, and I consider it the most significant one in my career so far. It is also my first project in which I work as a Senior Developer. We are developing a proprietary AI-enabled platform for the investment industry, using cutting-edge technologies within a large, highly skilled team to deliver a flawless experience for major investors — software with no margin for error. I quickly adapted to the environment and began contributing meaningfully, both technically and organizationally, often supporting my colleagues with technical challenges and administrative coordination. I also had the opportunity to work on-site with clients, ensuring smooth integration and direct feedback on system performance and usability.",
            technologies: ["TypeScript", "React", "Jotai", ".NET", "Tailwind","Fluent UI", "Azure DevOps"],
            githubUrl: null,
            liveUrl: null,
            image: "mubadala.png"
        },
        {
            id: 2,
            name: "Wellness Infotainment System",
            role: "Software Engineer",
            company: "IAV GmbH",
            startDate: "2023",
            endDate: "2024",
            description: "In-car infotainment web application for VW ID cars integrating advanced vehicle features including climate control, panoramic roof, ambient lighting, seat massage, and smart lights. Created customized programs for immersive driving experiences.",
            personalExperience: "This was my second project for Volkswagen web applications, where I had the chance to dive deeply into vehicle functionalities and integrate them through orchestrational design patterns, fully utilizing the car’s physical features. I even had the opportunity to work on-site at the manufacturer, live coding inside the cars to refine and perfect the client experience. Working closely with one colleague, we managed to deliver a highly appreciated and successful project within a short timeframe. Overall, this was one of the most exciting projects I’ve worked on, combining hands-on technical work with direct collaboration in real vehicle environments.",
            technologies: ["Angular", "RxJS", "NgRx", "Node.js", "gRPC", "VW Internal Libraries", "Git", "Bitbucket"],
            githubUrl: null,
            liveUrl: null,
            image: "volkswagen.jpg"
        },
        {
            id: 3,
            name: "Saint Sofia School Management System",
            role: "Software Engineer & Project Lead",
            company: "Saint Sofia Private School",
            startDate: "2023",
            endDate: "2023",
            description: "Full-stack school management application for creating and managing exams, tests, and assignments. Implemented complex data relationships and AI functionality integration for enhanced educational tools.",
            personalExperience: "This project had originally been developed by our company in the past, but the client returned with requests for new features and overall improvements. Since the original team was no longer available, I took full ownership as both the technical lead and client representative, managing all direct communication with stakeholders. In addition to coordinating the team and distributing tasks, I contributed as a full-stack developer, tackling both frontend and backend challenges. Together, we polished the application into a new version with an improved design and enhanced functionalities. This project challenged me to balance technical excellence with client relationship management, greatly strengthening my leadership and communication skills while delivering innovative educational technology solutions.",
            technologies: ["JavaScript", "TypeScript", "React", "Redux", "Redux Saga", "Node.js", "Express", "MongoDB", "Mongoose", "MUI", "Docker"],
            githubUrl: null,
            liveUrl: null,
            image: "saintSofia.png"
        },
        {
            id: 4,
            name: "Celonis Bank Application",
            role: "Software Engineer Consultant",
            company: "Celonis",
            startDate: "2023",
            endDate: "2023",
            description: "Fintech application refactoring project. Modernized legacy codebase from imperative style to ES6 standards, implementing clean architecture and modern programming practices.",
            personalExperience: "In this project, I worked independently as a consultant for a team of engineers who had already developed a fintech application, but its codebase had become outdated in terms of modern development patterns and conventions. I single-handedly refactored a crucial part of the application that was facing critical issues at the time and later had the opportunity to mentor the development team on further refactoring and best practices.",
            technologies: ["JavaScript", "TypeScript", "React", "Redux", "Redux Saga", "MySQL", "Git", "Bitbucket"],
            githubUrl: null,
            liveUrl: null,
            image: "celonis.png"
        },
        {
            id: 5,
            name: "WeCharge Electric Vehicle System",
            role: "Software Engineer",
            company: "IAV GmbH",
            startDate: "2022",
            endDate: "2023",
            description: "Infotainment system for Volkswagen Group electric vehicles providing real-time charging station information, availability status, and pricing. Built-in navigation for efficient journey planning.",
            personalExperience: "Starting my professional career as a Junior Software Developer, this was the first project I worked on. Unlike my graduate project, this one involved a much larger team. Within the first week, I was already handling tasks independently and delivering results. I quickly adapted to collaborating and aligning with a big team, and soon became one of the most trusted and productive developers on the project. This was also where I started working with Angular, learning to integrate it with internal framework libraries and backend logic, which helped me expand my skill set beyond the frontend experience I had gained at Telerik Academy.",
            technologies: ["Angular", "RxJS", "NgRx", "Node.js", "gRPC", "Leaflet", "VW Internal Libraries", "Git", "Bitbucket"],
            githubUrl: null,
            liveUrl: null,
            image: "volkswagen.jpg"
        },
        {
            id: 6,
            name: "Impulse Communication Platform",
            role: "Software Engineer",
            company: "Telerik",
            startDate: "2022",
            endDate: "2022",
            description: "Multi-team collaboration platform with centralized messaging, task organization, and project management. Features include group chats, file sharing, real-time notifications, and authentication protocols.",
            personalExperience: "This was my graduate project at Telerik Academy. I worked in a team of three, where I took the lead in organizing and guiding the project. It was a challenging experience, as we had to build a chat application with real-time messaging and notifications from scratch. My main contribution was bringing the team together, designing the logical structure of the application, and creating and executing a clear development plan. In the end, our efforts paid off — we won the award for the best graduate project. I graduated as a top performer in my cohort, which led to multiple job offers from different companies.",
            technologies: ["React", "TypeScript", "Firebase", "MUI", "Git", "GitHub"],
            githubUrl: null,
            liveUrl: null,
            image: "telerik.png"
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
