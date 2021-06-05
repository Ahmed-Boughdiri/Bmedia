import { Alert } from "components";
import theme from "theme";

const ErrorScreen:React.FC = ({ children }) =>(
    <div className="home-error-screen">
        <Alert 
            type="error" 
            icon={theme.icons.error}
        >
            { children }
        </Alert>
    </div>
);

export default ErrorScreen;
