// CV Data Storage - Vassil Iliev's Professional Information
const cvData = {
    personal: {
        name: "Vassil Iliev",
        title: "Full Stack Software Engineer",
        email: "vassil.iliev.97@gmail.com",
        phone: "+359894380148",
        location: "Bulgaria",
        summary: "Full Stack Engineer with 4+ years of experience, mostly in enterprise — currently building an AI investment platform at Mubadala, previously shipped in-car infotainment systems for Volkswagen. I take responsibility naturally, pick up new technologies quickly, and prefer being the person who talks to the client rather than avoiding it.",
        profileImage: "1.jpg"
    },

    experience: [
        {
            id: 1,
            company: "Mubadala",
            position: "Senior Software Engineer",
            type: "full-time",
            startDate: "2024",
            endDate: "Present",
            image: "mubadala.png",
            imageStyle: "contain-scaled",
            highlights: [
                "Building MAIA, Mubadala's internal AI platform for investment intelligence and corporate workflows",
                "First role as a Senior Developer, in a large team with high standards for code quality and delivery",
                "Supporting teammates with technical challenges, coordinating across teams, and working on-site with clients"
            ],
            technologies: ["TypeScript", "React", "Jotai", ".NET", "Tailwind", "Fluent UI", "Azure DevOps"],
            details: "The most significant project of my career so far. We're building software for institutional investors in a large, skilled team — a product where there's no room for mistakes. I adapted quickly and started contributing both technically and organizationally. I also had the chance to work on-site with clients, which helped me better understand their actual needs."
        },
        {
            id: 2,
            company: "IAV GmbH / Volkswagen",
            position: "Software Engineer",
            type: "full-time",
            startDate: "2023",
            endDate: "2024",
            image: "volkswagen.jpg",
            imageStyle: "contain",
            projectName: "Wellness Infotainment System",
            highlights: [
                "Built the Wellness Infotainment System for VW ID cars — integrating climate, panoramic roof, ambient lighting, seat massage, and smart lights into one application",
                "Delivered the project on schedule with one colleague, including on-site development at VW factories, coding directly in the vehicles",
                "Designed coordination patterns to manage multiple physical vehicle systems through a single web interface"
            ],
            technologies: ["Angular", "RxJS", "NgRx", "Node.js", "gRPC", "VW Internal Libraries", "Git", "Bitbucket"],
            details: "My second VW project. The main challenge was making a web application control actual car hardware — climate, roof, lights, seats — and have them work together as combined programs. I worked on-site at VW factories, developing directly inside the vehicles. It was just me and one colleague, and we delivered on schedule. One of the most rewarding projects I've been part of."
        },
        {
            id: 3,
            company: "\"Saint Sofia\" Private School",
            position: "Software Engineer & Project Lead",
            type: "contract",
            startDate: "2023",
            endDate: "2023",
            image: "saintSofia.png",
            imageStyle: "contain",
            projectName: "School Management System",
            highlights: [
                "Took over as both tech lead and client-facing representative after the original team had left",
                "Led full-stack development of a school management system for exams, tests, and assignments",
                "Managed client communication, distributed tasks across the team, and delivered a new version with improved design and AI features"
            ],
            technologies: ["TypeScript", "React", "Redux", "Redux Saga", "Node.js", "Express", "MongoDB", "Mongoose", "MUI", "Docker"],
            details: "The client returned for new features, but the original developers had moved on. I took over the full scope — client communication, planning, task distribution, and development on both frontend and backend. We delivered an upgraded version with cleaner design and new functionality. It was my first real experience running a project end-to-end."
        },
        {
            id: 4,
            company: "Celonis",
            position: "Software Engineer Consultant",
            type: "contract",
            startDate: "2023",
            endDate: "2023",
            image: "celonis.png",
            imageStyle: "contain",
            projectName: "Bank Application Modernization",
            highlights: [
                "Brought in solo to refactor a critical part of a fintech application from legacy imperative code to modern ES6",
                "After resolving the immediate issues, mentored the team on cleaner patterns and how to continue the refactoring themselves",
                "All changes had to maintain full backward compatibility for existing users"
            ],
            technologies: ["TypeScript", "React", "Redux", "Redux Saga", "MySQL", "Git", "Bitbucket"],
            details: "A fintech application had a critical section causing production issues. I joined as a solo consultant, rewrote that part, and then worked with the team to show them how to approach the rest of the codebase on their own."
        },
        {
            id: 5,
            company: "IAV GmbH / Volkswagen",
            position: "Software Engineer",
            type: "full-time",
            startDate: "2022",
            endDate: "2023",
            image: "volkswagen.jpg",
            imageStyle: "contain",
            projectName: "WeCharge EV System",
            highlights: [
                "Built WeCharge — an infotainment system for VW, SEAT, and Skoda EVs showing nearby charging stations with real-time availability and pricing",
                "Started as a junior and was working on tasks independently within the first week on a large team",
                "Integrated Angular with VW's internal framework libraries and connected to backend services over gRPC"
            ],
            technologies: ["Angular", "RxJS", "NgRx", "Node.js", "gRPC", "Leaflet", "VW Internal Libraries", "Git", "Bitbucket"],
            details: "My first professional role as a developer. Large team, large company, and a lot to learn quickly. Within the first week I was already handling tasks independently, and over time I became one of the most relied-on developers on the project. This is where I learned Angular and got comfortable working in enterprise-scale codebases."
        },
        {
            id: 6,
            company: "Telerik Academy",
            position: "Lead Developer (Graduate Project)",
            type: "full-time",
            startDate: "2022",
            endDate: "2022",
            image: "telerik.png",
            imageStyle: "contain",
            projectName: "Impulse Communication Platform",
            highlights: [
                "Built Impulse — a real-time chat application with messaging, file sharing, and notifications, developed from scratch",
                "Led a team of three, defined the application architecture and development plan",
                "Won the award for best graduate project and graduated as a top performer, receiving multiple job offers"
            ],
            technologies: ["React", "TypeScript", "Firebase", "MUI", "Git", "GitHub"],
            details: "My final project at Telerik Academy. A team of three, building a complete chat application with real-time messaging and notifications from the ground up. I led the architecture and planning. We won the award for best project, and I graduated as a top performer in my cohort, which led to several job opportunities."
        }
    ],

    education: [
        {
            id: 1,
            institution: "Telerik Academy",
            degree: "Computer Software Engineering",
            field: "Full Stack Development",
            startDate: "",
            endDate: "",
            description: "Intensive software development program. Graduated as top performer with best graduate project award."
        },
        {
            id: 2,
            institution: "Cisco Networking Academy",
            degree: "CCNA Introduction to Networking",
            field: "Network Engineering",
            startDate: "",
            endDate: "",
            description: "Professional certification covering network fundamentals, protocols, and infrastructure"
        },
        {
            id: 3,
            institution: "Bulgarian Ministry of Education",
            degree: "Software Engineer Professional Certificate",
            field: "Software Engineering",
            startDate: "",
            endDate: "",
            description: "Official state-recognized professional certification in software engineering"
        },
    ],

    skills: {
        "Languages": [
            "TypeScript", "JavaScript", "Python"
        ],
        "Frontend": [
            "React", "Expo", "Angular", "Redux", "Redux Saga", "RxJS", "NgRx", "Jotai",
            "HTML5", "CSS3", "SCSS", "Tailwind", "MUI", "Fluent UI", "Bootstrap"
        ],
        "Backend & APIs": [
            "Node.js", "Express.js", "RESTful APIs", "gRPC", "Mongoose"
        ],
        "Databases & Data": [
            "MongoDB", "MySQL", "Firebase", "Supabase", "Snowflake"
        ],
        "DevOps & Tools": [
            "Git", "Docker", "Azure DevOps", "Cloudflare", "GitLab CI/CD", "Bitbucket", "GitHub Actions"
        ],
        "Architecture & Patterns": [
            "Clean Architecture", "Design Patterns", "OOP", "Functional Programming",
            "Data Structures & Algorithms"
        ],
        "Testing": [
            "Jest", "Unit Testing", "Integration Testing"
        ],
        "AI-Assisted Development": [
            "ChatGPT", "Claude", "Claude Code", "Gemini", "Cursor", "GitHub Copilot",
            "Prompt Engineering"
        ],
        "Product & Marketing": [
            "Figma", "Stripe", "RevenueCat", "Outseta", "Prismic", "Mux"
        ]
    },

    strengths: [
        {
            title: "Responsible & Proactive",
            description: "I show up when something needs to be done, even if it's not my responsibility. Teams and managers have consistently trusted me for being proactive, helpful, and always answering the call to action.",
            icon: "fas fa-shield-alt"
        },
        {
            title: "Client-Facing Confidence",
            description: "I represent the team and the project directly to clients without hesitation. I handle expectations, gather feedback, and make sure the communication between business and engineering is clear.",
            icon: "fas fa-comments"
        },
        {
            title: "Quick to Adapt",
            description: "If a technology is not in my current stack, it doesn't slow me down. I have a strong foundation in programming concepts and abstractions, which lets me pick up new tools and frameworks fast.",
            icon: "fas fa-bolt"
        },
        {
            title: "Team Lead & Planner",
            description: "Experience leading teams, planning sprints, distributing work, and keeping delivery on track — while staying hands-on with the code.",
            icon: "fas fa-users"
        }
    ],

    sideProjects: [
        {
            name: "Project Stream",
            role: "Founder & Software Architect",
            status: "In Development",
            startDate: "March 2026",
            description: "SaaS platform for streaming vertical series. Mobile-first, built on managed services — Supabase edge functions for backend logic, Mux for video delivery, Cloudflare for infrastructure, and RevenueCat for monetization. My focus is on the frontend and on connecting all these services together. The goal is a real, shippable product.",
            aiApproach: "This is also where I push my AI-assisted workflow the furthest — using Claude Code with custom agents, skills, and rules to maintain architectural consistency and move faster while still making deliberate decisions about the code.",
            technologies: ["Expo", "React Native", "Mux", "Supabase", "Cloudflare", "RevenueCat"],
            icon: "fas fa-play-circle",
            links: {}
        },
        {
            name: "TollTracker",
            role: "Marketing & Product Consultant",
            status: "Released",
            startDate: "2025",
            description: "Mobile app available on the App Store and Google Play. In this project I'm not writing code — I consult on UX, create content for articles, plan marketing campaigns, and work on user acquisition. It's a different side of product development, and I find it valuable to be working outside my usual domain.",
            aiApproach: null,
            technologies: ["Figma", "Outseta", "RevenueCat", "Stripe", "Prismic"],
            icon: "fas fa-road",
            links: {
                website: "https://tolltracker.eu",
                appStore: null,
                playStore: null
            }
        }
    ],

    social: {
        linkedin: "https://www.linkedin.com/in/vassil-iliev-41935b239/",
        github: null,
        twitter: null,
        email: "vasil.iliev.97@gmail.com"
    },

};

// Configuration for the CV website
const config = {
    theme: {
        default: 'dark',
        allowToggle: true
    },
    animations: {
        enabled: true,
        duration: 600
    },
    contact: {
        showEmail: true,
        showPhone: true,
        showLocation: true
    },
    sections: {
        experience: true,
        skills: true,
        strengths: true,
        sideProjects: true,
        education: true
    }
};

// Export data for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cvData, config };
}
