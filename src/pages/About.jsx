import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="container mt-5 mb-5">
      <h1>About me</h1>
      <div className="text-center mt-5 mb-5">
        <img
          src="https://media.licdn.com/dms/image/D5603AQEloN9RgATjTg/profile-displayphoto-shrink_200_200/0/1713298470309?e=1723075200&v=beta&t=61UPx-F9VRPkf9xkeJrQXzoEDOy5r63FH9vNQYIILdc"
          alt="Profile"
          className="rounded-circle mb-3"
          style={{ width: "150px", height: "150px" }}
        />
        <h1>Alfonso Balderas Torres</h1>
      </div>
      <p>
        I am a responsible and productive person. I enjoy teamwork because I can
        learn and teach what I have learned. I like to grow as the company does,
        innovating and contributing with ideas that boost the company`s growth.
        I am a person who does not know what limit means. I consider that being
        a hearing-impaired person does not prohibit me from working at the same
        level as a hearing person.
      </p>
      I am Deaf, although I do not consider it to be a disability. I can
      participate as a listener and communicate by writing. I share the link:
      <Link
        to="https://deaftech.com.mx/ACCESSIBILITY-GUIDE-FOR-DEAF-WORKERS-IN-SOFTWARE-COMPANIES.pdf"
        target="_blank"
      >
        {" "}
        ACCESSIBILITY GUIDE FOR DEAF WORKERS IN SOFTWARE COMPANIES{" "}
      </Link>
    </div>
  );
}
