import { Outlet, Link } from 'react-router-dom';
import Account from '../Account/Account';
import LineIcon from 'react-lineicons';

import './Header.css';

const Header = () => {
    const headerMenuClickHandler = () => {
        let navbar = document.querySelector('nav');
        navbar.classList.contains('active') ? navbar.classList.remove('active') : navbar.classList.add('active');
    };

    const headerMenuCloseHandler = () => {
        let navbar = document.querySelector('nav');
        navbar.classList.remove('active');
    };

    return (
        <div>
            <header>
                <div className="container">
                    <div className="logo">
                        <img src={process.env.PUBLIC_URL + '/images/logo_clear.png'} alt="Anito Legends" />
                    </div>
                    <nav>
                        <ul>
                            <a className="menu-close-button" onClick={headerMenuClickHandler}>
                                <LineIcon name="close" size="lg" />
                            </a>
                            <li>
                                <Link to="/" className="header-link" onClick={headerMenuCloseHandler}>
                                    Anito Market
                                </Link>
                            </li>
                            <li>
                                <Link to="/summon" className="header-link" onClick={headerMenuCloseHandler}>
                                    Summoning
                                </Link>
                            </li>
                            <li>
                                <Link to="/gacha" className="header-link" onClick={headerMenuCloseHandler}>
                                    Gacha
                                </Link>
                            </li>
                            <li>
                                <Link to="/items" className="header-link" onClick={headerMenuCloseHandler}>
                                    Item Market
                                </Link>
                            </li>
                            <li>
                                <Link to="/exchange" className="header-link" onClick={headerMenuCloseHandler}>
                                    Token Exchange
                                </Link>
                            </li>

                            <Account className="ml-2" />
                        </ul>
                    </nav>
                    <a className="menu-button" onClick={headerMenuClickHandler}>
                        <LineIcon name="menu" size="lg" />
                    </a>
                </div>
            </header>
            <Outlet />
        </div>
    );
};

export default Header;
