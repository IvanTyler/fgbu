import {postType} from "@/api/types/postsType";
import {Host} from "@/api/host";
import axios from "axios";


export async function fetchPosts(limit: number, page: number): Promise<postType> {
    const url = `${Host}/posts?_page=${page}&_limit=${limit}`

    const response = await axios.get<postType[]>(url)
    const totalCount = parseInt(response.headers['x-total-count'] || '0', 10);

    return  {
        posts: response.data,
        totalCount: totalCount  // ← Вот здесь totalCount
    };
}
