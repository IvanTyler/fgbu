'use client'

import {FC, useEffect, useState} from "react";
import {fetchPosts} from "@/api/posts";
import {queryClient} from "@/api/queryClient";
import {Preloader} from "@/Components/UI/Preloader/Preloader";
import {useQuery} from "@tanstack/react-query";
import {PostsSection} from "@/app/home/PostsSection/PostsSection";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {pageNumberEnum} from "@/app/[id]/enums";


export const PostManagementView: FC = () => {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const limit = 10;
    const firstPage = 1;

    const rawPage = searchParams.get(pageNumberEnum.pageNumber);
    const parsedPage = parseInt(rawPage, 10);

    const activePageFromUrl = parsedPage || firstPage;
    const [page, setPage] = useState(activePageFromUrl)


    function setSearchParam(pageNumber: number) {
        const params = new URLSearchParams(searchParams)

        params.set(pageNumberEnum.pageNumber, pageNumber)
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
    }

    const changePage = (pageNumber: number) => {
        setPage(pageNumber)
        setSearchParam(pageNumber)
    }

    const { data, status } = useQuery({
        queryKey: ['posts', { limit, page }],
        queryFn: () => fetchPosts(limit, page),
        staleTime: Infinity,
    }, queryClient)

    const posts = data?.posts || [];
    const totalCount = data?.totalCount || 0;
    const totalPages = Math.ceil(totalCount / limit);

    useEffect(() => {
        setSearchParam(page)
        if (totalCount && page > totalPages) {
            changePage(firstPage);
        }

    }, [totalPages, page]);

    switch (status) {
        case 'pending':
            return <Preloader />
        case 'success':
            return <PostsSection
                posts={posts}
                totalCount={totalCount}
                limit={limit}
                currentPage={page}
                totalPages={totalPages}
                changePage={changePage}
            />
        case 'error':
            return <p>Постов нет</p>
    }
}
