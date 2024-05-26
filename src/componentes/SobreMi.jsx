export function SobreMi() {
  return (
    <div id="sobremi" className="bg-gray-700 text-white flex flex-col justify-center items-center w-full">
      <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center font-bold pt-8">SOBRE MÍ</h1>
      <div className="flex flex-row justify-center items-center w-full sm:flex-col mt-5">
        <div className="md:w-1/2 p-4 md:order-1 text-white">
          <p className="mb-8 text-base md:text-lg leading-loose"> Como <strong>Desarrollador Web Front-End</strong>, me especializo en la creación de experiencias de usuario impactantes y funcionales para páginas web y aplicaciones.</p>
          <p className="mb-8 text-base md:text-lg leading-loose">Mi enfoque se basa en la construcción de interfaces intuitivas que no solo sean atractivas visualmente, sino que también mejoren la usabilidad y la interacción del usuario.</p>
          <p className="mb-8 text-base md:text-lg leading-loose">Si deseas conocer más sobre mi trabajo, puedes ver algunos ejemplos en la sección de <strong>Proyectos</strong>. Si tienes una oportunidad que se alinee con mi experiencia y pasión por el desarrollo web, estaré encantado de discutirla contigo. </p>
        </div>
        <div className="md:h-[300px] w-[300px] order-2 mb-6">
          <img  src="/gerard dueñas.jpg" alt="Gerard Dueñas"  className="rounded-lg shadow-lg mx-auto w-full h-auto" />
        </div>
      </div> 
      </div>

  );
}
