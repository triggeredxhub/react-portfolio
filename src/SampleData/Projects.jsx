import ProjectCard from "../components/ProjectCard";

const ProjectData = [
    {
        id: 1,
        title: "Learning Management System",
        role: "Full Stack Developer",
        description: "A centralized Learning Management System that connects students, teachers, and curriculum heads for efficient academic monitoring. It auto-generates e-classrooms based on enrollment to reduce manual invites and prevent outsider access.",
        techStack: ["Flutter", "Node.js", "MySQL", "Firebase"],
        image: "../../src/assets/image/project-1.png",
        
        
    },
    // {
    //     id: 2,
    //     title: "Taskify",
    //     role: "Frontend Developer",
    //     description: "A task management app to help you stay organized.",
    //     techStack: ["Vue.js", "Firebase"],
    //     image: "../../src/assets/image/image.png",
    //     link: "https://taskify.com",
    // },
    // {
    //     id: 3,
    //     title: "Weather App",
    //     role: "Frontend Developer",
    //     description: "A simple weather app that shows the current weather.",
    //     techStack: ["HTML", "CSS", "JavaScript"],
    //     image: "../../src/assets/image/image.png",
    //     link: "https://weatherapp.com",
    // }
];

const Project = () => {
    return <div id="project" >
        {
            ProjectData.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    role={project.role}
                    description={project.description}
                    techStack={project.techStack}
                    image={project.image}
                    link={project.link}
                />
            ))}
        
    </div>
}

export default Project;
