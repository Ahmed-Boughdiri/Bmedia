import Styled from "styled-components";
import { 
    Navbar as ReactBootstrapNavbar,
    Nav as ReactBootstrapNav
} from "react-bootstrap";

export const Navbar = Styled(ReactBootstrapNavbar)`
    background: #fff;
    .navbar-toggler {
        border-width: 0;
    }
`;

export const NavbarLink = Styled(ReactBootstrapNav.Link)`
    margin-right: 20px;
    @media only screen and (max-width: 991px) {
        text-align: center;
    }
`;

export const NavbarBrand = Styled(ReactBootstrapNavbar.Brand)`
    font-size: 30px;
`;
