import { useState } from "react";
import styled from "styled-components";
import AboutWallpaper from "../assets/Pillars.jpg";

const TABS = [
  { name: "About" },
  { name: "Education" },
  { name: "Experience" },
  { name: "Skills" },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <Container>
      <Header className='hover-glow'>About</Header>
      <Wallpaper />

      <TabWrapper>
        <TabsContainer>
          {TABS.map(({ name }) => (
            <StyledTabButton
              key={name}
              onClick={() => setActiveTab(name)}
              $active={activeTab === name}
            >
              {name}
            </StyledTabButton>
          ))}
        </TabsContainer>

        <TabContent>
          <FadeIn>
            {activeTab === "About" && (
              <>
                <h2>Who I Am</h2>
                <p>
                  I'm a full-stack developer with a deep passion for music and a
                  lifelong curiosity for science and space. As a guitarist and
                  music enthusiast, I’ve always been drawn to creative
                  expression — and I found that same sense of challenge and
                  creativity in coding. What started as a fascination with
                  technology quickly turned into a genuine love for programming.
                  I specialize in HTML, CSS, JavaScript, React, Node, and
                  Express and I’m constantly expanding my skill set as I grow as
                  a developer. I’m excited to keep learning, building, and
                  pushing the boundaries of what I can create — both in code and
                  in music.
                </p>
              </>
            )}

            {activeTab === "Education" && (
              <>
                <h2>Education</h2>
                <ul>
                  <li>
                    Full-Stack Web Development Diploma – Concordia University
                    (2025)
                  </li>
                  <li>Python Bootcamp – Udemy (Ongoing)</li>
                  <li>
                    Diploma of Vocational Studies (DVS) - Accounting – West
                    Island Career Centre (WICC) (2020)
                  </li>
                </ul>
              </>
            )}

            {activeTab === "Experience" && (
              <>
                <h2>Experience</h2>
                <ul>
                  <li>Creator & Developer of Audiwav (2025 - present)</li>
                  <li>
                    Crew Leader – Ottinger Landscaping (06/2020 – 06/2025)
                  </li>
                  <li>
                    Accounts Payable Clerk – Safran Cabin (05/2022 – 10/2022)
                  </li>
                  <li>Cast Member – Cineplex Kirkland (12/2014 – 06/2020)</li>
                </ul>
              </>
            )}

            {activeTab === "Skills" && (
              <>
                <h2>Skills</h2>
                <ul>
                  <li>JavaScript / React / Node.js / Express</li>
                  <li>Firebase / MongoDB / REST APIs</li>
                  <li>Three.js / PixiJS / Web Audio API</li>
                  <li>Git / Responsive Design / UX</li>
                  <li>Python (Currently Learning)</li>
                </ul>
              </>
            )}
          </FadeIn>
        </TabContent>
      </TabWrapper>
    </Container>
  );
};

// Styled Components

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

const Wallpaper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${AboutWallpaper});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const TabWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 8rem;
  padding: 2rem;
  gap: 2rem;
  z-index: 2;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
`;

const TabsContainer = styled.div`
  width: 220px;
  min-width: 180px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 900px) {
    width: 100%;
    flex-direction: row;
    overflow-x: auto;
    padding: 0.5rem;
    justify-content: flex-start;

    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #aaa;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }
`;

const StyledTabButton = styled.button`
  background-color: ${({ $active }) =>
    $active ? "rgba(0, 0, 0, 0.05)" : "transparent"};
  color: black;
  border: 1px solid #ccc;
  border: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 900px) {
    white-space: nowrap;
    flex: 1 1 auto;
  }
`;

const TabContent = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  color: #111;
  line-height: 1.6;
  max-width: 700px;

  h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    color: black;
  }

  ul {
    padding-left: 1.25rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
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
