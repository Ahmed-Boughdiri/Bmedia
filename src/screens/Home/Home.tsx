import { NavBar } from "components";
import "layout/Home/Home.css";
import HomeBanner from "./HomeBanner";
import HomePodcastsFeed from "./HomePodcastsFeed";
import { RouteComponentProps } from "react-router";
import ErrorScreen from "./ErrorScreen";

const Home:React.FC<RouteComponentProps> = ({ history }) =>{
    return (
        <div className="home-page-container">
            <NavBar 
                type="default" 
                history={history}
            />
            <HomeBanner />
            <HomePodcastsFeed />
        </div>
    ); 
}

export default Home;
