export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-7 flex flex-col sm:flex-row justify-between items-center px-6">
      <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 ml-0 sm:ml-6 mb-4 sm:mb-0">
        <ul className="space-y-4 sm:space-y-0">
          <li className="flex items-center space-x-4">
            <i className="fa-solid fa-phone text-sm text-gray-300" />
            <a href="tel:+34601310001" className="text-sm font-bold">+34 601 31 00 01</a>
          </li>
          <li className="flex items-center space-x-4">
            <i className="fa-solid fa-envelope text-sm text-gray-300" />
            <a target="_blank" href="mailto:gerdue13@gmail.com" className="text-sm font-bold">gerdue13@gmail.com</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
        <a target="_blank" href="https://www.linkedin.com/in/gerard-duenas-pelaez/" rel="noopener noreferrer">
          <div className="w-8 h-8">
            <img src="/linkedin-ico.png" alt="LinkedIn" className="w-full h-full" />
          </div>
        </a>
        <a target="_blank" href="https://github.com/GerardDuenasPelaez" rel="noopener noreferrer">
          <div className="w-8 h-8">
            <img src="/github-ico.png" alt="GitHub" className="w-full h-full" />
          </div>
        </a>
      </div>
      <p className="text-sm font-bold sm:mr-6">Made by Gerard Dueñas &copy; 2024</p>
    </footer>
  );
}
