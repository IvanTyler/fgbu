'use client'

import {FC, useEffect, Suspense} from 'react';
import style from './ProductDetailPage.module.scss'
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import {queryClient} from "@/api/queryClient";
import {Preloader} from "@/Components/UI/Preloader/Preloader";
import {useQuery} from "@tanstack/react-query";
import {fetchPost} from "@/api/post";
import Link from "next/link";
import {ContainerSection} from "@/Components/UI/ContainerSection/ContainerSection";
import {pageNumberEnum} from "@/app/[id]/enums";

const DetailedPage: FC = () => {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const params = useParams();
    const postId = params.id as string;

    const limit = 10;
    const firstPage = 1;

    const rawPage = searchParams.get(pageNumberEnum.pageNumber) ?? String(firstPage);
    const parsedPage = parseInt(rawPage, 10);

    const activePageFromUrl = !isNaN(parsedPage) && parsedPage > 0 ? parsedPage : firstPage;

    const isCurrentPage = activePageFromUrl > limit ? firstPage : activePageFromUrl

    function setSearchParam(pageNumber: string) {
        const params = new URLSearchParams(searchParams)

        params.set(pageNumberEnum.pageNumber, pageNumber)
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
    }



    const { data: post, isPending, isError } = useQuery({
        queryKey: ['post', postId],
        queryFn: () => fetchPost(postId),
        staleTime: Infinity,
    }, queryClient);

    const backInCatalog = `/?${pageNumberEnum.pageNumber}=${isCurrentPage}`

    useEffect(() => {
        setSearchParam(String(isCurrentPage))

    }, [isCurrentPage]);

    if (isPending) return <Preloader />
    if (isError) return <p>Не удалось загрузить пост</p>

    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <section className={style.detailPage}>
                <ContainerSection className={style.detailPageContainer}>
                    <Link href={backInCatalog} className={style.detailPage__linkBackInCatalog}>
                        back in catalog
                    </Link>
                    <div className={style.detailPage__description}>
                        {post.body}
                    </div>
                </ContainerSection>
            </section>
        </Suspense>

    )
}

export default DetailedPage
