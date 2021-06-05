import "layout/Support/Support.css";
import { RouteComponentProps } from "react-router";
import { NavBar } from "components";
import SupportForm from "./SupportForm";

const Support:React.FC<RouteComponentProps> = ({ history }) =>(
    <div className="support-page-container">
        <NavBar 
            type="default"
            history={history}
        />
        <SupportForm />
    </div>
);

export default Support;
