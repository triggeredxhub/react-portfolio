const Contact = () => {
  return (
    <div className="additional-content" id="additional-content">
      <h2>Connect with Me</h2>
      <div className="contact-icons">
        <a href="https://facebook.com/yourusername" target="_blank" title="Facebook" rel="noreferrer">
          <img src="../../src/assets/icons/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://github.com/triggeredxhub" target="_blank" title="GitHub" rel="noreferrer">
          <img src="../../src/assets/icons/github.svg" alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" title="LinkedIn" rel="noreferrer">
          <img src="../../src/assets/icons/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="mailto:your.email@example.com" title="Gmail">
          <img src="../../src/assets/icons/google-gmail.svg" alt="Gmail" />
        </a>
        <a href="https://discord.com/users/yourdiscordid" target="_blank" title="Discord" rel="noreferrer">
          <img src="../../src/assets/icons/discord.svg" alt="Discord" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
