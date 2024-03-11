import style from './PaginationItem.module.scss'
import { FC } from 'react'

interface paginationListProps {
    page: number,
    currentPage: number,
    changePage: (item: number) => void

}

export const PaginationListItem: FC<paginationListProps> = ({ page, currentPage, changePage }) => {

    return (

        <li className={style.paginationListItem}>
            <button
            onClick={() => changePage(currentPage)}
                className={
                    page === currentPage ?
                        style.paginationListItem + ' ' + style.active :
                        style.paginationListItem}>
                {currentPage}
            </button>
        </li>
    )

}