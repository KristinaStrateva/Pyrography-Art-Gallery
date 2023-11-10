import DetailsItem from "./DetailsItem";


export default function Details({
    name
}) {
    return (
        <div className="section-container column">
            <div className="section-container">
                <div className="max-width-container">
                    <div className="section-heading-section-heading">
                        <h1 className="section-heading-text Heading-2">
                            <span>{name}</span>
                        </h1>
                        <span className="section-heading-text1">
                            <span>
                                You can choose an item from this category
                            </span>
                        </span>
                    </div>
                    <div className="home-container08">

                        <DetailsItem item={{}} />

                    </div>
                </div>
            </div>
        </div>
    );
}