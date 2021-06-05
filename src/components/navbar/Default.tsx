import { 
    Container, 
    Nav 
} from "react-bootstrap";
import { 
    Navbar, 
    NavbarLink,
    NavbarBrand
} from "./StyledComponents";
import { History } from "history";

const Default:React.FC<{ history: History }> = ({ history }) =>(
    <Navbar 
        collapseOnSelect 
        expand="lg" 
        variant="light"
    >
        <Container>
            <NavbarBrand>Bmedia</NavbarBrand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <NavbarLink 
                        onClick={() => history.push("/")}
                    >
                        Podcasts
                    </NavbarLink>
                    <NavbarLink 
                        onClick={() => history.push("/news")}
                    >
                        News
                    </NavbarLink>
                    <NavbarLink 
                        onClick={() => history.push("/support")}
                    >
                        Support
                    </NavbarLink>
                    <NavbarLink 
                        onClick={() => history.push("/about")}
                    >
                        About
                    </NavbarLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Default;
