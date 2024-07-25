export function SobreMi() {
  return (
    <div id="sobremi" className="bg-gray-700 text-white flex flex-col justify-center items-center w-full mt-10 mb-10">
      <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center font-bold pt-10">SOBRE MÍ</h1>
      <div className="flex flex-row justify-center items-center w-full sm:flex-col mt-5">
        <div className="md:w-1/2 p-4 order-1 text-center text-white">
          <p className="mb-8 text-base md:text-lg">Como <strong>Desarrollador Web Front-End</strong>, me especializo en la creación de experiencias de usuario impactantes y funcionales para páginas web y aplicaciones.</p>
          <p className="mb-8 text-base md:text-lg">Mi enfoque se basa en la construcción de interfaces intuitivas que no solo sean atractivas visualmente, sino que también mejoren la usabilidad y la interacción del usuario.</p>
          <p className="mb-8 text-base md:text-lg">Si deseas conocer más sobre mi trabajo, puedes ver algunos ejemplos en la sección de <a href="#proyectos"><strong>Proyectos</strong></a>. Si tienes una oportunidad que se alinee con mi experiencia y pasión por el desarrollo web, estaré encantado de discutirla contigo.</p>
        </div>
        <div className="md:h-[300px] w-[300px] hidden md:block order-2">
          <a href="https://www.linkedin.com/in/gerard-duenas-pelaez/" target="_blank">
            <img src="/gerardduenas.jpg" alt="Gerard Dueñas" className="rounded-lg shadow-lg mx-auto sm:h-[300px] w-[300px]" />
          </a>
        </div>
      </div> 
    </div>
  );
}
