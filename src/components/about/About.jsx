import "./about-style.css";

const About = () => {
  return (
    <section  data-scroll-section data-scroll-speed="6"  className="about-section">
      <p
        data-scroll
        data-scroll-speed="1"
        className="about"
      >
      <p className='message'>Drop A Message</p>
    <input type="text" name="fullName" placeholder="Full Name" id="" />
    <input type="text" name="email" placeholder="Enter Email" id="" />
    <textarea name="" placeholder="Message" id="" /> 
      </p>
    </section>
  );
};

export default About;
