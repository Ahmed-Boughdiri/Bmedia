import PodcastCard from "./PodcastCard"; 
import NewsCard from "./NewsCard";

const Index:React.FC<{
    type: "podcast" | "news",
    title?: String,
    description?: String,
    thumbnail?: String,
    author?: String,
    url?: String
}> = ({ 
    type,
    title="",
    thumbnail="",
    description="",
    author="",
    url=""
}) =>(
    <>
        {
            (type === "podcast") && (
                <PodcastCard 
                    title={title}
                    thumbnail={thumbnail}
                    description={description}
                />
            )
        }
        {
            (type === "news") && (
                <NewsCard 
                    title={title}
                    description={description}
                    thumbnail={thumbnail}
                    auhtor={author}
                    url={url}
                />
            )
        }
    </>
);

export default Index;
