import React, { useState, useEffect } from 'react';

export function Home() {
 
  return (
    <div id="home" className="relative">
      <img src="/fondo.jpg" alt="" className="w-full h-svh object-cover opacity-70" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white mx-auto">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-8">[GERARD DUEÑAS PELAEZ]</h1>
          <h3 className="text-2xl lg:text-xl mb-6 uppercase">¡BIENVENIDOS A MI PORTFOLIO!</h3>
          <a href="#proyectos"><button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded text-lg lg:text-3xl">
            Proyectos
          </button></a>
        </div>
      </div>
    </div>
  );
}
