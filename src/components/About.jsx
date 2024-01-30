import Abut from "../img/Abut.png";

const About = () => {
  return (
    <>
      <div
        style={{ marginTop: "4rem", width: "100%", height: "10px" }}
        className="about-scroll"
      ></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={Abut} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT US</h2>
            <p className="main-p">
              Welcome to Java Charcoal, where our passion for grilling meets the
              finest charcoal briquettes in Indonesia. With a commitment to
              quality and excellence, we take pride in delivering an exceptional
              grilling experience for enthusiasts and professionals alike. Our
              journey began with the goal of providing you with the epitome of
              charcoal perfection.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
