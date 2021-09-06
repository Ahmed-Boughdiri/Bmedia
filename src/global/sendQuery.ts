import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function(query: String) {
    try {
        const req = await axios.post("https://bmedia-backend.herokuapp.com/graphql", { query });
        console.log("Request: ", req);
        const res = await req.data;
        return {
            data: res.data,
            error: null
        }
    } catch(err) {
        return {
            data: null,
            error: "An Error Has Occured Please Check Your Internet Connection And Try Again"
        }
    }
}
