import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    threejs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    github_svg,
    github_actions,
    figma,
    docker,
    express,
    apollo,
    azure,
    socket_io,
    linux,
    graphql,
    ecopetrol,
    freelance,
    cars_page,
    devlog,
    chat_javascript,
    organizer,
    rick_and_morty,
    ahorcado,
    tic_tac_toe,
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "DevOps Engineer",
        icon: creator,
    },
];

export const technologies = [
    {
        name: "HTML 5",
        icon: html,
        link: "https://developer.mozilla.org/es/docs/Web/HTML",
    },
    {
        name: "CSS 3",
        icon: css,
        link: "https://developer.mozilla.org/es/docs/Web/CSS",
    },
    {
        name: "JavaScript",
        icon: javascript,
        link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    {
        name: "TypeScript",
        icon: typescript,
        link: "https://www.typescriptlang.org",
    },
    {
        name: "React JS",
        icon: reactjs,
        link: "https://es.reactjs.org",
    },
    {
        name: "Redux Toolkit",
        icon: redux,
        link: "https://redux-toolkit.js.org",
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
        link: "https://tailwindcss.com",
    },
    {
        name: "Node JS",
        icon: nodejs,
        link: "https://nodejs.org",
    },
    {
        name: "MongoDB",
        icon: mongodb,
        link: "https://www.mongodb.com",
    },
    {
        name: "Three JS",
        icon: threejs,
        link: "https://threejs.org",
    },
    {
        name: "Git",
        icon: git,
        link: "https://git-scm.com",
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
    {
        name: "Figma",
        icon: figma,
        link: "https://www.figma.com",
    },
    {
        name: "Docker",
        icon: docker,
        link: "https://www.docker.com",
    },
    {
        name: "Express JS",
        icon: express,
        link: "https://expressjs.com",
    },
    {
        name: "Socket.io",
        icon: socket_io,
        link: "https://socket.io",
    },
    {
        name: "GraphQL",
        icon: graphql,
        link: "https://graphql.org",
    },
    {
        name: "Apollo Server",
        icon: apollo,
        link: "https://www.apollographql.com/docs/apollo-server",
    },
    {
        name: "Azure",
        icon: azure,
        link: "https://azure.microsoft.com",
    },

    {
        name: "Linux",
        icon: linux,
        link: "https://www.linux.org",
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
        company_name: "Freelance",
        icon: freelance,
        iconBg: "#E6DEDD",
        date: "Dec 2022 - Present",
        points: [
            "Developing and deploying web applications using React.js and other related technologies for clients.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Developing and deploying RESTful and GraphQL APIs using Node.js, Express.js, Apollo-Server  and MongoDB.",
        ],
    },
];

export const projects = [
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
    {
        name: "Organizer",
        description:
            "A web application developed with React.js, Node.js, Express.js, Apollo-GrapQL and MongoDB. This web application makes easier the organization of your projects and tasks.",
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
                name: "graphql",
                color: "blue-text-gradient",
            },
            {
                name: "apollo",
                color: "green-text-gradient",
            },
        ],
        image: organizer,
        source_code_link: "https://github.com/AMV1909/MERN-Apollo",
    },
    {
        name: "Chat App",
        description:
            "A complete chat application developed with socket.io, Node.js, Express.js and MongoDB. This project use socket.io for the real time chat and MongoDB for the database.",
        tags: [
            {
                name: "socket.io",
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
        ],
        image: chat_javascript,
        source_code_link: "https://github.com/AMV1909/Chat-JavaScript",
    },
];
