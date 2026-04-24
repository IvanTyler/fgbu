import style from './Pagination.module.scss'

import {FC} from 'react'
import { PaginationListItem } from '../PaginationItem/PaginationItem'
import {ListItems} from "@/Components/List/ListItems";
import {paginationType} from "@/types/paginationType";

interface paginationProps {
    pages: paginationType[],
    page: number,
    changePage: (item: number) => void
}

export const Pagination: FC<paginationProps> = (
    {
        pages,
        page,
        changePage
    }) => {

    return (

        <ul className={style.pagination}>
            <ListItems
                items={pages}
                renderItem={(item: paginationType) => <PaginationListItem
                    currentPage={item.pageNumber}
                    page={page}
                    changePage={changePage}
                    key={item.id}
                />}
            />
        </ul>
    )

}
