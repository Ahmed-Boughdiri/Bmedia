import { RouteComponentProps } from "react-router";
import "layout/News/News.css";
import { NavBar } from "components";
import NewsFeed from "./NewsFeed";

const News:React.FC<RouteComponentProps> = ({ history }) =>{
    return (
        <div className="news-page-container">
            <NavBar 
                type="default"
                history={history}
            />
            <NewsFeed />
        </div>
    );
}

export default News;
