import { useEffect, useState } from "react";

export default function BestOffer({
    car,
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
                                <span>BEST OFFER</span>
                                <br />
                                <span>{month} / {year}</span>
                            </span>
                        </div>
                        <h1 className="home-text16 Heading-1">{car.name}</h1>
                        <div className="home-container04">
                            <span className="home-text17">FROM</span>
                            <span className="home-text18">€{car.price}/day</span>
                        </div>
                        <div className="home-btn-group">
                            <button className="button">RENT NOW</button>
                        </div>
                    </div>
                    <img src={car.imageUrl} alt={car.name} className="home-image5" />
                </div>
            </div>
        </div>
    );
}