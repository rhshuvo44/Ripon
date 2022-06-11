import React, { useEffect, useState } from "react";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("Project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, [projects]);
  return (
    <div className="p-12">
      <h1 className="text-5xl font-bold text-center">My Projects</h1>
      <div class="divider"></div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
