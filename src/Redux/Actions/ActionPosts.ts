import axios from "axios"
import { IPosts } from "../../Interfaces/Iposts"
import { AppDispatch } from "../Store/Store"
import { postDataFetchError, postDataFetching, postsDataFetchingSuccess } from "../Reucers/PostsSlice"

export const fetcPosts = (limit: number, page: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postDataFetching())
        const response = await axios.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        dispatch(postsDataFetchingSuccess(response.data))
    } catch (error) {
        dispatch(postDataFetchError('ошибка, данных нет'))
    }
}