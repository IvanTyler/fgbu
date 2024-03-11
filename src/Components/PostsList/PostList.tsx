import style from './PostsList.module.scss'

import { useEffect, FC, useState } from 'react'
import { useAppDispath, useTypeSelector } from '../../Hooks/useTypeSelector'
import { fetcPosts } from '../../Redux/Actions/Action'
import { PostsListItem } from '../PostListItem/PostListItem'
import List from '../List/List'
import { IPosts } from '../../Interfaces/Iposts'
import { getPageCount, getPagesArray } from '../../utils/pages'
import { Pagination } from '../Pagination/Pagination'
import { Preloader } from '../Preloader/Preloader'


export const PostsList: FC = () => {

    const [totalPage, setTotalPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const disppatch = useAppDispath()
    const { posts, isLoading } = useTypeSelector(state => state.postsReducer)

    let pagesArray = getPagesArray(totalPage)


    const changePage = (page: number) => {
        setPage(page)
        disppatch(fetcPosts(limit, page))

    }


    useEffect(() => {
        disppatch(fetcPosts(limit, page))
        setTotalPage(getPageCount(100, limit))
    }, [])

    if (isLoading)
        return (
            <div className={style.preloaderWrapper}>
                <Preloader />
            </div >
        )

    return (
        <>
            <ul className={style.postList}>
                {
                    posts.length ?
                        <List
                            items={posts}
                            renderItem={(item: IPosts) => <PostsListItem
                                item={item}
                                key={item.id}
                            />}
                        /> : <p>Постов нет</p>
                }
            </ul>

            <Pagination
                item={pagesArray}
                page={page}
                changePage={changePage} />
        </>
    )

}