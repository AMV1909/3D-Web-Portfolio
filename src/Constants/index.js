import {
    mobile,
    backend,
    creator,
    web,
    typescript,
    nextjs,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    github_svg,
    github_actions,
    express,
    ecopetrol,
    devlog,
    sass,
    plan_padrino,
    eficacia,
    expo,
    zustand,
    electron,
    postgresql,
    mysql,
    bun,
    apollo,
    cloude_company,
    funcadi,
    jest,
    cressco,
    cypress,
    eeeraapee,
    aws,
} from "../Assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "technologies",
        title: "Technologies",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "DevOps Engineer",
        icon: creator,
    },
];

export const technologies = [
    {
        name: "Next JS",
        icon: nextjs,
        link: "https://nextjs.org",
    },
    {
        name: "React JS",
        icon: reactjs,
        link: "https://es.reactjs.org",
    },
    {
        name: "React Native",
        icon: expo,
        link: "https://expo.dev",
    },
    {
        name: "Electron JS",
        icon: electron,
        link: "https://www.electronjs.org",
    },
    {
        name: "Express JS",
        icon: express,
        link: "https://expressjs.com",
    },
    {
        name: "TypeScript",
        icon: typescript,
        link: "https://www.typescriptlang.org",
    },
    {
        name: "Redux",
        icon: redux,
        link: "https://redux-toolkit.js.org",
    },
    {
        name: "Zustand",
        icon: zustand,
        link: "https://zustand-demo.pmnd.rs",
    },
    {
        name: "Apollo GraphQL",
        icon: apollo,
        link: "https://www.apollographql.com",
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
        link: "https://tailwindcss.com",
    },
    {
        name: "Sass",
        icon: sass,
        link: "https://sass-lang.com",
    },
    {
        name: "Node JS",
        icon: nodejs,
        link: "https://nodejs.org",
    },
    {
        name: "Bun",
        icon: bun,
        link: "https://bun.sh",
    },
    {
        name: "MongoDB",
        icon: mongodb,
        link: "https://www.mongodb.com",
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
        link: "https://www.postgresql.org",
    },
    {
        name: "MySQL",
        icon: mysql,
        link: "https://www.mysql.com",
    },
    {
        name: "Cypress",
        icon: cypress,
        link: "https://www.cypress.io/",
    },
    {
        name: "Jest",
        icon: jest,
        link: "https://jestjs.io",
    },
    {
        name: "AWS",
        icon: aws,
        link: "https://aws.amazon.com",
    },
    {
        name: "GitHub",
        icon: github_svg,
        link: "https://github.com",
    },
    {
        name: "GitHub Actions",
        icon: github_actions,
        link: "https://github.com/features/actions",
    },
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Ecopetrol",
        icon: ecopetrol,
        iconBg: "#E6DEDD",
        date: "Sep 2022 - Nov 2022",
        points: [
            "Developing web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Cloude Company",
        icon: cloude_company,
        iconBg: "#E6DEDD",
        date: "Mar 2024 - Apr 2024",
        points: [
            "Developing Funcadi, a modern full stack application for manage chemical pharmaceutical patient records, manage appoinments for patients, export data as excel or pdf and many more",
            "Taking user requirements and transforming them into code",
            "Establisment a route to deploy the web app to tests and production",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Eficacia S.A.",
        icon: eficacia,
        iconBg: "#E6DEDD",
        date: "Dec 2023 - Jun 2024",
        points: [
            "Resolve bugs and improve code quality and performance",
            "Create e2e and unit tests for frontend to secure that all the features works as expected",
            "Implement new features and improve existing ones collaborating with the UX team to improve the web app",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Cressco",
        icon: cressco,
        iconBg: "#E6DEDD",
        date: "Jul 2024 - Present",
        points: [
            "Developing web applications using Next.js and Express.js",
            "Maintane good practices for software development and maintenability of the code",
            "Create e2e and unit tests for frontend and backend to secure that all the features works as expected",
        ],
    },
];

export const projects = [
    {
        name: "Eeeraapee",
        description: "Eeeraapee is an innovative business management tool designed to streamline and optimize organizational workflows. The application offers role-based access, user management, detailed product catalogs, and document management capabilities, including quotations, sales orders, and invoices",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
            {
                name: "zustand",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            }
        ],
        image: eeeraapee,
        deployed_url: "https://eeeraapee.com",
    },
    {
        name: "Funcadi",
        description:
            "Funcadi is a modern full stack application developed with the Stack MERN for manage chemical pharmaceutical patient records, manage appoinments for patients, export data as excel or pdf and many more.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "bun",
                color: "green-text-gradient",
            },
        ],
        image: funcadi,
        deployed_url: "https://qf.funcadi.com.co",
    },
    {
        name: "Plan Padrino - UNAB",
        description:
            "The web app simplifies the search for tutoring for university students, automatically connecting them with tutors based on their academic profile and availability, streamlining the process and improving access to academic support.",
        tags: [
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "redux",
                color: "pink-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
            {
                name: "mongodb",
                color: "blue-text-gradient",
            },
            {
                name: "google api",
                color: "green-text-gradient",
            },
        ],
        image: plan_padrino,
        source_code_link: "https://github.com/AMV1909/STGE-Frontend-Axel",
    },
    {
        name: "DevLog",
        description:
            "A complete web store developed with the Stack MERN. This project use Stripe for payments, Cloudinary for images and Azure IoT for the location of the drones that deliver the products.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
            {
                name: "stripe",
                color: "blue-text-gradient",
            },
            {
                name: "azure",
                color: "green-text-gradient",
            },
        ],
        image: devlog,
        source_code_link: "https://github.com/AMV1909/DevLog_frontend",
    },
];
