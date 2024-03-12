import style from './PostsList.module.scss'
import { useEffect, FC, useState } from 'react'
import { useAppDispath, useTypeSelector } from '../../Hooks/useTypeSelector'
import { fetcPosts } from '../../Redux/Actions/ActionPosts'
import { PostsListItem } from '../PostListItem/PostListItem'
import List from '../List/List'
import { IPosts } from '../../Interfaces/Iposts'
import { getPageCount, getPagesArray } from '../../utils/pages'
import { Pagination } from '../Pagination/Pagination'
import { Preloader } from '../Preloader/Preloader'
import { setPage } from '../../Redux/Reucers/PostsSlice'

export const PostsList: FC = () => {

    const [totalPage, setTotalPage] = useState(0)
    const [limit, setLimit] = useState(10)

    const disppatch = useAppDispath()
    const { posts, isLoading, page } = useTypeSelector(state => state.postsReducer)

    let pagesArray = getPagesArray(totalPage)

    const changePage = (page: number) => disppatch(setPage(page))

    useEffect(() => {
        disppatch(fetcPosts(limit, page))
        setTotalPage(getPageCount(100, limit))
    }, [page])

    if (isLoading)
        return (
            <Preloader />
        )

    return (
        <>
            <div>

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
            </div>

            <Pagination
                pages={pagesArray}
                page={page}
                changePage={changePage} />
        </>
    )

}