import Nav from "./Nav";
import {  HashLink as Link } from "react-router-hash-link";
import "./header.css"
export default function Header() {
  return (
    <header id="header">
      <div className="container text-center">
        <div className="row  justify-content-between  align-items-center">
          <div className="col-md-1  col-auto d-inline">
            <a href="/">
              <img src="/images/PersonalLogo2.png" height="50" alt="Site Logo" ></img>
            </a>
          </div>
          <div className="col-md-auto col-auto navbar">
            <Nav />
          </div>
          <div className="col-md-2  col-auto text-end ">
            <Link  to ="/#contactSection" className="contactbtn fw-semibold">Let's Talk</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
