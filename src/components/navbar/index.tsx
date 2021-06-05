import Default from "./Default";
import { History } from "history";

const Index:React.FC<{
    type: "default",
    history: History
}> = ({
    type,
    history
}) =>(
    <>
        {
            (type === "default") && <Default history={history} />
        }
    </>
);

export default Index;
