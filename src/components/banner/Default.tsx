import Styled from "styled-components";
import { 
    Container as ReactBootstrapContainer
} from "react-bootstrap";

const BannerContainer = Styled.div`
    height: 80vh;
    width: 100vw;
    background: url("https://images.pexels.com/photos/682082/pexels-photo-682082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`;

const BannerWrapper = Styled.div`
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Container = Styled(ReactBootstrapContainer)`
    box-sizing: border-box;
    padding: 0 100px;
    @media only screen and (max-width: 775px) {
        padding: 0 20px;
    }
`;

const Default:React.FC = ({ children }) =>(
    <BannerContainer>
        <BannerWrapper>
            <Container>
                { children }
            </Container>
        </BannerWrapper>
    </BannerContainer>
);

export default Default;
