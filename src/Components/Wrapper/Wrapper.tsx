import React from "react";
import style from './Wrapper.module.scss'

interface ContainerProps {
    children: React.ReactNode
}

export const Wrapper: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className={style.wrapper}>
            {children}
        </div>
    )
}