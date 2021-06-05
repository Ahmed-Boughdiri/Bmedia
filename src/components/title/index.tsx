import Styled,{ css } from "styled-components";

interface TitleComponentProps {
    color?: String,
    textAlign?: String,
    size?: Number,
    uppercase?: Boolean
}

const TitleComponent = Styled.h1<TitleComponentProps>`
    ${
        ({ 
            color="#000", 
            textAlign="left", 
            size=30,
            uppercase=false
        }) =>{
            return css`
                color: ${color};
                text-align: ${textAlign as string};
                font-size: ${`${size}px`};
                text-transform: ${uppercase ? "uppercase" : "lowercase"};
            `;
        }
    }
`;

const Title:React.FC<TitleComponentProps> = ({ 
    children,
    color,
    textAlign,
    size,
    uppercase
}) =>(
    <TitleComponent
        color={color as string}
        textAlign={textAlign}
        size={size}
        uppercase={uppercase}
    >
        { children }
    </TitleComponent>
);

export default Title;
