import { Form } from "react-bootstrap";
import Styled from "styled-components";

const Control = Styled(Form.Control)`
    width: 90%;
    border-radius: 5px;
    border: 1px solid rgba(154, 154, 154, 0.5);
    padding: 8px 10px;
`;

const TextArea:React.FC<{
    placeholder: String
}> = ({
    placeholder
}) =>(
    <Form.Group controlId="exampleForm.ControlTextarea1">
        <Control 
            as="textarea" 
            rows={3} 
            placeholder={placeholder as string}
        />
    </Form.Group>
);

export default TextArea;
