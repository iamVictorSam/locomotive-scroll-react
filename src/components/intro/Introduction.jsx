import image from "../../assets/profile.png";
import "./intro-style.css";

const Introduction = () => {
  return (
    <section
    className="intro-section"
      data-scroll-section
      data-scroll
      data-scroll-speed="6"
    >
      <div className="intro-title">
        <h1 data-scroll data-scroll-speed="9">
          Isaac Junior
          <br />A Frontend Engineer and Technical writer with a deep focus on
          creating pitch-perfect designs
        </h1>
      </div>
      <div className="intro-image">
        <img src={image} height={700} alt="profile" />
      </div>
    </section>
  );
};

export default Introduction;
