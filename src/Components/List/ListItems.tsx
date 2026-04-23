import * as React from "react";

interface ListProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
}

export function ListItems<T>(props: ListProps<T>) {
    return (
        <>
            {props.items.map((item, index) => props.renderItem(item, index))}
        </>
    )
}

