import { 
    Banner, 
    Title, 
    Button, 
    Devider 
} from "components";

const HomeBanner = () =>(
    <Banner type="default">
        <Title
            color="#fff"
            textAlign="center"
            uppercase
            size={40}
        >
            Bmedia The best media outlets in the world,
            for making the trend.
        </Title>
        <div className="home-banner-buttons-container">
            <Button 
                type="light"
                size="large"
            >
                DISCOVER
            </Button>
            <Devider 
                type="vertical" 
                fill="#fff"
                className="home-banner-buttons-devider"
            />
            <Button 
                type="light"
                size="large"
            >
                CONTACT
            </Button>
        </div>
    </Banner>
);

export default HomeBanner;
