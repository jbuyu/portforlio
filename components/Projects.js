import React from "react";
import { Project } from "./Project";
import { projectDetails } from "../data";
import {motion} from 'framer-motion';


const Projects = () => {
  return (
    <div  className="min-h-full" id="projects">
      {projectDetails.map(
        ({ id, pane, name, summary, description, technologies, link, image, alt }) => (
          <div key={id}>
            <Project
              pane={pane}
              name={name}
              summary={summary}
              description={description}
              technologies={technologies}
              link={link}
              image={image}
            />
          </div>
        )
      )}
    </div>
  );
};
export default Projects;
