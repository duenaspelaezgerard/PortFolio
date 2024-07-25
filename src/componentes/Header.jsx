import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timer;

    const handleScroll = () => {
      clearTimeout(timer);
      setIsVisible(true);

      timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      lastScrollY = window.scrollY;
    };

    const handleMouseMove = () => {
      clearTimeout(timer);
      setIsVisible(true);

      timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    };

    const handleScrollSpy = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScrollSpy);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  return (
    <div className={`fixed top-0 w-full z-50 bg-black transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <div className="flex justify-between items-center w-full py-2 px-4 bg-gray-900">
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
            <img src="/gerardduenas.jpg" alt="Avatar" className="object-cover w-full h-full" />
          </div>
          <h1 className="text-sm md:text-md font-bold text-gray-300">GERARD DUEÑAS</h1>
        </div>
        <div className="flex flex-col md:flex-row md:justify-end w-full md:w-auto mt-2 md:mt-0 space-y-2 md:space-y-0 md:space-x-6">
          <button
            className="md:hidden text-gray-300 text-sm font-bold hover:bg-gray-600 px-2 py-1 transition duration-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            MENU
          </button>
          <div className={`flex-col md:flex-row md:flex ${isOpen ? 'flex' : 'hidden'}`}>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`text-gray-300 text-sm font-bold px-2 py-1 transition duration-500 ${activeSection === 'home' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
              onSetActive={() => setActiveSection('home')}
            >
              HOME
            </ScrollLink>
            <ScrollLink
              to="sobremi"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`text-gray-300 text-sm font-bold px-2 py-1 transition duration-500 ${activeSection === 'sobremi' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
              onSetActive={() => setActiveSection('sobremi')}
            >
              SOBRE MÍ
            </ScrollLink>
            <ScrollLink
              to="habilidades"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`text-gray-300 text-sm font-bold px-2 py-1 transition duration-500 ${activeSection === 'habilidades' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
              onSetActive={() => setActiveSection('habilidades')}
            >
              HABILIDADES
            </ScrollLink>
            <ScrollLink
              to="trayectoria"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`text-gray-300 text-sm font-bold px-2 py-1 transition duration-500 ${activeSection === 'trayectoria' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
              onSetActive={() => setActiveSection('trayectoria')}
            >
              TRAYECTORIA
            </ScrollLink>
            <ScrollLink
              to="proyectos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`text-gray-300 text-sm font-bold px-2 py-1 transition duration-500 ${activeSection === 'proyectos' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
              onSetActive={() => setActiveSection('proyectos')}
            >
              PROYECTOS
            </ScrollLink>
            <ScrollLink
              to="contacto"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`text-gray-300 text-sm font-bold px-2 py-1 transition duration-500 ${activeSection === 'contacto' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
              onSetActive={() => setActiveSection('contacto')}
            >
              CONTACTO
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
}
