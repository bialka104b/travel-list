export default function Item(
    {
        item = null,
        onDeleteItems = () => { },
        onToogleItems = () => { }
    }
) {
    return <li>
        <input type="checkbox" value={item.packed} onChange={() => {onToogleItems(item.id)}}/>
        <span className={item.packed ? 'span-packed': ''}>
            {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>;
}