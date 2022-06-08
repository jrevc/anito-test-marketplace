import "./Footer.css";
import LineIcon from "react-lineicons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Anito Legends logo" />
        </div>
        <div className="social-media">
          <a href="https://discord.gg/mC5yEmkSvE" className="footer-icon" target="_blank" rel="noreferrer"><LineIcon name="discord" size="lg"/></a>
          <a href="https://medium.com/anito-legends" className="footer-icon" target="_blank" rel="noreferrer"><LineIcon name="medium" size="lg" /></a>
          <a href="https://twitter.com/AnitoLegendsNFT" className="footer-icon" target="_blank" rel="noreferrer"><LineIcon name="twitter-filled" size="lg" /></a>
          <a href="https://www.facebook.com/AnitoLegends/" className="footer-icon" target="_blank" rel="noreferrer"><LineIcon name="facebook-filled" size="lg" /></a>
          <a href="https://instagram.com/anitolegends" className="footer-icon" target="_blank" rel="noreferrer"><LineIcon name="instagram-filled" size="lg" /></a>
          <a href="https://t.me/anitolegendsnft" className="footer-icon" target="_blank" rel="noreferrer"><LineIcon name="telegram-original" size="lg" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;