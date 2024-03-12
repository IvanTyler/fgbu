import axios from "axios"
import { IPosts } from "../../Interfaces/Iposts"
import { AppDispatch } from "../Store/Store"
import { postDataFetchError, postDataFetching, postDataFetchingSuccess } from "../Reucers/PostsSlice"

export const fetcPostId = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postDataFetching())
        const response = await axios.get<IPosts>(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(postDataFetchingSuccess(response.data))
    } catch (error) {
        dispatch(postDataFetchError('ошибка, данных нет'))
    }
}