import React from 'react';
import Project from './Project';

// Displays all projects and their information
const ProjectList = ({ projects, onDelete }) => {
    return (
        <div className="container">
          <div className="row">
            {projects.map((project, index) => (
              <div className="col-12 mb-4" key={index}>
                <Project project={project} onDelete={onDelete} />
              </div>
            ))}
          </div>
        </div>
      );
};

export default ProjectList;
