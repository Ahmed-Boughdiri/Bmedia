import Light from "./Light";
import Primary from "./Primary";

const Index:React.FC<{
    type: "light" | "primary",
    size?: "small" | "medium" | "large"
}> = ({ 
    type, 
    children,
    size
}) =>(
    <>
        {
            (type === "light") && (
                <Light size={size}>
                    { children }
                </Light>
            )
        }
        {
            (type === "primary") && (
                <Primary size={size}>
                    { children }
                </Primary>
            )
        }
    </>
);

export default Index;
