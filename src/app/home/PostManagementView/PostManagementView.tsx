'use client'

import {FC, useState} from "react";
import {fetchPosts} from "@/api/posts";
import {queryClient} from "@/api/queryClient";
import {Preloader} from "@/Components/UI/Preloader/Preloader";
import {useQuery} from "@tanstack/react-query";
import {PostsSection} from "@/app/home/PostsSection/PostsSection";


export const PostManagementView: FC = () => {
    const limit = 10;
    const currentPage = 1;

    const [page, setPage] = useState(currentPage)
    const changePage = (page: number) => setPage(page)

    const { data, status } = useQuery({
        queryKey: ['posts', { limit, page }],
        queryFn: () => fetchPosts(limit, page),
        staleTime: Infinity,
    }, queryClient)

    const posts = data?.posts || [];
    const totalCount = data?.totalCount || 0;

    switch (status) {
        case 'pending':
            return <Preloader />
        case 'success':
            return <PostsSection
                posts={posts}
                currentPage={page}
                totalCount={totalCount}
                limit={limit}
                changePage={changePage}
            />
        case 'error':
            return <p>Постов нет</p>
    }
}
