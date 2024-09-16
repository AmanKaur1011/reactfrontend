import Project from "./Project";
import {Link} from "react-router-dom"
import {useState, useEffect} from "react";
import "./project.css"

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjectList = async () => {
      let response = await fetch("https://portfolio-backend-gaek.onrender.com/api/projects");
      let data = await response.json();
      setProjects(data);
    }
    getProjectList();
  }, []);

  return (

    <section className="container ProjectSection mt-5" id="MyProjects">
      <h2 className="display-5 fw-bold pb-5"> My Projects</h2>
      <ul className="row gx-5 justify-content-center projects ps-0">
        {
          projects.map((project) => (
            <li  key={project._id} className="col-md-6  col-sm-12 mt-3 mb-3">
            <Link  to ={`/projectInfo/${project._id}`}>
            
            <Project 
            projectName={project.projectName} 
            startDate= {project.startDate}
            endDate= {project.endDate}
            projectUrl= {project.projectUrl}
             
             />
             
            </Link>
            </li>
          ))
        }
      </ul>
    </section>
  );
}