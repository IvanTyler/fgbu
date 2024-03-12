import { FC } from "react";
import style from './PostsListItem.module.scss'
import { IPosts } from "../../Interfaces/Iposts";
import { Link } from "react-router-dom";

interface postListItemProps {
    item: IPosts
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
            <Link className={style.postsListItem__link} to={`/${item.id}`}>Description post</Link>
        </li>
    )
}