export const HERO_CARDS_DATA = [
    {
        id: 1,
        title: 'hero.about.title',
        subText: 'hero.about.subText',
        buttonText: 'hero.about.button',
        href: '#about-me'
    },
    {
        id: 2,
        title: 'hero.work.title',
        subText: 'hero.work.subText',
        buttonText: 'hero.work.button',
        href: '#projects'
    },
];

export const SOCIAL_ICONS = [
    {
        id: 1,
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/thiyagu-arunachalam-b6a901159/',
        icon:'assets/images/icons/linkedin.svg'
    },
    {
        id: 2,
        label: 'GitHub',
        url: 'https://github.com/Thiya11',
        icon:'assets/images/icons/github.svg'
    },
    {
        id: 3,
        label: 'Medium',
        url: 'https://medium.com/@athiyagu6',
        icon:'assets/images/icons/medium.svg'
    }
]

export const FEATURES_DATA = [
    {
        id: 1,
        title: 'features.frontend.title',
        subText: 'features.frontend.subText',
        icon: 'assets/images/icons/window.svg'
    },
    {
        id: 2,
        title: 'features.backend.title',
        subText: 'features.backend.subText',
        icon:'assets/images/icons/database.svg'
    },
    {
        id: 3,
        title: 'features.ai.title',
        subText: 'features.ai.subText',
        icon:'assets/images/icons/ai.svg'
    },
    {
        id: 4,
        title: 'features.other.title',
        subText: 'features.other.subText',
        icon:'assets/images/icons/code.svg'
    }
];

export const SKILLS_DATA = [
    {
        id:1,
        title: 'Angular',
        icon:'assets/images/skills/angular-brands-solid.svg',
        level: 4.5,
        category:'front-end'
    },
    {
        id:2,
        title:'HTML5/CSS3',
        icon:'assets/images/skills/html5-brands-solid.svg',
        level:4.5,
        category:'front-end'
    },
    {
        id:4,
        title:'JavaScript',
        icon:'assets/images/skills/js-brands-solid.svg',
        level:4.5,
        category:'programming'
    },
    {
        id:6,
        title:'Node.js',
        icon:'assets/images/skills/node-js-brands-solid.svg',
        level:4,
        category:'back-end'
    },
    {
        id:8,
        title:'PostgreSQL',
        icon:'assets/images/skills/table-solid.svg',
        level:3.5,
        category:'database'
    },
    {
        id:9,
        title:'MySQL',
        icon:'assets/images/skills/database-solid.svg',
        level:4,
        category:'database'
    },
    {
        id:10,
        title:'Git',
        icon:'assets/images/skills/git-brands.svg',
        level:4,
        category:'tools'
    },
    {
        id:5,
        title:'React',
        icon:'assets/images/skills/react-brands-solid.svg',
        level:3,
        category:'front-end'
    },
    {
        id:7,
        title:'Python',
        icon:'assets/images/skills/python-brands-solid.svg',
        level:4,
        category:'programming'
    },
    {
        id:11,
        title:'Cypress',
        icon:'assets/images/skills/cypress-brands.svg',
        level:3,
        category:'testing'
    },
    {
        id:12,
        title:'Java',
        icon:'assets/images/skills/java.svg',
        level:3,
        category:'programming'
    },
    {
        id:13,
        title:'Spring',
        icon:'assets/images/skills/spring-boot.svg',
        level:3,
        category:'back-end'
    },        
    {
        id:14,
        title:'MCP',
        icon:'assets/images/skills/mcp.svg',
        level:3,
        category:'tools'
    },
];

export const EXPERIENCE_DATA =  [
    {
            "id": 0,
            "description":"experience.0.description",
            "endDate": "",
            "currentJob": true,
            "role": "experience.0.role",
            "location": "experience.0.location",
            "url":"https://jptomato.com",
            "company": "株式会社　Tomato",
            "startDate": "November 2025",
            "sortOrderId": 0
        },
        {
            "id": 1,
            "description": "experience.1.description",
            "endDate": "Septermber 2025",
            "currentJob": false,
            "role": "experience.1.role",
            "location": "experience.1.location",
            "url":"https://cdmx.in/",
            "company": "CodeMax IT Solutions",
            "startDate": "April 2024",
            "sortOrderId": 1
        },
        {
            "id": 2,
            "description": "experience.2.description",
            "endDate": "March 2024",
            "currentJob": false,
            "role": "experience.2.role",
            "location": "experience.2.location",
            "url":"https://cdmx.in/",
            "company": "CodeMax IT Solutions",
            "startDate": "April 2023",
            "sortOrderId": 2
        },
        {
            "id": 3,
            "description": "experience.3.description",
            "currentJob": false,
            "endDate":"March 2023",
            "role": "experience.3.role",
            "location": "experience.3.location",
            "company": "Centiyent",
            "url":"https://www.centiyent.com//",
            "startDate": "June 2022",
            "sortOrderId": 3
        },
        {
            "id": 4,
            "description": "experience.4.description",
            "currentJob": false,
            "endDate":"July 2021",
            "role": "experience.4.role",
            "location": "experience.4.location",
            "company": "Gandhigram University",
            "url":"https://www.ruraluniv.ac.in/",
            "startDate": "June 2019",
            "sortOrderId": 4
        }
    ];

export const BOOK_LIST = [
    {
        id:1,
        img:'assets/images/frankenstein.jpg',
        title:'Frankenstein',
        author:'Mary Shelly',
        isCompleted:true,
        progress:100
    },
    {
        id:2,
        img:'assets/images/1984.webp',
        title:'1984',
        author:'George Orwell',
        isCompleted:true,
        progress:100
    },
    {
        id:3,
        img:'assets/images/a-man-called-ove.jpg',
        title:'A Man Called Ove',
        author:'Fredrik Backman',
        isCompleted:false,
        progress:10
    }
];

export const PROJECTS_DATA = [
    {
        id:1,
        img:'assets/images/stem-app.png',
        url:'https://kitsune-tools.vercel.app/',
        title:'projects.stem.title',
        tools:['Angular', 'Bootstrap', 'E-charts']
    },
    {
        id:2,
        img:'assets/images/suvadu.png',
        url:'https://ysuvadu.com',
        title:'projects.suvadu.title',
        tools:['Next.js', 'Tailwind', 'Cloudflare R2', 'PostgreSQL', 'Chart.js', 'Excalidraw']
    },
    // {
    //     id:3,
    //     img:'assets/images/biller-app.png',
    //     url:'https://kitsunechaos.com/biller-app/login',
    //     title:'projects.biller.title',
    //     tools:['Angular', 'Bootstrap', 'Node.js', 'Express.js', 'SQL', 'E-charts']
    // },
    // {
    //     id:4,
    //     img:'assets/images/portfolio.png',
    //     url:'https://thiyagu-arunachalam.vercel.app/',
    //     title:'Portfolio Project',
    //     tools:['React', 'Bootstrap']
    // }
];

export const CONTACT_DATA = [
    {
        id:1,
        logo:'assets/images/icons/envelope-at-fill.svg',
        title:'addressCard.email',
        url:'mailto:athiyagu6@gmail.com',
        text:'athiyagu6@gmail.com'
    },
    {
        id:2,
        logo:'assets/images/icons/geo-alt-fill.svg',
        title:'addressCard.address',
        url:'',
        text:'addressCard.myAddress',
    },
]
