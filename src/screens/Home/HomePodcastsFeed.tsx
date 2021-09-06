import { Container } from "react-bootstrap";
import { List, Card } from "components";
import { useGetPodcasts } from "hooks";
import { Podcast } from "types/Podcast";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";

const PodcastsFeed:React.FC<{ 
    podcasts: Podcast[], 
    error: String,
    onPodcastClick: (link: String) => void 
}> = ({ 
    podcasts, 
    error,
    onPodcastClick
}) =>(
    <>
        {
            (error) ? (
                <ErrorScreen>
                    { error }
                </ErrorScreen>
            ) : (
                <Container className="home-podcasts-container">
                    <List>
                        {
                            podcasts.map((podcast, index) =>(
                                <Card 
                                    key={index}
                                    type="podcast" 
                                    title={podcast.title}
                                    thumbnail={podcast.thumbnail}
                                    description={podcast.description}
                                    onClick={() => onPodcastClick(podcast.link)}
                                />
                            ))
                        }
                    </List>
                </Container>
            )
        }
    </>
)

const HomePodcastsFeed:React.FC<{ 
    onPodcastClick: 
        (link: String) => void 
}> = ({ onPodcastClick }) =>{
    const { 
        podcasts, 
        error,
        isLoading
    } = useGetPodcasts();
    return (
        <>
            {
                isLoading ? 
                <LoadingScreen /> : 
                <PodcastsFeed 
                    podcasts={podcasts}  
                    error={error}
                    onPodcastClick={onPodcastClick} 
                />
            }
        </>
    );
}

export default HomePodcastsFeed;
