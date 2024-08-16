export default function Project(props) {
  //For props, I'm expecting
  //- title
  //- year
  return (
    <>
      <div className="card project-item">
        <div className="project-item_bg"></div>
        <div className="card-body d-flex  flex-column justify-content-between ps-3">
            <h4 className=" card-title project-title   display-6 fw-semibold">{props.projectName} </h4>
         
          <div className=" card-text project-dates  fs-5 ">
            <p className="fw-medium">
              - Start : {props.startDate} & End : {props.endDate}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
