import Error from "./Error";

const Alert:React.FC<{
    type: "error",
    icon?: String
}> = ({ type, icon="", children }) =>(
    <>
        {
            (type === "error") && (
                <Error icon={icon}>
                    { children }
                </Error>
            )
        }
    </>
);

export default Alert;
