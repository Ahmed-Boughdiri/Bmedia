import { NavBar, Preiview } from "components";
import "layout/Home/Home.css";
import HomeBanner from "./HomeBanner";
import HomePodcastsFeed from "./HomePodcastsFeed";
import { RouteComponentProps } from "react-router";
import { useState } from "react";

const Home:React.FC<RouteComponentProps> = ({ history }) =>{
    const [previewPodcast, setPreviewPodcast] = useState(false);
    const [podcastLink, setPodcastLink] = useState("");
    const handlePodcastClick = (link: String) =>{
        setPodcastLink(link as string);
        setPreviewPodcast(true);
    }
    return (
        <div className="home-page-container">
            <NavBar 
                type="default" 
                history={history}
            />
            <HomeBanner />
            <HomePodcastsFeed 
                onPodcastClick={handlePodcastClick} 
            />
            {
                previewPodcast && (
                    <Preiview 
                        onHide={() => setPreviewPodcast(false)} 
                        podcastLink={podcastLink}
                    />
                )
            }
        </div>
    ); 
}

export default Home;
