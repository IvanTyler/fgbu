'use client'

import {FC} from "react";
import {postType} from "@/api/types/postsType";
import style from './PostsSection.module.scss';
import {ContainerSection} from "@/Components/UI/ContainerSection/ContainerSection";
import {PostsList} from "@/app/home/PostsList/PostList";
import {Pagination} from "@/Components/UI/Pagination/Pagination";
import {getPageCount, getPagesArray} from "@/utils/pages";


interface IPostsSectionProps {
    posts: postType[]
    totalCount: number;
    currentPage: string;
    limit: number;
    changePage: (item: string) => void
}

export const PostsSection: FC<IPostsSectionProps> = (
    {
        posts,
        totalCount,
        currentPage,
        limit,
        changePage
    }
) => {

    const totalPages = getPageCount(totalCount, limit);
    const pagesArray = getPagesArray(totalPages);

    return (
        <section className={style.postsSection}>
            <ContainerSection className={style.postsSectionContainer}>
                <PostsList posts={posts} page={currentPage} />
                <Pagination
                    pages={pagesArray}
                    page={currentPage}
                    changePage={changePage}
                />
            </ContainerSection>
        </section>
    )
}
