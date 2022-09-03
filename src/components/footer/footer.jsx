import './footer-style.css';
import Card from '../Card';

const footer = () => {
  return (
    <section data-scroll-section  className="footer-section">
    
    <Card
    data-scroll
    data-scroll-speed="9"
    // data-scroll-position="top"
    data-scroll-repeat
    data-scroll-direction="horizontal"
    image="https://2e4efd3ddd5ec0b50028-7d521b783d142fa14612a0034dea730a.ssl.cf2.rackcdn.com/gallery/2008/08/3190854_1316217600_gallery_image_3072799.jpg"
    title="Design & React Meetup"
    location="Downtown, Seattle WA"
    description="Designers react to JavaScript. Join us in our monthly meetup where designers gather to share newbie React knowledge."
  />
  <Card
   
    image="https://2e4efd3ddd5ec0b50028-7d521b783d142fa14612a0034dea730a.ssl.cf2.rackcdn.com/gallery/2008/08/3190854_1316217600_gallery_image_3072799.jpg"
    title="Design & React Meetup"
    location="Downtown, Seattle WA"
    description="Designers react to JavaScript. Join us in our monthly meetup where designers gather to share newbie React knowledge."
  />
  <Card
   
    image="https://2e4efd3ddd5ec0b50028-7d521b783d142fa14612a0034dea730a.ssl.cf2.rackcdn.com/gallery/2008/08/3190854_1316217600_gallery_image_3072799.jpg"
    title="Design & React Meetup"
    location="Downtown, Seattle WA"
    description="Designers react to JavaScript. Join us in our monthly meetup where designers gather to share newbie React knowledge."
  />
    </section>
  )
}

export default footer