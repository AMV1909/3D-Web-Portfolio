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
    graphql,
    ecopetrol,
    freelance,
    devlog,
    chat_javascript,
    ahorcado,
    tic_tac_toe,
    gpt3_amv,
    blind_number_challenge,
    google_translate_clone,
    e_commerce_books,
    sass,
    plan_padrino,
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
        name: "SASS",
        icon: sass,
        link: "https://sass-lang.com",
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
        deployed_url: "https://plan-padrino.pages.dev",
    },
    {
        name: "GPT-3",
        description:
            "Modern UI/UX GPT-3 is a website created with the most modern UI/UX design and development techniques. The website is built using React. The website is hosted on GitHub Pages.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "github pages",
                color: "pink-text-gradient",
            },
        ],
        image: gpt3_amv,
        source_code_link: "https://github.com/AMV1909/GPT3_AMV",
        deployed_url: "https://amv1909.github.io/GPT3_AMV/",
    },
    {
        name: "E-Commerce Books",
        description:
            "This is a repository that contains the source code of a technical test for the position of Freelance Backend Developer at AID FOR AIDS." +
            " The project is a RESTful API developed with Node.js, Express.js, Zod and MongoDB.",
        tags: [
            {
                name: "nodejs",
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
        image: e_commerce_books,
        source_code_link: "https://github.com/AMV1909/e-commerce-books",
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
    {
        name: "Google Translate Clone",
        description:
            "This is a clone of Google Translate. It is a simple web application that allows users to translate text from one language to another. It uses the Opean AI API to translate the text.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
            {
                name: "open ai",
                color: "blue-text-gradient",
            },
        ],
        image: google_translate_clone,
        source_code_link: "https://github.com/AMV1909/Google-Translate-Clone",
        deployed_url: "https://amv1909.github.io/Google-Translate-Clone/",
    },
    {
        name: "Blind Number Challenge",
        description:
            "This is a game where the player has to sort a list of numbers in ascending order. The game has been developed with React.js.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
        ],
        image: blind_number_challenge,
        source_code_link: "https://github.com/AMV1909/Blind-Number-Challenge",
        deployed_url: "https://amv1909.github.io/Blind-Number-Challenge/",
    },
    {
        name: "Tic Tac Toe Multiplayer",
        description:
            "Tic Tac Toe game developed with React.js, Node.js, Express.js and Socket.io. This project use socket.io for the real time game and MongoDB for the database.",
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
                name: "socket.io",
                color: "blue-text-gradient",
            },
        ],
        image: tic_tac_toe,
        source_code_link: "https://github.com/AMV1909/Tic-Tac-Toe-Frontend",
        deployed_url: "https://tic-tac-toe-ctm.pages.dev",
    },
    {
        name: "Hangman Multiplayer",
        description:
            "Hangman game developed with React.js, Node.js, Express.js and Socket.io. This project use socket.io for the real time game and MongoDB for the database.",
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
                name: "socket.io",
                color: "blue-text-gradient",
            },
        ],
        image: ahorcado,
        source_code_link: "https://github.com/AMV1909/Ahorcado-Lite-Frontend",
        deployed_url: "https://ahorcado.pages.dev",
    },
];
