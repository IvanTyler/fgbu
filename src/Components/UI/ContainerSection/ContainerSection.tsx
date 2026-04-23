import {FC} from "react";
import style from './Container.module.scss';
import { clsx } from 'clsx';

interface IContainerProps {
    children: React.ReactNode,
    className?: string,
}


export const ContainerSection: FC<IContainerProps> = ({children, className}) => {

    return (
        <div className={clsx(style.container, className)}>
            {children}
        </div>
    )
}