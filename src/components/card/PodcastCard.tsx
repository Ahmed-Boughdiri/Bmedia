import "layout/components/Card/PodcastCard.css";
import theme from "theme";
import { traitWord } from "utils";

const PodcastCard:React.FC<{
    title: String,
    description: String,
    thumbnail: String
}> = ({
    title,
    description,
    thumbnail
}) =>(
    <div className="property-card">
        <div>
            <div 
                className="property-image" 
                style={{
                    backgroundImage: `url('${thumbnail}')`
                }}
            ></div>
        </div>
        <div className="property-description">
            <h5> { traitWord(title, 18) } </h5>
            <p>{ traitWord(description, 130) }</p>
        </div>
        <div>
            <div className="property-play-icons">
                <img src={theme.icons.play} alt="play" />
            </div>
        </div>
    </div>
);

export default PodcastCard;
