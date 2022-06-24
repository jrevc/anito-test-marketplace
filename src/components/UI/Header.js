import { Outlet, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + "/images/logo_clear.png"} alt="Anito Legends" />
          </div>
          <nav>
            <ul>
              <li><Link to="/" className="header-link">Anito Market</Link></li>
              <li><Link to="/summon" className="header-link">Summoning</Link></li>
              <li><Link to="/gacha" className="header-link">Gacha</Link></li>
              <li><Link to="/items" className="header-link">Item Market</Link></li>
              <li><Link to="/exchange" className="header-link">Token Exchange</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  )
}

export default Header;