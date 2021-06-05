import Styled from "styled-components";

const ListContainer = Styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    @media only screen and (max-width: 993px) {
        grid-template-columns: auto auto;
    }
    @media only screen and (max-width: 767px) {
        grid-template-columns: auto;
    }
`;

const Index:React.FC = ({ children }) =>(
    <ListContainer>
        { children }
    </ListContainer>
);

export default Index;
