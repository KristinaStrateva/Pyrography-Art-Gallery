import { useEffect, useState } from "react";

export default function BestOffer({
    item,
}) {
    const [month, setMonth] = useState(null);
    const [year, setYear] = useState(null);

    useEffect(() => {
        const options = {month: 'long'};

        const month = new Date().toLocaleDateString('en-EN', options);
        
        setMonth(s => s = month);
    }, [month]);

    useEffect(() => {
        const options = {year: 'numeric'};

        const year = new Date().toLocaleDateString('en-EN', options);
        
        setYear(s => s = year);
    }, [year]);

    return (
        <div className="home-hero section-container">
            <div className="home-max-width max-width-container">
                <div className="home-hero1">
                    <div className="home-container03">
                        <div className="home-info">
                            <span className="home-text12">
                                <span>BEST SELLER</span>
                                <br />
                                <span>{month} / {year}</span>
                            </span>
                        </div>
                        <h1 className="home-text16 Heading-1">{item.name}</h1>
                        <div className="home-container04">
                            <span className="home-text17">FOR</span>
                            <span className="home-text18"> €{item.price}</span>
                        </div>
                        <div className="home-btn-group">
                            <button className="button">BUY NOW</button>
                        </div>
                    </div>
                    <img src={item.imageUrl} alt={item.name} className="home-image5" />
                </div>
            </div>
        </div>
    );
}