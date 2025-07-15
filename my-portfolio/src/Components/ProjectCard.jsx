import React from "react";
import styled from "styled-components";

const ProjectCard = ({ image, title, description, tech }) => {
  return (
    <Card className='hover-glow'>
      <ImageWrapper>
        <img src={image} alt={title} />
      </ImageWrapper>
      <Content>
        <h3>{title}</h3>
        <p>{description}</p>
        <Tech>
          <TechLabel>Tech:</TechLabel> {tech}
        </Tech>
      </Content>
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  max-width: 350px;
  background-color: white;
  opacity: 0.9;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 15px;
  text-align: center;

  h3 {
    margin: 0;
    font-size: 1.25rem;
    color: #222;
  }

  p {
    margin-top: 8px;
    font-size: 0.95rem;
    color: #555;
  }
`;

const Tech = styled.div`
  margin-top: 10px;
  font-size: 0.9rem;
`;

const TechLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export default ProjectCard;
