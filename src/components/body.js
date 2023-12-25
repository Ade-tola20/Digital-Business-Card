import Mail from "./../Images/Mail.png";
import LinkedIn from "./../Images/linkedin.png";

export default function body() {
  return (
    <div className="body-div">
      <h1>Oduwole Adetola</h1>
      <p>Frontend Developer</p>
      <a href="https://tolawebsite.netlify.app/">adetola.website</a>
      <div className="btn-div">
        <a href="oduwoleadetohlar@gmail.com">
          <button className="email-btn">
            <img src={Mail} className="mail-img" />
            Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/faruq-oduwole-686934246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <button className="linkedin-btn">
            <img src={LinkedIn} />
            LinkedIn
          </button>
        </a>
      </div>
      <div className="bio-section">
        <h3 className="about-head">About</h3>
        <p>
          I'm a frontend developer with a particular interest in connecting
          passionate minds to build brilliant things.
          <br /> Let's turn ideas into impact.
        </p>
        <h3 className="about-head">Interests</h3>
        <p>
          UI/UX dabbler. Building from scratch. Gamer extraordinaire. Music
          maestro. Movie lover
        </p>
      </div>
    </div>
  );
}
