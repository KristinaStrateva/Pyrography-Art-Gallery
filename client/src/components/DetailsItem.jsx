export default function DetailsItem({
    name,
    imageUrl,
    description,
}) {
    return (
        <div className="blog-post-card-blog-post-card">
            <img alt={name} src={imageUrl} className="blog-post-card-image" />
            <div className="blog-post-card-container">
                <span className="blog-post-card-text">
                    <span>{name}</span>
                </span>
                <span className="blog-post-card-text1">
                    <span>
                        {description}
                    </span>
                </span>
                <a href="#" className="button">
                    More details
                </a>
            </div>
        </div>
    );
};