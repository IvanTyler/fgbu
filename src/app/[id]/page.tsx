'use client'

import { FC } from 'react';
import style from './ProductDetailPage.module.scss'
import {useParams} from "next/navigation";
import {queryClient} from "@/api/queryClient";
import {Preloader} from "@/Components/UI/Preloader/Preloader";
import {useMutation, useQuery} from "@tanstack/react-query";
import {fetchPost} from "@/api/post";
import Link from "next/link";
import {ContainerSection} from "@/Components/UI/ContainerSection/ContainerSection";

const DetailedPage: FC = () => {

    const params = useParams();
    const postId = params.id

    const { data: post, isPending, isError } = useQuery({
        queryKey: ['post', postId],
        queryFn: () => fetchPost(postId),
        staleTime: Infinity,
    }, queryClient);

    if (isPending) return <Preloader />
    if (isError) return <p>Не удалось загрузить пост</p>

    return (
        <section className={style.detailPage}>
            <ContainerSection className={style.detailPageContainer}>
                <Link href='/' className={style.detailPage__linkBackInCatalog}>
                    back in catalog
                </Link>
                <div className={style.detailPage__description}>
                    {post.body}
                </div>
            </ContainerSection>
        </section>
    )
}

export default DetailedPage
