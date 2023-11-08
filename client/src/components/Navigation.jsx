import { Link } from 'react-router-dom';

export default function Navigation({
    name
}) {
    return (
        <div className="home-navbar">
            <header data-role="Header" className="home-header max-width-container">
                <div className="home-navbar1">
                    <div className="home-container01">
                        <input type="text" placeholder="search" className="home-textinput input" />
                    </div>
                    <div className="home-middle">
                        <ul className="home-left">
                            <li className="navbar-link"><Link to="/collection/homeDecorations">HOME DECORATIONS</Link></li>
                            
                            <li className="navbar-link"><Link to="/collection/giftSets">GIFT SETS</Link></li>
                            <li className="navbar-link"><Link to="/collection/customTextOnWood">CUSTOM TEXT ON WOOD</Link></li>
                        </ul>
                        <div className="navbar-logo-title navbar-link">
                            <Link to="/"><img src="images/2.png" alt="logo" /></Link>
                        </div>
                        <ul className="home-right">
                            <li className="navbar-link"><Link to="/users/login">LOGIN</Link></li>
                            <li className="navbar-link"><Link to="/users/register">REGISTER</Link></li>
                            {/* <li className="navbar-link"><a to="#"><img src="images/user-125-16.png" alt="user" /> ME</a></li> */}
                            <li className="navbar-link"><Link to="#">Hello, {name}</Link></li>
                            <li className="navbar-link"><Link to="/users/logout">LOGOUT</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
}