import style from './Pagination.module.scss'

import { FC } from 'react'
import List from '../List/List'
import { PaginationListItem } from '../PaginationItem/PaginationItem'

interface paginationProps {
    pages: number[],
    page: number,
    changePage: (item: number) => void
}

export const Pagination: FC<paginationProps> = ({ pages, page, changePage }) => {

    return (

        <ul className={style.pagination}>
            <List
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