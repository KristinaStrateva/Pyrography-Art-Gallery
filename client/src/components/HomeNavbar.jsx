export default function HomeNavbar({
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
                            <li className="navbar-link"><a href="#">HOME DECORATIONS</a></li>
                            <li className="navbar-link"><a href="#">GIFT SETS</a></li>
                            <li className="navbar-link"><a href="#">CUSTOM TEXT ON WOOD</a></li>
                        </ul>
                        <div className="navbar-logo-title navbar-link">
                            <a href="/"><img src="images/2.png" alt="logo" /></a>
                        </div>
                        <ul className="home-right">
                            <li className="navbar-link"><a href="#">LOGIN</a></li>
                            <li className="navbar-link"><a href="#">REGISTER</a></li>
                            {/* <li className="navbar-link"><a href="#"><img src="images/user-125-16.png" alt="user" /> ME</a></li> */}
                            <li className="navbar-link"><a href="#">Hello, {name}</a></li>
                            <li className="navbar-link"><a href="#">LOGOUT</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
}