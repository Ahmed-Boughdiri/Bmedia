import { Form } from "react-bootstrap";
import Styled from "styled-components";

const Control = Styled(Form.Control)`
    width: 90%;
`;

const Input:React.FC<{
    type: String,
    placeholder: String
}> = ({
    type,
    placeholder
}) =>(
    <Form.Group controlId="exampleForm.ControlInput1">
        <Control 
            type={type} 
            placeholder={placeholder} 
        />
    </Form.Group>
);

export default Input;
