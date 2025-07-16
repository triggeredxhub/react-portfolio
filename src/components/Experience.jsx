const Experience = () => {
  return (
    <div className="shared-container">
      <article className="cv-summary" id="cv-summary">
        <h2>Work Experience</h2>
        <section>
          <h3>Internship – Full Stack Developer</h3>
          <p>
            <strong>Company:</strong> PLSP - IS <br />
            <strong>Duration:</strong> February 2025 – June 2025
          </p>
          <ul>
            <li>Developed features for an internal LMS using Flutter (UI) and Node.js (API)</li>
            <li>Designed and consumed REST APIs for assignment, material, and announcement modules</li>
            <li>Handled authentication using JWT and implemented role-based access</li>
            <li>Used Railway to deploy backend with MySQL, and integrated Firebase push notifications</li>
            <li>Practiced Git version control, team collaboration, and agile workflows</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default Experience;
