import { useState, useEffect } from "react";
import styled from "styled-components";
import ContactWallpaper from "../assets/cluster.jpg";
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    document.title = "Contact | Kevin Barany Portfolio";
  }, []);

  return (
    <>
      <Container>
        <Wallpaper />

        <Wrapper className='hover-glow'>
          <FadeIn>
            <h2>Let's Get in Touch!</h2>
            <p>
              I'm always open to new opportunities and collaborations. Whether
              you have a project in mind, want to discuss ideas, or just want to
              say hello, feel free to reach out!
            </p>
            <a href='mailto:kevbarany@gmail.com'>
              <CiMail
                className='hover-darken'
                style={{ fontSize: "50px" }}
                alt='email icon'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/kevin-barany-4a9b18195/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CiLinkedin
                className='hover-darken'
                style={{ fontSize: "50px" }}
                alt='linkdin icon'
              />
            </a>
            <a
              href='https://github.com/Kevbin98'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithubSquare
                className='hover-darken'
                style={{ fontSize: "45px" }}
                alt='github icon'
              />
            </a>
          </FadeIn>
        </Wrapper>
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
  padding: 6rem 2rem 2rem;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 50%;
  max-width: 800px;
  min-height: 300px;
  padding: 2rem;
  background-color: white;
  opacity: 0.9;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  z-index: 2;

  @media (max-width: 768px) {
    width: 90%;
    padding: 1.5rem;
  }
`;

const Wallpaper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${ContactWallpaper});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const FadeIn = styled.div`
  animation: fadeIn 0.4s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default About;
