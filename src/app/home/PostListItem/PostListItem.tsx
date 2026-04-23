import { FC } from "react";
import style from './PostsListItem.module.scss'
import {postType} from "@/api/types/postsType";
import Link from "next/link";

interface postListItemProps {
    item: postType
}

export const PostsListItem: FC<postListItemProps> = ({ item }) => {

    return (
        <li className={style.postsListItem}>
            <span className={style.postsListItem__number}>
                {item.id}
            </span>
            <span className={style.postsListItem__title}>
                {item.title}
            </span>
            <Link className={style.postsListItem__link} href={`/${item.id}`}>Description post</Link>
        </li>
    )
}
