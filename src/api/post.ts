import {postType} from "@/api/types/postsType";
import {Host} from "@/api/host";
import axios from "axios";


export async function fetchPost(postId: string): Promise<postType> {
    const url = `${Host}/posts/${postId}`;

    const response = await axios.get<postType>(url)

    return response.data
}
