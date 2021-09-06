import "./Preview.css";
import theme from "theme";

const Preview:React.FC<{ 
    onHide: () => void,
    podcastLink: String
}> = ({ 
    onHide,
    podcastLink
}) =>(
    <div className="preview-container">
        <div className="preview-card">
            <iframe 
                src={podcastLink as string} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            ></iframe>
        </div>
        <div className="preview-cancel-icon-container">
            <img 
                src={theme.icons.cancel}
                alt="" 
                onClick={onHide}
            />
        </div>
    </div>
);

export default Preview;
