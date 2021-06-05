import "layout/components/Card/NewsCard.css";
import { traitWord } from "utils";

const NewsCard:React.FC<{
    title: String,
    description: String,
    thumbnail: String,
    auhtor: String,
    url: String
}> = ({
    title,
    description,
    thumbnail,
    auhtor,
    url
}) =>(
    <div className="news-card">
        <div className="meta">
            <div 
                className="photo" 
                style={{
                    background: `url(${thumbnail})`
                }}
            ></div>
        </div>
        <div className="description">
            <h1>{ traitWord(title, 20) }</h1>
            <h2>{ traitWord(auhtor, 20) }</h2>
            <p> 
                { traitWord(description, 200) }
            </p>
            <p className="read-more">
                <a 
                    href={url as string}
                    target="_blank"
                >Read More</a>
            </p>
        </div>
    </div>
);

export default NewsCard;
