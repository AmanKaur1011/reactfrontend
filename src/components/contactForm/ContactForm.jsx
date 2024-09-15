import "./contactForm.css";
export default function ContactForm() {
    return (
        <section id ="contactSection">
            <div className=" container contact p-5  mt-5" >
                
                <div className="col">
                    <div className="row-md-auto pb-5">
                        <h2 className="display-5  pt-3 fw-bold">Want to work together? </h2>
                        <p className="fs-5 pt-3">Feel free to reach out to me</p>
                        <p className="fs-5">amanpreetdhindsa71@gmail.com</p>
                    </div>
                    <div className="row-md-auto">
                        <div className="row ">
                        <div className="col-md-auto col-auto ">
                            <a
                                href="mailto:amanpreetdhindsa71@gmail.com"
                                className="contact-button fw-semibold">
                                Contact Me
                            </a>
                        </div>

                        <div className="col-md-auto col-auto  ">
                            <div className="row ">
                                <div className="col-md-auto  col-auto">
                                    <a className="contactIcon" href="https://github.com/AmanKaur1011">
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                                <div className="col-md-auto col-auto ">
                                    <a
                                        className="contactIcon"
                                        href="https://www.linkedin.com/in/amanpreet-kaur-3045901b4/">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                </div>
                                {/* <div className="col-md-auto col-auto ">
                                    <a className="contactIcon" href="#">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
