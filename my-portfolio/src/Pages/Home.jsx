import React from "react";
import EarthCanvas from "../Components/EarthCanvas.jsx";

const Home = () => {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <EarthCanvas />

      {/* Overlay content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <h1>Welcome to My Portfolio</h1>
        <p>Scroll down to explore more</p>
      </div>
    </div>
  );
};

export default Home;
