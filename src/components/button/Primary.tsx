import { 
    Button as ReactBootstrapButton
} from "react-bootstrap";
import Styled,{ css } from "styled-components";

interface ButtonComponentProps {
    size?: "small" | "medium" | "large"
}

const Button = Styled(ReactBootstrapButton)<ButtonComponentProps>`
    ${
        ({ size="small" }) =>{
            if(size === "small")
                return css`
                    padding: 8px 20px;
                `;
            else if(size === "medium")
                return css`
                    padding: 8px 25px;
                `;
            else
                return css`
                    padding: 8px 30px;
                `;
        }
    }
    border-width: 0;
    background: #6a5acd;
    &:hover {
        background: #5647b4;
    }
`;

const Primary:React.FC<ButtonComponentProps> = ({ children, size }) =>(
    <Button size={size}>
        { children }
    </Button>
);

export default Primary;
