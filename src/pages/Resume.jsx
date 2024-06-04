import { useRef } from "react";
import "../styles/Resume.css";
import { FaDownload } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";

const Resume = () => {
  const resumePrin = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumePrin.current,
  });

  return (
    <div className="container mt-5 mb-5">
        <h2>Resume</h2>
        <button className="btn btn-primary mt-4 mb-5" onClick={handlePrint}>
          Resume <FaDownload />
        </button>
      <div ref={resumePrin} className="bg-white p-5 rounded shadow-sm">
        <div className="row">
          <h1>Alfonso Balderas Torres</h1>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Wizeline</h4>
              <h5>April 2021 - February 2023</h5>
              <p>
                <em>Software Engineer II</em>
              </p>
              <ul>
                <li>Front-end support for the development team.</li>
                <li>Innovation support for the project team.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>OCCMUNDIAL</h4>
              <h5>August 2013 - April, 2021</h5>
              <p>
                <em>Front-End Intermediate</em>
              </p>
              <ul>
                <li>
                  Leaser for Ad-hoc recruitment pages for Companies and
                  Universities
                </li>
                <li>
                  HTML5 and CSS designer for OCC Platforms and Customized sites.
                </li>
                <li>Front-End support for the development team.</li>
                <li>
                  EDI & XML data interchange with our clients and partners
                </li>
                <li>EDI Development and Monitoring.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Universidad Tecnologica Santa Catarina</h4>
              <h5>February 2012 - June 2013</h5>
              <p>
                <em>Web designer, Development and system support</em>
              </p>
              <ul>
                <li>
                  Creator of the project “Innovacion Tecnologica para la
                  Inclusion para Sordos” (Technological Innovation for Deaf
                  People Inclusion)
                </li>
                <li>Data Base Administrator</li>
                <li>Web development</li>
                <li>Websites designing</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>CEMEX S.A. De C.V.</h4>
              <h5>September 2010 - November 2011</h5>
              <p>
                <em>IT Technical Support</em>
              </p>
              <ul>
                <li>Preventive and corrective maintenance</li>
                <li>Network analysis and configuration</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>FullStack Coding Bootcamp</h4>
              <h5>2023 - Present</h5>
              <p>
                <em>Tecnológico de Monterrey</em>
              </p>
              <p>
                Command-line fundamentals HTML and CSS Git and GitHub Java
                JavaScript Third-party APIs (such as jQuery and Bootstrap)
                Server-side APIs, AJAX, and JSON Node.js Express.js Relational
                databases, such as MySQL Object-relational mapping (ORM) using
                Sequelize Model-View-Controller (MVC) framework Handlebars.js
                Unit testing Agile software development methodology Heroku
                Computer science fundamentals NoSQL databases, such as MongoDB
                Progressive web apps (PWAs) React MERN stack
              </p>
            </div>
            <div className="resume-item">
              <h4>Information and Communication Technologies Engineering</h4>
              <h5>2009 - 2013</h5>
              <p>
                <em>Universidad Tecnológica de Santa Catarina</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
