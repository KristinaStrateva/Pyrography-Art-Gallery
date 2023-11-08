export default function ShopByCategories() {
    return (
        <div className="section-container column">
            <div className="max-width-container">
                <div className="section-heading-section-heading">
                    <h1 className="section-heading-text Heading-2">
                        <span>SHOP BY CATEGORIES</span>
                    </h1>
                    <span className="section-heading-text1">
                        <span>
                            Make your purchase by your preferences
                        </span>
                    </span>
                </div>
                <div className="home-cards-container">
                    <div className="category-card-category-card">
                        <img alt="image" src="images/categories/homeDecoration/ideas_main_how-to-make-a-pyrography-home-sweet-home-sign.jpg" className="category-card-image" />
                        <span className="category-card-text"><span>Home Decorations</span></span>
                    </div>
                    <div className="category-card-category-card">
                        <img alt="image" src="images/categories/giftSets/best-diy-wood-burning-ideas-designs-art-featured-homebnc-1024x536.jpg" className="category-card-image" />
                        <span className="category-card-text"><span>Gift Sets</span></span>
                    </div>
                    <div className="category-card-category-card">
                        <img alt="image" src="images/categories/customTextOnWood/Custom-Wood-Burning-Cutting-Board-madebybarb-4.jpg" className="category-card-image" />
                        <span className="category-card-text"><span>Custom Text On Wood</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}