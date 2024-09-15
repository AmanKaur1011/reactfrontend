import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./projectInfo.css"

export default function ProjectInfo() {
    const { Id } = useParams(); // Get the projectId from the URL
    
    const [project, setProject] = useState(null);
    useEffect(() => {
        console.log(Id);
        const fetchProject = async () => {
          let response = await fetch(`https://portfolio-backend-gaek.onrender.com/api/projectDetail?Id=${Id}`);
          let data = await response.json();
          console.log(data);
          setProject(data);
        };
    
        fetchProject();
      }, [Id]);
      if (!project) {
        return <p>Loading project information...</p>; // Show a loading message while fetching
      }
  return (
    <div className="  mt-3 ps-5 pt-5 pe-5 projectInfoSection">
      
        
      <h1 className="fw-bold display-2"> {project.projectName}</h1>

     
      <div className=" fs-5 pe-3 mt-5">
        
      {project.projectUrl && (
        <p>Live Link: <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="fs-5 projectLink link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">{project.projectUrl}</a></p>
    )}
        <p>{project.projectDescription}</p>
        <p className="fs-5"><strong> Features: </strong>
        {
        
        (project.extraFeatures).map((feature)=>(


            <span> {feature} </span>



        ))
        
        
        }
        </p>
      </div>
      <div className=" mt-5">
        <div className="row justify-content-between ">
          <div className="col-md-4 col-sm-12 ">
            <h5 className="fw-semibold display-6 pb-3">Dates</h5>
            <p className="fs-5"><strong>Start Date:</strong> {project.startDate}</p>
            <p className="fs-5"><strong >End Date:</strong> {project.endDate}</p>
          </div>
          <div className="col-md-4 col-sm-12 ">
          <h5 className="fw-semibold display-6 pb-3"> Technologies </h5>

          <ul className="stackList text-start">
        {
          
        (project.technologies).map((technology) => (

          <li>
           
            <p className="fs-5">{technology}</p>

          </li>
        ))
        }
         
        </ul>
          </div>
          <div className="col-md-4 col-sm-12 ">
          <h5 className="fw-semibold display-6 pb-3"> GitHub Link </h5>
          <a href={`${project.repositoryUrl}`} className="fs-5 codebaseLink link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"> View the CodeBase</a>
          </div>
        </div>
      </div>
      
      
      <div className="projectImages container mt-5 mb-5">
  <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
    
    {/* Carousel Indicators */}
    <div className="carousel-indicators">
      {project.images.map((_, index) => (
        <button
          key={index}
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to={index}
          className={index === 0 ? 'active' : ''}
          aria-current={index === 0 ? 'true' : ''}
          aria-label={`Slide ${index + 1}`}
        ></button>
      ))}
    </div>

    {/* Carousel Items */}
    <div className="carousel-inner">
      {project.images.map((image, index) => (
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
          <img src={`https://portfolio-backend-gaek.onrender.com/public/${image}`} className="img-fluid projectImage" alt={`Slide ${index + 1} - project Picture`} aria-hidden="true" />
        </div>
      ))}
    </div>

  </div>
</div>

      {/* Render other project details here */}
    
   
    </div>
  );
}
