import ProjectItem from "@/components/ProjectItem";
import style from "@/styles/ProjectsContainer.module.css";

export default function ProjectsContainer() {
  const projectsList = [
    {
      title: "Tip Roulette",
      description: `Get personalized tips on Music, Games, Entertainment and more with Tip Roulette, the ultimate source for expert recommendations and secrets.`,
      info: {
        chars: ["Has built-in dark mode", "Multilingual (ES-EN)"],
        techs: ["React", "Next", "Typescript"],
      },
      url: "https://tiproulette.com.co",
    },
    {
      title: "Tip Roulette (old)",
      description: `The same project in early phase and using vanilla js.`,
      info: {
        techs: ["Javascript", "CSS", "HTML"],
      },
      url: "https://stien95.github.io/tip-roulette-old/",
    },
  ];

  return (
    <article className={style.ProjectsContainer}>
      <h3>My Projects:</h3>
      <div className={style.projects_container}>
        {projectsList.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            description={project.description}
            info={project.info}
            url={project.url}
          />
        ))}
      </div>
    </article>
  );
}
