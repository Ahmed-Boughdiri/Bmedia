import { 
    Button as ReactBootstrapButton
} from "react-bootstrap";
import Styled,{ css } from "styled-components";

interface ButtonComponentProps {
    size?: "small" | "medium" | "large"
}

const Button = Styled(ReactBootstrapButton)<ButtonComponentProps>`
    background: #fff;
    color: #000;
    border-width: 0;
    font-weight: 600;
    ${
        ({ size="small" }) =>{
            if(size === "small")
                return css`
                    padding: 8px 15px;
                `;
            else if(size === "medium")
                return css`
                    padding: 12px 25px;
                `;
            else
                return css`
                    padding: 12px 35px;
                    font-size: 18px;
                `;
        }
    }
    &:hover {
        background: #fff;
        color: #000;
    }
`;

const Light:React.FC<ButtonComponentProps> = ({ 
    children,
    size
}) =>(
    <Button size={size}>
        { children }
    </Button>
);

export default Light;
