import BestOffer from "./BestOffer";

export default function HomeMain() {
    return (
        <div className="home-main">
            <BestOffer car={{}} />
            <div className="section-container column">
                <div className="max-width-container">
                    <div className="section-heading-section-heading">
                        <h1 className="section-heading-text Heading-2">
                            <span>SHOP BY CATEGORIES</span>
                        </h1>
                        <span className="section-heading-text1">
                            <span>
                                Start shopping based on the categories you are interested in
                            </span>
                        </span>
                    </div>
                    <div className="home-cards-container">
                        <div className="category-card-category-card">
                            <img alt="image" src="images/pic2.jpg" className="category-card-image" />
                            <span className="category-card-text"><span>Desks</span></span>
                        </div>
                        <div className="category-card-category-card">
                            <img alt="image" src="images/pic3.jpg" className="category-card-image" />
                            <span className="category-card-text"><span>Chairs</span></span>
                        </div>
                        <div className="category-card-category-card">
                            <img alt="image" src="images/pic4.jpg" className="category-card-image" />
                            <span className="category-card-text"><span>Tables</span></span>
                        </div>
                        <div className="category-card-category-card">
                            <img alt="image" src="images/pic5.jpg" className="category-card-image" />
                            <span className="category-card-text"><span>Lamps</span></span>
                        </div>
                        <div className="category-card-category-card">
                            <img alt="image" src="images/pic6.jpg" className="category-card-image" />
                            <span className="category-card-text"><span>Plants</span></span>
                        </div>
                        <div className="category-card-category-card">
                            <img alt="image" src="images/pic7.jpg" className="category-card-image" />
                            <span className="category-card-text">
                                <span>Decoration</span>
                            </span>
                        </div>
                        <div className="category-card-category-card">
                            <img alt="image" src="images/pic8.jpg" className="category-card-image" />
                            <span className="category-card-text">
                                <span>Collections</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="home-banner">
                    <div className="home-container05">
                        <h3 className="home-text19 Heading-3">MOBILLIO</h3>
                        <span className="home-text20">
                            <span></span>
                            <span>furniture</span>
                        </span>
                    </div>
                </div>
                <div className="home-container06 max-width-container">
                    <div className="home-container07">
                        <span className="home-text23">
                            <span>
                                Mobilio Stores Inc. are unique reseller of modern furnitors,
                                designer-made,
                            </span>
                            <br />
                            <span>home-decoration items, since 1997.</span>
                            <br />
                            <span>
                                Our legacy guarantees exceptional product quality, unique
                                designs and special prices for all of our product line-up.
                                Lorem ipsum, consectetur adipiscing elit duis tristique
                                sollicitudin nibh sit amet commodo nulla facilisi nullam
                                vehicula ipsum a arcu cursus vitae congue. Consectetur
                                adipiscing elit duis tristique sollicitudin nibh sit amet
                                commodo nulla facilisi nullam vehicula ipsum a arcu cursus
                                vitae congue
                            </span>
                        </span>
                        <button className="button">Read more</button>
                    </div>
                </div>
            </div>
            <div className="home-full-width-banner section-container">
                <div className="home-left4">
                    <div className="home-content">
                        <span className="home-text29">LOOKBOOKS</span>
                        <span className="home-text30">
                            Carefully curated furniture, well matched in style and looks
                        </span>
                    </div>
                    <div className="home-btn button">
                        <span className="home-text31">Explore now</span>
                    </div>
                </div>
                <img alt="Rectangle13271410" src="images/pic9.jpg" className="home-image6" />
            </div>
            <div className="section-container">
                <div className="max-width-container">
                    <div className="section-heading-section-heading section-heading-root-className-name">
                        <h1 className="section-heading-text Heading-2">
                            <span>Our blog</span>
                        </h1>
                        <span className="section-heading-text1">
                            <span>
                                Read the latest news and furniture related articles
                            </span>
                        </span>
                    </div>
                    <div className="home-container08">
                        <div className="blog-post-card-blog-post-card blog-post-card-root-className-name">
                            <img alt="image" src="images/pic10.jpg" className="blog-post-card-image" />
                            <div className="blog-post-card-container">
                                <span className="blog-post-card-text">
                                    <span>Chic sofa designs for 2022</span>
                                </span>
                                <span className="blog-post-card-text1">
                                    <span>
                                        Consectetur adipiscing elit duis tristique sollicitudin
                                        nibh
                                    </span>
                                </span>
                                <a href="#" className="button">
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div className="blog-post-card-blog-post-card">
                            <img alt="image" src="images/pic11.jpg" className="blog-post-card-image" />
                            <div className="blog-post-card-container">
                                <span className="blog-post-card-text">
                                    <span>Unique natural color combinations</span>
                                </span>
                                <span className="blog-post-card-text1">
                                    <span>
                                        Consectetur adipiscing elit duis tristique sollicitudin
                                        nibh
                                    </span>
                                </span>
                                <a href="#" className="button">
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div className="blog-post-card-blog-post-card">
                            <img alt="image" src="images/pic12.jpg" className="blog-post-card-image" />
                            <div className="blog-post-card-container">
                                <span className="blog-post-card-text">
                                    <span>Special combinations for nature lovers</span>
                                </span>
                                <span className="blog-post-card-text1">
                                    <span>
                                        Consectetur adipiscing elit duis tristique sollicitudin
                                        nibh
                                    </span>
                                </span>
                                <a href="#" className="button">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}