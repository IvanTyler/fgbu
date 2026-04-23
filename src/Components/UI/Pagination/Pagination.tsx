import style from './Pagination.module.scss'

import { FC } from 'react'
import { PaginationListItem } from '../PaginationItem/PaginationItem'
import {ListItems} from "@/Components/List/ListItems";

interface paginationProps {
    pages: number[],
    page: number,
    changePage: (item: number) => void
}

export const Pagination: FC<paginationProps> = ({ pages, page, changePage }) => {

    return (

        <ul className={style.pagination}>
            <ListItems
                items={pages}
                renderItem={(item: number, index: any) => <PaginationListItem
                    currentPage={item}
                    page={page}
                    changePage={changePage}
                    key={index.toString()}
                />}
            />
        </ul>
    )

}
