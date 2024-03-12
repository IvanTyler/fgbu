import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './ProductDetailPage.module.scss'
import { useAppDispath, useTypeSelector } from '../../Hooks/useTypeSelector';
import { fetcPostId } from '../../Redux/Actions/ActionPost';
import { Preloader } from '../Preloader/Preloader';

export const DetailPage: FC = () => {

    const disppatch = useAppDispath()

    const { id } = useParams()

    const { post, isLoading } = useTypeSelector(state => state.postsReducer)

    useEffect(() => {
        disppatch(fetcPostId(Number(id)))
    }, [id])

    if (isLoading)
        return (
            <Preloader />
        )

    return (
        <section className={style.detailPage}>
            <Link to='/' className={style.detailPage__linkBackInCatalog}>
                back in catalog
            </Link>
            <div className={style.detailPage__description}>
                {post.body}
            </div>
        </section>
    )
}
