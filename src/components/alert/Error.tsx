import Styled from "styled-components";

const AlertErrorContainer = Styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100px;
`;
const AlertIcon = Styled.img`
    height: 150px;
    width: 150px;
`;
const AlertError = Styled.h3`
    text-align: center;
    margin-top: 20px;
`;

const Error:React.FC<{ icon: String }> = ({ icon, children }) =>(
    <AlertErrorContainer>
        <AlertIcon src={icon as string} alt="" />
        <AlertError>
            { children }
        </AlertError>
    </AlertErrorContainer>
);

export default Error;
