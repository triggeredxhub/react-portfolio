import CvImage from '../../src/assets/image/CV.png';


const Hero = () => {
  return (
    <section id="main">
      <div className='shared-container'>

        <div className="container">
          <section id="cv">
            <img src={CvImage} alt="CV Photo" className="cv-image" />
          </section>
          <section className="cv-section">
            <h2>Hello, I'm Nathan</h2>
            <p>
              Full-stack developer with experience in mobile and web development. Skilled in Flutter, HTML, CSS,
              JavaScript, Node.js, REST APIs, and MySQL. Passionate about building scalable, user-focused
              applications.
            </p>
            <div className="cv-download-box">
              <div className="cv-info">
                <strong>Microsoft Word</strong>
                <p>File Size: 371 KB</p>
              </div>
              <a href="path-to-your-cv.docx" className="download-btn">Download</a>
            </div>
            <p className="note">
              <em>Note:</em> The profile photo in this CV is AI-generated for privacy and consistency. Sample
              project descriptions are included for demonstration purposes.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Hero;
