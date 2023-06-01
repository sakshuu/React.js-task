import axios from "axios"
import { MOVIE_GET_DATA_FAIL, MOVIE_GET_DATA_REQUIEST, MOVIE_GET_DATA_SUCCESS} from "../constans/movieConstans"

export const movieListShow = () => async dispatch => {
    try {
        dispatch({ type:MOVIE_GET_DATA_REQUIEST })
        const {data} = await axios.get("https://api.tvmaze.com/search/shows?q=all") 
        dispatch({ type: MOVIE_GET_DATA_SUCCESS, payload:data })
    } catch (error) {
        dispatch({ type:MOVIE_GET_DATA_FAIL, payload: error.message})
    }
}
