import { useState, useEffect } from "react";
import "./skillList.css";

export default function SkillsList() {
  const [skills, setSkills] = useState([]);
  // const listRef = useRef(null);

  useEffect(() => {
    const getSkillsList = async () => {
      let response = await fetch("https://portfolio-backend-gaek.onrender.com/api/skills");
      let data = await response.json();
      setSkills(data);
    };
    getSkillsList();
  }, []);

  // useEffect(() => {
  //   // Force reflow to ensure animation starts immediately
  //   if (listRef.current) {
  //     listRef.current.style.display = 'none';
  //     listRef.current.offsetHeight; // Trigger reflow
  //     listRef.current.style.display = 'flex';
  //   }
  // }, [skills]);

  return (
    
    <section className="skills-container  mt-5 mb-5 pt-5 pb-5" id="MySkills">
      <div className="skills-scroll-wrapper">
        <ul className="skills-list ">
          {skills.map((skill) => (
            <li key={skill._id} className="skill-item  ps-3 pe-3">
              <div className="d-flex justify-content-center">
              <img
                src={`https://portfolio-backend-gaek.onrender.com/public/${skill.ImagePath}`}
                height="70"
                width="70"
                alt="SkillImage" 
              />
              </div>
              <h5 className=" text-center mt-3 skillName fw-semibold ">{skill.skillName}</h5>
            </li>
          ))}
          {/* Duplicate the list for continuous effect */}
          {skills.map((skill) => (
            <li key={`${skill._id}-duplicate`} className="skill-item  ps-3 pe-3">
              <div className="d-flex justify-content-center">
              <img
                src={`https://portfolio-backend-gaek.onrender.com/${skill.ImagePath}`}
                height="70"
                width="70"
                alt="SkillImage"
              />
              </div>
              <h5 className="text-center mt-3 skillName fw-semibold">{skill.skillName}</h5>
            </li>
          ))}
        </ul>
      </div>
    </section>
    
  );
}
