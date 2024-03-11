import { FC } from "react";
import style from './PostsListItem.module.scss'
import { IPosts } from "../../Interfaces/Iposts";
import { Link } from "react-router-dom";


interface postListItemProps {
    item: IPosts
}

export const PostsListItem: FC<postListItemProps> = ({ item }) => {

    return (
        <li className={style.PostsListItem}>
            <span className={style.PostsListIte__number}>
                {item.id}.
            </span>
            <span className={style.PostsListIte__title}>
                {item.title}
            </span>
            <Link className={style.PostsListIte__link} to={`/${item.id}`}>Description post</Link>
        </li>
    )
}