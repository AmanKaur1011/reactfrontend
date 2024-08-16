import {HashLink as Link} from "react-router-hash-link"
import "./header.css"
// Navigation bar 
export default function Nav() {

  function toggleMenu(){
    console.log("hello");
    document.querySelector("#main-navigation").classList.toggle("show-menu");
}
  return(
    <nav id="main-navigation">
      <button className="menu-toggle" onClick={toggleMenu}>
        
        <i className="fa-solid fa-bars menuIcon fa-2x"></i>
      </button>
      <ul className="row navItems  justify-content-center  gap-5">
        <li className="col-md-auto col-sm-12 text-start"><Link className="fs-5 navItem " to="/aboutMe">About</Link></li>
        <li className="col-md-auto col-sm-12 text-start"><Link  className="fs-5 navItem" to="/#MyProjects">Projects</Link></li>
        <li  className="col-md-auto col-sm-12 text-start"><Link className="fs-5 navItem"  to="/#MySkills">Skills</Link></li>
      </ul>
    </nav>
  )
}