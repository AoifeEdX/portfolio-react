import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap"; 
import projectsData from "../data/projects.json"; // Importing project data from JSON file
import "../pages/style.css"; 

function ProjectList() {
  return (
    <div>
      <Container fluid className="my-3 py-3">
        <Container>
          <Row className="mt-3 pt-3">
            <Col md={12} >
              {/* Heading for the project list */}
              <h2>My Projects</h2>
              <hr></hr> {/* Horizontal line */}
            </Col>
          </Row>
          {/* Row for displaying project cards */}
          <Row>
            {/* Mapping through the project data and rendering a ProjectCard component for each project */}
            {projectsData.map((project) => (
              <Col md={4} key={project.id}>
                {/* Rendering the ProjectCard component with project data as props */}
                <ProjectCard
                  imgPath={project.imgPath}
                  title={project.title}
                  description={project.description}
                  deployedLink={project.deployedLink}
                  githubLink={project.githubLink}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ProjectList;
