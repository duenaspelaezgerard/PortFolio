import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from 'react';

export function Proyectos() {
  const [isHovered, setIsHovered] = useState(null);

  const projects = [
    {
      src: "/tetris.png",
      title: "TETRIS",
      description: "Este es el clásico juego de Tetris recreado con JavaScript. Cuenta con funcionalidades completas, incluyendo giros de piezas, sistema de niveles, temporizador y clasificación de partidas.",
      projectLink: "https://tetris-vtfp.onrender.com/",
      tecnologias: "JavaScript, HTML5, CSS, Bootstrap"
    },
    {
      src: "/incidencias.png",
      title: "GESTOR DE INCIDENCIAS",
      description: "Esta es una aplicación web desarrollada con Vanilla JavaScript que permite registrar y gestionar incidencias o averías de los equipos en una escuela mediante un sistema de tickets.",
      projectLink: "https://gestordeincidencias.onrender.com/",
      tecnologias: "JavaScript, HTML5, CSS (Bootstrap)"
    },
    {
      src: "/juego_memory_pokemon.png",
      title: "POKEMON MEMORY GAME",
      description: "Este es un proyecto desarrollado con React en el que los usuarios pueden disfrutar de un juego de memoria con personajes de Pokémon. El juego cuenta con una base de datos gestionada por Supabase para almacenar los puntajes y el progreso de los jugadores.",
      projectLink: "https://pokemon-memory-game-huc9.onrender.com/",
      tecnologias: "JavaScript, HTML5, CSS (Tailwind), ReactJS, Supabase"
    }
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
    
  };

  function CardWithHover({ src, title, description, tecnologias, projectLink, index }) {
    return (
      <div className={`relative xl:h-[400px] w-full md:w-[400px] overflow-hidden transition-transform duration-300 ${isHovered === index ? 'rotateY-180' : 'rotateY-0'}`}
        onMouseEnter={() => setIsHovered(index)}
        onMouseLeave={() => setIsHovered(null)}
      >
        <div className="p-4 absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-80 transition-opacity duration-300 opacity-0 hover:opacity-100">
          <div className="text-white text-xl text-center px-4">
            <h4 className="font-medium text-xl mb-4">{title}</h4>
            <p className="text-sm">{description}</p>
            <p className="text-sm">Tecnologías aplicadas: <strong>{tecnologias}</strong></p>
            <div className="mt-4">
              <a href={projectLink} target="_blank" className="inline-block px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white font-semibold rounded"> VER PROYECTO</a>
            </div>
          </div>
        </div>
        <img className="w-full h-full object-cover" src={src} alt={title} />
      </div>
    );
  }

  return (
    <div id="proyectos" className="bg-gray-600 text-white relative mx-auto  md:px-12 xl:px-20 pt-7 pb-5">
      <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center font-bold pt-10 mb-8"> PROYECTOS </h1>
      <div className="max-w-[400px] mx-auto">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index}>
              <CardWithHover
                src={project.src}
                title={project.title}
                description={project.description}
                tecnologias={project.tecnologias}
                projectLink={project.projectLink}
                index={index}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
