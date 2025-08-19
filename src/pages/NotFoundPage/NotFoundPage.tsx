import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export function NotFoundPage() {
  return (
    <>
      <section id="wip">
        <div className="wip">
          <h1>
            Lost in space... this page doesn't exist.
          </h1>
          <Link to="/" className="return-button">
            Return
          </Link>
        </div>
      </section>
    </>
  )
}