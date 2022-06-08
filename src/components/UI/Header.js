import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/images/logo_clear.png"} alt="Anito Legends" />
        </div>
        <nav>
          <ul>
            <li><button>Anito Gallery</button></li>
            <li><button>Summoning</button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;