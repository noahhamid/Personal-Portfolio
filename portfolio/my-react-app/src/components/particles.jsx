import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse", // Change to repulse mode
          },
        },
        modes: {
          repulse: {
            distance: 80, // Distance at which particles are repelled
            duration: 0.4, // Smoothness of the repulsion
          },
        },
      },

      particles: {
        color: {
          value: "#ffffff", // Particle color
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1, // Slow particle movement
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 400, // More particles
        },
        opacity: {
          value: 0.7, // Slightly transparent
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 }, // Smaller particles
          animation: {
            enable: true,
            speed: 0.5, // Slow size animation
            minimumValue: 1,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id={props.id}
      init={particlesLoaded}
      options={options}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Ensure particles are behind other content
      }}
    />
  );
};

export default ParticlesComponent;
