import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="home-footer">
            <div className="max-width-container">
                <footer className="home-footer1">
                    <div className="home-container09">
                        <h3 className="home-text32 Heading-3">VESSEY'S ART SHOP</h3>
                        <span className="home-text33">
                            <span>25th September, Dobritch</span>
                            <br />
                            <span>Bulgaria</span>
                        </span>
                        <span className="home-text36">(359) 8994 292 80</span>
                        <span className="home-text37">veselina_hendry@gmail.com</span>
                    </div>
                    <div className="home-links-container">
                        <div className="home-container10">
                            <span className="home-text38">Categories</span>
                            <Link to="/collection/homeDecorations" className="home-text39">Home Decoration</Link>
                            <Link to="/collection/giftSets" className="home-text40">Gift Sets</Link>
                            <Link to="/collection/customTextOnWood" className="home-text41">Custom text on wood</Link>
                        </div>
                        <div className="home-container11">
                            <span className="home-text45">Company</span>
                            <Link to="#" className="home-text46">Shop</Link>
                            <Link to="#" className="home-text47">Lookbook</Link>
                            <Link to="#" className="home-text48">Specials</Link>
                            <Link to="/about" className="home-text49">About</Link>
                        </div>
                        <div className="home-container12">
                            <span className="home-text51">Resources</span>
                            <Link to="#" className="home-text52">Contact us</Link>
                            <Link to="#" className="home-text53">Order</Link>
                            <Link to="#" className="home-text54">Track your order</Link>
                            <Link to="#" className="home-text55">Shipping &amp; Delivery</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}