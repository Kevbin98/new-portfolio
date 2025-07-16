import { useState, useEffect } from "react";
import EarthCanvas from "../Components/EarthCanvas.jsx";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";
import { SiHtml5, SiJavascript, SiMongodb, SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import Diploma from "../assets/diploma.png";

const Home = () => {
  const [tabs, setTabs] = useState(true);

  useEffect(() => {
    document.title = "Home | Kevin Barany Portfolio";
  }, []);

  return (
    <>
      <Container>
        <EarthCanvas />

        {/* Toggle Button */}
        <ToggleButton
          className='hover-glow'
          onClick={() => setTabs(!tabs)}
          open={tabs}
        >
          <IoIosArrowBack />
        </ToggleButton>

        {/* Info Panel */}
        <InfoPanel className='hover-glow' open={tabs}>
          <div style={{ textAlign: "center" }}>
            <h1>Welcome to my portfolio</h1>
            <p>
              Hi, my name is Kevin Barany. I'm a passionate full-stack developer
              from Montreal, Canada 🍁 with a love for building beautiful,
              performant, and user-focused web applications. Whether it’s
              bringing designs to life or solving tough backend challenges, I’m
              always excited to turn ideas into reality.
            </p>
          </div>
          <div
            style={{
              fontSize: "3rem",
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <SiHtml5 className='hover-darken' />
            <SiCss3 className='hover-darken' />
            <SiJavascript className='hover-darken' />
            <SiMongodb className='hover-darken' />
            <FaReact className='hover-darken' />
            <FaNode className='hover-darken' />
          </div>
          <div>
            <img
              src={Diploma}
              alt='Diploma'
              className='hover-darken'
              style={{ width: "100%", marginTop: "1rem", borderRadius: "8px" }}
            />
          </div>
        </InfoPanel>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ open }) => (open ? "calc(50% + 260px)" : "10px")};
  transform: translateY(-50%)
    rotate(${({ open }) => (open ? "0deg" : "180deg")});
  background-color: white;
  border-radius: 5px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    left: ${({ open }) => (open ? "calc(100% - 40px)" : "5px")};
    height: 35px;
    width: 35px;
  }
`;

const InfoPanel = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ open }) => (open ? "50%" : "-600px")};
  transform: translate(-50%, -50%);
  background-color: white;
  opacity: 0.95;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  z-index: 10;
  transition: left 0.5s ease;

  p {
    margin-top: 10px;
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    padding: 12px;
    font-size: 0.9rem;
  }
`;

export default Home;
