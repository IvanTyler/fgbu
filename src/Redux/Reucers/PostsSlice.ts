import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '../../Redux/initState'
import { IPosts } from '../../Interfaces/Iposts';

export const dataSlice = createSlice({
    name: 'getData',
    initialState,
    reducers: {
        postDataFetching(state) {
            state.isLoading = true;
        },
        postDataFetchingSuccess(state, action: PayloadAction<IPosts[]>) {
            state.isLoading = false;
            state.error = ''
            state.posts = action.payload
        },
        postDataFetchError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})


export default dataSlice.reducer
export const {
    postDataFetching,
    postDataFetchingSuccess,
    postDataFetchError,
} = dataSlice.actions