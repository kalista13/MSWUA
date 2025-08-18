

// Can RGX V Images
import canRgxVImg1 from "../assets/images/photos/can-rgx-v/can-rgx-v-img-1.png";
import canRgxVImg2 from "../assets/images/photos/can-rgx-v/can-rgx-v-img-2.png";
import canRgxVImg3 from "../assets/images/photos/can-rgx-v/can-rgx-v-img-3.png";
import canRgxVImg4 from "../assets/images/photos/can-rgx-v/can-rgx-v-img-4.png";
import canRgxVImg5 from "../assets/images/photos/can-rgx-v/can-rgx-v-img-5.png";
import canRgxVImg6 from "../assets/images/photos/can-rgx-v/can-rgx-v-img-6.png";


// Can ARX Images
import canArxIImg1 from "../assets/images/photos/can-arx-i/can-arx-i-img-1.png";
import canArxIImg2 from "../assets/images/photos/can-arx-i/can-arx-i-img-2.png";
import canArxIImg3 from "../assets/images/photos/can-arx-i/can-arx-i-img-3.png";
import canArxIImg4 from "../assets/images/photos/can-arx-i/can-arx-i-img-4.png";
import canARxIImg5 from "../assets/images/photos/can-arx-i/can-arx-i-img-5.png";
import canArxIImg6 from "../assets/images/photos/can-arx-i/can-arx-i-img-6.png";

// Can SBX Images
import canSbxVIImg1 from "../assets/images/photos/can-sbx/can-sbx-img-1.png";
import canSbxVIImg2 from "../assets/images/photos/can-sbx/can-sbx-img-2.png";
import canSbxVIImg3 from "../assets/images/photos/can-sbx/can-sbx-img-3.png";
import canSbxVIImg4 from "../assets/images/photos/can-sbx/can-sbx-img-4.png";
import canSbxVIImg5 from "../assets/images/photos/can-sbx/can-sbx-img-5.png";
import canSbxVIImg6 from "../assets/images/photos/can-sbx/can-sbx-img-6.png";

export type ImgItem = { id: string; src: string; alt: string; class: string};

export const projects: Record<string, {
  title: string;
  date: string;
  tagline: string;
  text: string;
  images: ImgItem[];
}
> = {
  "can-rgx-v": {
    title: "CAN-RGX V",
    date: "2021-22",
    tagline: "The beginning of our journey",
    text: `MSW’s journey began with the CAN-RGX V, a competition organized by Students for the Exploration and Development of Space Canada (SEDS Canada), the National Research Council of Canada (NRC), and the Canadian Space Agency (CSA). Their research focused on robotic experimentation using electroadhesion (EA) technology, investigating how EA could be integrated into robot wheels to enhance adhesion in challenging environments.`,
    images: [
      { id: "1", src: canRgxVImg1, alt: "Image 1", class: "img-1" },
      { id: "2", src: canRgxVImg2, alt: "Image 2", class: "img-2" },
      { id: "3", src: canRgxVImg3, alt: "Image 3", class: "img-3" },
      { id: "4", src: canRgxVImg4, alt: "Image 4", class: "img-4" },
      { id: "5", src: canRgxVImg5, alt: "Image 5", class: "img-5" },
      { id: "6", src: canRgxVImg6, alt: "Image 6", class: "img-6" },
    ],
  },
  "can-arx-i": {
    title: "CAN-ARX I",
    date: "2023-24",
    tagline: "The Second Milestone",
    text: `MSW participated in the Canadian Analog Research Expedition (CAN-ARX), developing a modular sensor for remote sensing. This sensor was designed to analyze air composition and surface albedo in an analog environment (an environment with harsh conditions, analogous to those we can’t access ourselves), with potential applications for space missions and remote healthcare.`,
    images: [
      { id: "1", src: canArxIImg1, alt: "Image 1", class: "img-1" },
      { id: "2", src: canArxIImg2, alt: "Image 2", class: "img-2" },
      { id: "3", src: canArxIImg3, alt: "Image 3", class: "img-3" },
      { id: "4", src: canArxIImg4, alt: "Image 4", class: "img-4" },
      { id: "5", src: canARxIImg5, alt: "Image 5", class: "img-5" },
      { id: "6", src: canArxIImg6, alt: "Image 6", class: "img-6" },
    ],
  },
  "can-sbx-vi": {
    title: "CAN-SBX",
    date: "2023-24",
    tagline: "A New Frontier",
    text: `As part of the Canadian Stratospheric Balloon Experiment Design Challenge (CAN-SBX VI), MSW’s subteam, AtmoTech, developed the Compact and Deployable Solar Array System. The system was designed to maximize power generation in the stratosphere, enhancing energy collection for space applications. The primary goal was to enhance energy generation efficiency by testing in the stratosphere, measuring power output, and extrapolating solar irradiation at different altitudes.`,
    images: [
      { id: "1", src: canSbxVIImg1, alt: "Image 1", class: "img-1" },
      { id: "2", src: canSbxVIImg2, alt: "Image 2", class: "img-2" },
      { id: "3", src: canSbxVIImg3, alt: "Image 3", class: "img-3" },
      { id: "4", src: canSbxVIImg4, alt: "Image 4", class: "img-4" },
      { id: "5", src: canSbxVIImg5, alt: "Image 5", class: "img-5" },
      { id: "6", src: canSbxVIImg6, alt: "Image 6", class: "img-6" },
    ],
  },
};