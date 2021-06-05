import { Alert } from "components";
import theme from "theme";

const ErrorScreen:React.FC = ({ children }) =>(
    <div className="news-page-error-screen-container">
        <Alert
            type="error"
            icon={theme.icons.error}
        >
            { children }
        </Alert>
    </div>
);

export default ErrorScreen;
