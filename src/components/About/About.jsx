import profileImg from '../../assets/profile.png';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-content container">
        {/* Photo side */}
        <div className="about-photo-col">
          <div className="about-photo-wrapper">
            <img
              src={profileImg}
              alt="Shandy Alfrzy — UI/UX Designer & Web Developer"
              className="about-photo"
              width="400"
              height="400"
            />
            <span className="about-photo-label">That's me ✦</span>
          </div>
        </div>

        {/* Text side */}
        <div className="about-text-col">
          <span className="about-label">ABOUT ME</span>
          <h2 className="about-headline">
            Designer who codes.<br />
            Developer who designs.
          </h2>
          <p className="about-bio">
            I'm Shandy — a UI/UX Designer and Web Developer who believes great digital
            products happen when design and engineering think together, not in silos.
          </p>
          <p className="about-bio">
            I'm passionate about crafting interfaces that don't just look good but feel
            intuitive — the kind of experiences people use without thinking about. From
            wireframes to fully functional code, I handle the entire journey independently.
          </p>
          <p className="about-bio">
            My approach is simple: understand the people, obsess over the details, and
            ship work that earns a second look. Whether it's a brand-new product or an
            existing one that needs a rethink, I bring both the pixels and the logic.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-number">2+</span>
              <span className="about-stat-label">YEARS EXPERIENCE</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">15+</span>
              <span className="about-stat-label">PROJECTS COMPLETED</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">100%</span>
              <span className="about-stat-label">INDEPENDENT WORK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
