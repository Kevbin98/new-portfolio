import { useEffect } from "react";
import styled from "styled-components";
import ProjectsWallpaper from "../assets/milks.jpg";
import ProjectCard from "../Components/ProjectCard";
import audiWav from "../assets/audiwavEditor.png";
import ToneHQ from "../assets/tonehq.png";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Kevin Barany Portfolio";
  }, []);
  return (
    <>
      <Container>
        <Header className='hover-glow'>Projects</Header>
        <Wallpaper />
        <Grid>
          <a
            href='https://github.com/Kevbin98/AudiWav-audio-visualizer-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ProjectCard
              image={audiWav}
              alt='AudiWav'
              title='AudiWav'
              tech='React.js, JavaScript, Web Audio API, PixiJS'
              description='An audio visualizer app that allows users to upload audio files and visualize them in real-time using Web Audio API and PixiJS.'
            />
          </a>
          <a
            href='https://github.com/Kevbin98/ToneHq.app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ProjectCard
              image={ToneHQ}
              alt='ToneHQ'
              title='ToneHQ'
              tech='React.js, JavaScript, YouTube Data API v3, Three.js'
              description='A music discovery app that allows users to search for music videos and view them in a 3D environment using Three.js.'
            />
          </a>
          {/* You can add more ProjectCards here */}
        </Grid>
      </Container>
    </>
  );
};

const Header = styled.h1`
  font-size: 3rem;
  color: white;
  text-align: center;
  margin: 0;
  margin-top: 2rem;
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 6rem 2rem 2rem; // top padding accounts for navbar
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Wallpaper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${ProjectsWallpaper});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const Grid = styled.div`
  display: grid;
  margin-top: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  z-index: 1;
  max-width: 1200px;
  width: 100%;
  justify-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Projects;
