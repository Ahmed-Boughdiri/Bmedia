import Default from "./Default";

const Index:React.FC<{ 
    type: "default"
}> = ({ type, children }) =>(
    <>
        {
            (type === "default") && (
                <Default>
                    { children }
                </Default>
            )
        }
    </>
);

export default Index;
