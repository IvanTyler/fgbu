import { IPosts } from "../Interfaces/Iposts"

export interface PostsState {
    posts: IPosts[];
    post: IPosts;
    isLoading: boolean;
    page: number;
    error: string;
}

export const initialState: PostsState = {
    posts: [],
    post: {
        userId: 0,
        id: 0,
        title: '',
        body: '',
    },
    isLoading: false,
    page: 1,
    error: '',
}
