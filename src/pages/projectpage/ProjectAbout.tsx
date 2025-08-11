import './ProjectAbout.css';
import img1 from "../../assets/images/photos/can-rgx-v/can-rgx-v-img-1.png";
import img2 from "../../assets/images/photos/can-rgx-v/can-rgx-v-img-2.png";
import img3 from "../../assets/images/photos/can-rgx-v/can-rgx-v-img-3.png";
import img4 from "../../assets/images/photos/can-rgx-v/can-rgx-v-img-4.png";
import img5 from "../../assets/images/photos/can-rgx-v/can-rgx-v-img-5.png";
import img6 from "../../assets/images/photos/can-rgx-v/can-rgx-v-img-6.png";

export function ProjectAbout() {
  const images = [
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
    { src: img4, alt: "Image 4" },
    { src: img5, alt: "Image 5" },
    { src: img6, alt: "Image 6" },
  ]
  return (
    <>
      <section id="can-project">
        <h1>CAN-RGX V</h1>
        <p className="date">2021-22</p>
        <p>The beginning of our journey</p>
        <p className="can-project-text">MSW’s journey began with the CAN-RGX V, a competition organized by Students for the Exploration and Development of Space Canada (SEDS Canada), the National Research Council of Canada (NRC), and the Canadian Space Agency (CSA). Their research focused on robotic experimentation using electroadhesion (EA) technology, investigating how EA could be integrated into robot wheels to enhance adhesion in challenging environments.</p>

        <div className="img-section">
          {images.map((img, i) => (
            <img className={`img-${i+1}`} key={i} src={img.src} alt={img.alt} />
          ))}
        </div>
        <div className="img-overlay"></div>
      </section>
    </>
  )
}