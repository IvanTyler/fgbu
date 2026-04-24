import style from './PaginationItem.module.scss'
import { FC } from 'react'
import {clsx} from "clsx";

interface paginationListProps {
    page: string,
    currentPage: string,
    changePage: (item: string) => void
}

export const PaginationListItem: FC<paginationListProps> = (
    {
        page,
        currentPage,
        changePage
    }) => {

    return (

        <li className={style.paginationListItem}>
            <button
                onClick={() => changePage(currentPage)}
                className={
                    page === currentPage ?
                        clsx(style.paginationListItem, style.active) :
                        style.paginationListItem}>
                {currentPage}
            </button>
        </li>
    )

}
