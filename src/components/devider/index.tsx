import Vertical from "./Vertical";

const Index:React.FC<{
    type: "vertical",
    fill: String,
    className?: String
}> = ({ type, fill, className }) =>(
    <>
        {
            (type === "vertical") && (
                <Vertical 
                    fill={fill} 
                    className={className}
                />
            )
        }
    </>
);

export default Index;
