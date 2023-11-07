export default function RentByCategories() {
    return (
        <div className="max-width-container">
            <div className="section-heading-section-heading">
                <h1 className="section-heading-text Heading-2">
                    <span>RENT YOUR CAR BY CATEGORIES</span>
                </h1>
                <span className="section-heading-text1">
                    <span>
                        Rent car based on your preferences
                    </span>
                </span>
            </div>
            <div className="home-cards-container">
                <div className="category-card-category-card">
                    <img alt="image" src="images/pic2.jpg" className="category-card-image" />
                    <span className="category-card-text"><span>Sedan</span></span>
                </div>
                <div className="category-card-category-card">
                    <img alt="image" src="images/hatchback.png" className="category-card-image" />
                    <span className="category-card-text"><span>Hatchback</span></span>
                </div>
                <div className="category-card-category-card">
                    <img alt="image" src="images/SW.png" className="category-card-image" />
                    <span className="category-card-text"><span>SW</span></span>
                </div>
                <div className="category-card-category-card">
                    <img alt="image" src="images/pic5.jpg" className="category-card-image" />
                    <span className="category-card-text"><span>SUV/Mini SUV</span></span>
                </div>
                <div className="category-card-category-card">
                    <img alt="image" src="images/pic6.jpg" className="category-card-image" />
                    <span className="category-card-text"><span>Fast&Furiuos</span></span>
                </div>
            </div>
        </div>
    );
}