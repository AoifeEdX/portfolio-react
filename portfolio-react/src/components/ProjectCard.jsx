import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../pages/style.css";

function ProjectCard({ imgPath, title, description, deployedLink, githubLink}) {
  return (
    // Card component for displaying project information
    <Card className="project-card-view my-5 border border-dark">
      {/* Image for the project */}
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        {/* Title of the project */}
        <Card.Title>{title}</Card.Title>
        {/* Description of the project */}
        <Card.Text>
          {description}
        </Card.Text>
          {/* Button for accessing the deployed project */}
          <Button variant="outline-dark mt-3" href={deployedLink} target="_blank" style={{ width: "100%" }}>
            Deployed project
          </Button>
          {/* Button for accessing the GitHub repository */}
					<Button variant="outline-danger mt-3" href={githubLink} target="_blank" style={{ width: "100%" }}>
            GitHub repo
          </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
