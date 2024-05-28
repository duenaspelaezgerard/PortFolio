    export function Contacto() {
    return (
        <div id="contacto" className="bg-gray-700 text-white pb-6">
            <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center font-bold pt-8 mb-8">
                CONTACTO
            </h1>
            <div className="relative z-10 container mx-auto px-4 md:px-12 xl:px-20 max-w-7xl text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="bg-gray-900 bg-opacity-50 m-4 rounded-lg text-white p-8 rounded-lg shadow-lg flex flex-col items-center">
                    <a href="https://www.linkedin.com/in/gerard-duenas-pelaez/"><img src="/linkedin-ico.png" alt="LinkedIn" className="w-16 h-16 mb-4" /></a>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2">LinkedIn</h3>
                    </div>
                </div>
                <div className="bg-gray-900 bg-opacity-50 m-4 rounded-lg text-white p-8 shadow-lg flex flex-col items-center">
                    <a href="mailto:gerdue13@gmail.com"><img src="https://www.svgrepo.com/show/501544/email.svg" alt="Correo Electrónico" className="w-16 h-16 mb-4 filter invert" /></a>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2">Correo Electrónico</h3>
                        <p className="text-lg">gerdue13@gmail.com</p>
                    </div>
                </div>
                <div className="bg-gray-900 bg-opacity-50 m-4 rounded-lg text-white p-8 rounded-lg shadow-lg flex flex-col items-center">
                    <img src="https://www.svgrepo.com/show/380067/phone-call.svg" alt="Teléfono" className="w-16 h-16 mb-4 invert" />
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2">Teléfono</h3>
                        <p className="text-lg">+34 601 310 001</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
