import { MOVIE_GET_DATA_FAIL, MOVIE_GET_DATA_REQUIEST, MOVIE_GET_DATA_SUCCESS } from "../constans/movieConstans"

export const movies = (
    state = { movieList:[] },
    {type, payload}
) => {
    switch (type) {
        case MOVIE_GET_DATA_REQUIEST: return{...state, loading: true  }
        case MOVIE_GET_DATA_SUCCESS: return{...state, loading: false, movieList:payload }
        case MOVIE_GET_DATA_FAIL: return{...state, loading: false, error: payload  }

        default: return state
    }
}