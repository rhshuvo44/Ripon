import React from "react";
import autoParts from "../../Images/auto-parts.png";
import iphone from "../../Images/iphone.png";
import moveHome from "../../Images/move-home.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="p-12">
      <h1 className="text-5xl font-bold text-center">My Projects</h1>
      <div class="divider"></div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure className="ProjectImg">
            <img src={autoParts} alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Auto Parts</h2>
            <p>This is a Responsive MERN-Stack Manufacturer web application.</p>
            <div class="card-actions justify-left">
              <a
                href="https://auto-parts-4490a.web.app/"
                class="btn btn-primary"
              >
                Live website
              </a>
            </div>
          </div>
        </div>
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure className="ProjectImg">
            <img src={iphone} alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Apple-Warehouse</h2>
            <p>Warehouse Management Application For Apple Store.</p>
            <div class="card-actions justify-left">
              <a
                href="https://auto-parts-4490a.web.app/"
                class="btn btn-primary"
              >
                Live website
              </a>
            </div>
          </div>
        </div>
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure className="ProjectImg">
            <img src={moveHome} alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Move Home</h2>
            <p>Application to Service Provide.</p>
            <div class="card-actions justify-left">
              <a
                href="https://auto-parts-4490a.web.app/"
                class="btn btn-primary"
              >
                Live website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
