import '../styles/ProjectAbout.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../../data/projectAboutData';

export function ProjectAbout() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { slug } = useParams<{ slug: string }>();

  const project = slug ? projects[slug] : null;

  if (!project) return <p> Project not found </p>

  const { title, date, tagline, text, images } = project;

  return (
    <>
      <section id="can-project" onClick={() => setActiveId(null)}>
        <h1>{title}</h1>
        <p className="date">{date}</p>
        <p>{tagline}</p>
        <p className="can-project-text">{text}</p>
        <div className="helper-text">tap to view</div>
        
        <div className="img-section">
          {images.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className={`${img.class} ${activeId === img.id ? "is-active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                setActiveId(activeId === img.id ? null : img.id);
              }}
            />
          ))}
        </div>

        <div className="img-overlay"></div>
      </section>
    </>
  )
}