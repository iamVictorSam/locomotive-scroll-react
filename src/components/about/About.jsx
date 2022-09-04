import "./about-style.css";

const About = () => {
  return (
    <section data-scroll-section  className="about-section">
      <p className='message'>Drop A Message</p>
    <input type="text" name="fullName" placeholder="Full Name" id="" />
    <input type="text" name="email" placeholder="Enter Email" id="" />
    <textarea name="" placeholder="Message" id="" /> 
  
    </section>
  );
};

export default About;
