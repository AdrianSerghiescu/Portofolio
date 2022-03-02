import { Particles } from "react-tsparticles";

export function ParticleSkill() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 10,
            density: {
              enable: true,
              value_area: 180,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          shape: {
            type: ["image", ""],
            image: [
              {
                src: "/images/html.svg",
                height: 20,
                width: 23,
              },
              {
                src: "/images/css.svg",
                height: 20,
                width: 23,
              },
              {
                src: "/images/react.svg",
                height: 20,
                width: 23,
              },
              {
                src: "/images/javascript.svg",
                height: 20,
                width: 23,
              },
              {
                src: "/images/github.svg",
                height: 20,
                width: 23,
              },
            ],
          },
          color: {
            value: "#ccc",
          },
          opacity: {
            value: 0.75,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 15,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 4,
              sync: false,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}
