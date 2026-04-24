'use client'

import style from './PostsList.module.scss'
import { FC } from 'react'
import {PostsListItem} from "@/app/home/PostListItem/PostListItem";
import {ListItems} from "@/Components/List/ListItems";
import {postType} from "@/api/types/postsType";

interface IPostsListProps {
    page: string
    posts: postType[]
}

export const PostsList: FC<IPostsListProps> = ({posts, page}) => {

    return (
        <ul className={style.postList}>
                <ListItems
                    items={posts}
                    renderItem={(item: postType) => <PostsListItem
                        page={page}
                        item={item}
                        key={item.id}
                    />}
                />
        </ul>
    )

}
