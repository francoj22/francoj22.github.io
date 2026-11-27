import type { PortfolioProject } from "../features/portfolio/domain/portfolio.types";
import useScrollReveal from "../hooks/useScrollReveal";

type PortfolioSectionProps = {
  projects: PortfolioProject[];
};

export default function PortfolioSection({ projects }: PortfolioSectionProps) {
  const gridRef = useScrollReveal(
    projects,
    ".portfolio-reveal",
    "portfolio-reveal-pending"
  );

  return (
    <section id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title wow fadeIn a1" data-wow-delay="0.1s">
            <h2>
              <i className="fa fa-th-list"></i>Portfolio
            </h2>
          </div>

          <div className="portfolio-grid" id="portfolio-item" ref={gridRef}>
            {projects.map((project) => (
              <div className="portfolio-reveal" key={project.title}>
                <article className="portfolio-card">
                  <div className="portfolio-image-wrap">
                    <img src={project.image} alt={project.alt} />
                  </div>
                  <div className="portfolio-card-body">
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <p className="portfolio-stack">{project.stack}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div
            className="market-place col m12 s12 z-depth-1 wow fadeIn a3"
            data-wow-delay="0.3s"
          >
            <ul>
              <li>
                <a href="http://github.com/francoj22">
                  <h3>Github</h3>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
