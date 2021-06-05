import { sendQuery } from "global";
import { useEffect, useState } from "react";
import { Podcast } from "types/Podcast";

const useGetPodcasts = () =>{
    const [podcasts, setPodcasts] = useState<Podcast[]>([]);
    const [getError, setGetError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const getPodcasts = async() =>{
        setIsLoading(true);
        const { error, data } = await sendQuery(`
            query {
                podcast {
                title,
                description,
                thumbnail,
                releaseTime
                }
            }
        `);
        if(error){
            setIsLoading(false);
            return setGetError("An Error Has Occured Please Check Your Internet Connection And Try Again");
        }
        setPodcasts(data.podcast);
        return setIsLoading(false);
    }
    useEffect(() =>{
        getPodcasts();
    }, []);
    return {
        error: getError,
        podcasts,
        isLoading
    }
}

export default useGetPodcasts;
