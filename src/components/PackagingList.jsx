import { useState } from "react";
import Item from "./Item";

export default function PackagingList(
    {
        listItems = [],
        onDeleteItems = () => { },
        onToogleItems = () => { },
        onClearList = () => { }
    }
) {
    const [sortBy, setSortBy] = useState('quantity');
    let sortedItems;
    if (sortBy === "quantity") {
        sortedItems = listItems.slice(0).sort((a, b) => a.quantity - b.quantity);
    }
    if (sortBy === "description") {
        sortedItems = listItems.slice(0).sort((a, b) => a.description.localeCompare(b.description));
    }
    if (sortBy === "packed") {
        sortedItems = listItems.slice().sort((a, b) => { 
            return Number(a.packed) - Number(b.packed);
        });
    }

    function handleChange(nameSort) {
        setSortBy(nameSort);
    }
    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => {
                    return <Item item={item} key={item.id} onDeleteItems={onDeleteItems} onToogleItems={onToogleItems} />
                })}
            </ul>
            <div className="actions">
                <select name="sorted" id="sorted" value={sortBy} onChange={(event)=> handleChange(event.target.value)}>
                    <option value="quantity">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button className onClick={() => {onClearList()}}>Clear list</button>
            </div>
        </div>
    );
}