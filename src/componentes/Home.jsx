import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export function Home() {
 
  return (
    <div id="home" className="relative">
      <img src="/fondo.jpg" alt="" className="w-full h-svh object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white mx-auto">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-8">[GERARD DUEÑAS PELAEZ]</h1>
          <h3 className="text-2xl lg:text-xl mb-6 uppercase">¡BIENVENIDOS A MI PORTFOLIO!</h3>
          <ScrollLink
              to="proyectos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`bg-gray-600 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded text-lg lg:text-3xl`}
              onSetActive={() => setActiveSection('proyectos')}
            >
              PROYECTOS
            </ScrollLink>
        </div>
      </div>
    </div>
  );
}
