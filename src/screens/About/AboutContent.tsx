import { Container } from "react-bootstrap";
import theme from "theme";

const AboutContent = () =>(
    <Container className="about-container">
        <div className="about-wrapper">
            <div className="about-details">
                <div>
                    <h4>Bmedia LLC</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Est qui repellendus laudantium eaque iste porro sapiente quasi in? 
                        Omnis quia nam maiores consectetur? 
                        Aspernatur qui fugit iure molestias ratione illo.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Est qui repellendus laudantium eaque iste porro sapiente quasi in? 
                        Omnis quia nam maiores consectetur? 
                        Aspernatur qui fugit iure molestias ratione illo.
                    </p>
                    <div className="about-social-media-icons-container">
                        <img src={theme.icons.facebook} />
                        <img src={theme.icons.twitter} />
                        <img src={theme.icons.instagram} />
                        <img src={theme.icons.youtube} />
                    </div>
                </div>
            </div>
            <div className="about-banner">
                <img 
                    src="https://images.pexels.com/photos/6878705/pexels-photo-6878705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="about-image" 
                />
            </div>
        </div>
    </Container>
);

export default AboutContent;
