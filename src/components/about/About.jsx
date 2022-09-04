import "./about-style.css";

const About = () => {
  return (
    <section data-scroll data-scroll-section data-scroll-speed="7" //   data-scroll
    
    className="about-section">
    <p data-scroll   className='message'>Drop a Message</p>
    <div className=" op-class" data-scroll data-scroll-repeat   data-scroll-class="fadeIn">
      <input  type="text" name="fullName" placeholder="Full Name" id="" />
      <input type="text" name="email" placeholder="Enter Email" id="" />
      <textarea name="" placeholder="Message" id="" /> 
      </div>
  
    </section>
  );
};

export default About;
