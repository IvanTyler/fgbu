
interface ListProps<T> {
    items: T[];
    renderItem: (item: T, index?: number) => React.ReactNode
}

function List<T>(props: ListProps<T>) {
    return (
        <>
            {props.items.map(props.renderItem)}
        </>
    )
}

export default List