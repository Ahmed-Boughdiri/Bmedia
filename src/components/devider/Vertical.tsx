import Styled,{ css } from "styled-components";

interface DeviderComponentProps {
    fill: String
}

const Devider = Styled.div<DeviderComponentProps>`
    height: 50px;
    width: 2px;
    border-radius: 4px;
    ${
        ({ fill }) =>{
            return css`
                background-color: ${fill as string};
            `;
        }
    }
`;

const Vertical:React.FC<DeviderComponentProps & {
    className?: String
}> = ({ fill, className }) =>(
    <Devider 
        fill={fill}
        className={className as string}
    ></Devider>
);

export default Vertical;
