import { sendQuery } from "global";
import { useEffect, useState } from "react";
import { News } from "types/News";

const useGetNews = () =>{
    const [news, setNews] = useState<News[]>([]);
    const [getError, setGetError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const getNews = async() =>{
        setIsLoading(true);
        const { data, error } = await sendQuery(`
            query {
                news {
                    author,
                    title,
                    description,
                    thumbnail,
                    url
                }
            }
        `);
        if(error) {
            setIsLoading(false);
            return setGetError(error);
        }
        setNews(data.news);
        return setIsLoading(false);
    }
    useEffect(() =>{
        getNews();
    }, []);
    return {
        error: getError,
        news,
        isLoading
    }
}

export default useGetNews;
