import './ProjectAbout.css';
import img1 from "../../assets/images/photos/can-rgx-v/can-rgx-v-img-1.png";
import img2 from "../../assets/images/photos/can-rgx-v/can-rgx-v-img-2.png";
import img3 from "../../assets/images/photos/can-rgx-v/can-rgx-v-img-3.png";
import img4 from "../../assets/images/photos/can-rgx-v/can-rgx-v-img-4.png";
import img5 from "../../assets/images/photos/can-rgx-v/can-rgx-v-img-5.png";
import img6 from "../../assets/images/photos/can-rgx-v/can-rgx-v-img-6.png";
import { useState } from 'react';

type ImgItem = { id: string; src: string; alt: string; class: string};

export function ProjectAbout() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const images: ImgItem[] = [
    { id: "1", src: img1, alt: "Image 1", class: "img-1"},
    { id: "2", src: img2, alt: "Image 2", class: "img-2" },
    { id: "3", src: img3, alt: "Image 3", class: "img-3" },
    {id: "4", src: img4, alt: "Image 4", class: "img-4"},
    {id: "5", src: img5, alt: "Image 5", class: "img-5"},
    {id: "6", src: img6, alt: "Image 6", class: "img-6"},
  ]

  return (
    <>
      <section id="can-project">
        <h1>CAN-RGX V</h1>
        <p className="date">2021-22</p>
        <p>The beginning of our journey</p>
        <p className="can-project-text">
          MSW’s journey began with the CAN-RGX V, a competition organized by Students for the Exploration and Development of Space Canada (SEDS Canada), the National Research Council of Canada (NRC), and the Canadian Space Agency (CSA). Their research focused on robotic experimentation using electroadhesion (EA) technology, investigating how EA could be integrated into robot wheels to enhance adhesion in challenging environments.
        </p>

        <div className="img-section">
          {images.map((img) => (
            <img 
              className={`${img.class} ${activeId === img.id ? "is-active" : ""}`}
              onClick={() => setActiveId(activeId === img.id ? null : img.id)}
              key={img.id} 
              src={img.src} 
              alt={img.alt} 
            />
          ))}
        </div>

        <div className="img-overlay"></div>
      </section>
    </>
  )
}