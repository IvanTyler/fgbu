import { FC } from "react";
import style from './PostsListItem.module.scss'
import {postType} from "@/api/types/postsType";
import Link from "next/link";
import {pageNumberEnum} from "@/app/[id]/enums";

interface postListItemProps {
    page: string
    item: postType
}

export const PostsListItem: FC<postListItemProps> = ({ item, page }) => {

    const link = `/${item.id}?${pageNumberEnum.pageNumber}=${page}`

    return (
        <li className={style.postsListItem}>
            <span className={style.postsListItem__number}>
                {item.id}
            </span>
            <span className={style.postsListItem__title}>
                {item.title}
            </span>
            <Link className={style.postsListItem__link} href={link}>Description post</Link>
        </li>
    )
}
