import Twitter from "./../Images/Twitter Icon.png";
import Instagram from "./../Images/Instagram Icon.png";
import GitHub from "./../Images/GitHub Icon.png";

export default function footer() {
  return (
    <div className="footer-section">
      <a href="https://twitter.com/OAdetohlar?t=HCoRstn05wqbes3WoH_8FQ&s=09">
        <img src={Twitter} />
      </a>
      <a href="https://www.instagram.com/ade_tohlar?utm_source=qr&igshid=YzU1NGVlODEzOA==">
        <img src={Instagram} />
      </a>
      <a href="https://github.com/Ade-tola20">
        <img src={GitHub} />
      </a>
    </div>
  );
}
