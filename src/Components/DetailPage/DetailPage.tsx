import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './ProductDetailPage.module.scss'

import { useTypeSelector } from '../../Hooks/useTypeSelector';
import { IPosts } from '../../Interfaces/Iposts';

export const DetailPage: FC = () => {

    const { posts } = useTypeSelector(state => state.postsReducer)

    const { id } = useParams()

    const findDetailProduct = posts.find((el: IPosts) => el.id === Number(id))

    useEffect(() => {}, [id])

    return (
        <section className={style.sectionProductDetailPage}>
            <Link to='/' className={style.sectionProductDetailPage__linkBackInCatalog}>
                back in catalog
            </Link>
            <li className={style.sectionProductDetailPage__addToBasketPtoduct}>
                {findDetailProduct?.body}
            </li>
        </section>
    )
}
