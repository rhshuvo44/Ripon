import React from "react";
import { useNavigate } from "react-router-dom";

const Project = ({ project }) => {
  const navigate = useNavigate();
  const handleProject = (id) => {
    navigate(`/singleProject/${id}`);
  };
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <figure className="ProjectImg">
        <img src={project.img1} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{project.name}</h2>
        <p>{project.short.split(".")[0]}</p>
        <div class="card-actions justify-left">
          <button
            onClick={() => handleProject(project.id)}
            class="btn btn-primary"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
