import { Container } from "react-bootstrap";
import { Card } from "components";
import { useGetNews } from "hooks";
import LoadingScreen from "./LoadingScreen";
import { News } from "types/News";
import ErrorScreen from "./ErrorScreen";

const Feed:React.FC<{ news: News[], error: String }> = ({ news, error }) =>(
    <>
        {
            (error) ? (
                <ErrorScreen>
                    { error }
                </ErrorScreen>
            ) : (
                <Container className="news-feed">
                    {
                        news.map((newsArticle, index) =>(
                            <Card 
                                key={index}
                                type="news" 
                                title={newsArticle.title}
                                description={newsArticle.description}
                                thumbnail={newsArticle.thumbnail}
                                author={newsArticle.author}
                                url={newsArticle.url}
                            />
                        ))
                    }
                </Container>
            )
        }
    </>
);

const NewsFeed = () =>{
    const { 
        news, 
        error,
        isLoading
    } = useGetNews();
    return (
        <>
            {
                isLoading ? 
                <LoadingScreen /> : 
                <Feed 
                    news={news} 
                    error={error} 
                />
            }
        </>
    );
}

export default NewsFeed;
