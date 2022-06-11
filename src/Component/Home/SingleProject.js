import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProject.css";

const SingleProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch("/Project.json")
      .then((res) => res.json())
      .then((data) => {
        const currentProject = data.find((e) => e.id == id);
        setProject(currentProject);
      });
  }, [id]);
  const { name, short, img1, img2, img3, live, Tools, code } = project;
  return (
    <div className="p-12">
      <div className="card card-compact bg-base-100 shadow-xl">
        <h2 className="text-5xl font-bold mb-8 text-center">Project Details </h2>

        <figure className=" w-full">
          <img className="w-full h-fit" src={img1} alt={name} />
        </figure>
        <figure className=" w-full mt-10 mb-10">
          <img className="w-full " src={img2} alt={name} />
        </figure>
        <figure className=" w-full">
          <img className="w-full" src={img3} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{short}</p>
          <p>
            <span className="font-bold text-xl">Tools :</span> {Tools}
          </p>
          <div className="card-actions justify-center">
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary capitalize"
            >
              Live
            </a>
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary capitalize"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
