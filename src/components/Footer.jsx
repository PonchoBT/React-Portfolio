import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <ul className="list-inline">
          <li className="list-inline-item fs-1"><a href="https://github.com/PonchoBT" className="text-white"><FaGithub /></a></li>
          <li className="list-inline-item fs-1"><a href="https://www.linkedin.com/in/alfonso-balderas-torres/" className="text-white"><FaLinkedin /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;