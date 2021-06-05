import "layout/About/About.css";
import { RouteComponentProps } from "react-router";
import { NavBar } from "components";
import AboutContent from "./AboutContent";

const About:React.FC<RouteComponentProps> = ({ history }) =>(
    <div className="about-page-container">
        <NavBar 
            type="default"
            history={history}
        />
        <AboutContent />
    </div>
);

export default About;
