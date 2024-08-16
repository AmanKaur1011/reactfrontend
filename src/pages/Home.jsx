import ProjectList from "../components/projects/ProjectList";
import SkillsList from "../components/skills/SkillsList";
import ContactForm from "../components/contactForm/ContactForm";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


import "./home.css";
export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      console.log(location.hash);
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <main className="">
      <div
        className=" ps-3 pt-3 pe-3  roundedness mt-3  text-center"
        id="heroBanner">
        <div className="pt-3">
          <h1 className="display-1 fw-bold">Hello, world!
          </h1><img src="./images/Waving Hand.gif" alt="waving hand" aria-hidden="true"></img>

          <div className="fs-3 fw-normal pt-4">
            <h2 className="myName display-4 fw-bold"> I'm Amanpreet Kaur</h2>
            <p  className="pt-3">A passionate Full Stack Developer based in Toronto</p>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 mb-5 ">
          <div className="profile-pic">
          <img src="./images/cartoonMe.PNG"  className="img-fluid" alt="MyPicture"></img>
          </div>
        </div>
        <div className="pb-3 text-center">
          {/* <a
      href="/resumes/resume.pdf" download="resume.pdf" className="resumeButton fw-medium" >
      Download  My Resume
    </a> */}
    <a
      href="https://drive.google.com/file/d/1g4A-B2127XrHUpHXVKfGg_W4IyGXK6rV/view?usp=sharing"  className="resumeButton fw-medium" >
      My Resume
    </a>
    </div>
      </div>
      <SkillsList/>
      <div className="bottomPart">
     
      <ProjectList  />
      
      <ContactForm/>
      
      </div>
    </main>
  );
}
