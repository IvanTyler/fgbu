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

    const rawPage = searchParams.get(pageNumberEnum.pageNumber) ?? String(firstPage);
    const parsedPage = parseInt(rawPage, 10);

    const activePageFromUrl = !isNaN(parsedPage) && parsedPage > 0 ? parsedPage : firstPage;
    const [page, setPage] = useState<string>(activePageFromUrl.toString())


    function setSearchParam(pageNumber: string) {
        const params = new URLSearchParams(searchParams)

        params.set(pageNumberEnum.pageNumber, pageNumber)
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
    }

    const changePage = (pageNumber: string) => {
        setPage(String(pageNumber))
        setSearchParam(String(pageNumber))
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
        if (totalCount && Number(page) > totalPages) {
            changePage(String(firstPage));
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
                changePage={changePage}
            />
        case 'error':
            return <p>Постов нет</p>
    }
}
