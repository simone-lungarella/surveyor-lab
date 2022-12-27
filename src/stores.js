import { writable } from "svelte/store";

export const WorkStore = writable([
    {
        id: 1,
        title: "Java Developer",
        company: "IBM CIC",
        from: "December 2019",
        to: "Present",
        topics: [
            "Part of the team that is developing FSE 2.0 (Fascicolo Sanitario Elettronico) for the Italian government.",
            "Collaborated on Italian implementation of European green certificate.",
            "Collaborated on the certificate revocation system of DGC for the Italian government.",
            "Worked on multiple smaller projects following the digital green certificate project and inherent the stats acquiring and other small aspects.",
        ],
    },
    {
        id: 2,
        title: "Full Stack Developer",
        company: "Experis",
        from: "March 2020",
        to: "December 2021",
        topics: [
            "Developed different functionality mainly relative to documentation handling and modification.",
            "Analyzed and developed back-end functionality and front-end interfaces.",
            "Written and executed test plans.",
            "Contributed in documentation production and exposition of topics during the Knowledge Transfer.",
            "Collaborated with a small team to improve the current implementation of the European green certificate for the Italian government."
        ],
    },
    {
        id: 3,
        title: "Java Developer",
        company: "Italdata",
        from: "June 2019",
        to: "July 2019",
        topics: [
            "Reverse engineered a web application to build up a small database used by the application.",
            "Feasibility study of new functionality to consent Registrar to be accredited as DNSSec Registrar.",
        ],
    }
]);

export const ProjectStore = writable([
    {
        id: 1,
        title: "On The Spot!",
        description: "A third person video game based on puzzle solving wearing the faces of a funny dice.",
        techs: ["Unreal Engine 5", "Adobe Illustrator", "Blender", "C++"],
        cover: "src/routes/projects/img/onthespot.png",
        github: "https://github.com/StampedeStudios/OnTheSpot",
        website: "https://surveiior.itch.io/on-the-spot",
        page: "/projects/onthespot",
    },
    {
        id: 2,
        title: "Winforce",
        description: "A React application that allows a set of worksites to be managed and monitored.",
        techs: ["Spring Boot", "Java", "React", "Javascript", "MySQL"],
        cover: "src/routes/projects/img/winforce.png",
        website: "https://simone-lungarella.github.io/winforce",
        page: "/projects/winforce",
    },
    {
        id: 3,
        title: "Product Tracker",
        description: "Application that follows a user and helps to describe the product track in various phases allowing to download a printable version of all the documentation.",
        techs: ["Spring Boot", "Java", "React", "Javascript"],
        cover: "src/routes/projects/img/product-tracker.png",
        github: "https://github.com/simone-lungarella/product-tracker",
        website: "https://simone-lungarella.github.io/product-tracker",
        page: "/projects/product-tracker",
    }
])
