import image from '../../assets/profile.png';
import './intro-style.css';

const Introduction = () => {
  return (
    <div data-scroll-section  className='intro-section'>
      <section className='intro-title'>
      <h1 data-scroll data-scroll-speed="9">
      I am Sam Victor
      <br />A Frontend Engineer and Technical writer with a deep focus on
      creating pitch-perfect designs
      </h1>
      </section>
        <section  className='intro-image'>
                <img src={image} alt='profile'/>
                
        </section>
    </div>
  );
};

export default Introduction;
