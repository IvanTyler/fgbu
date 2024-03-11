import { IPosts } from "../Interfaces/Iposts"

export interface PostsState {
    posts: IPosts[];
    isLoading:  boolean;
    error: string;
}

export const initialState: PostsState = {
    posts: [],
    isLoading: false,
    error: '',
}
