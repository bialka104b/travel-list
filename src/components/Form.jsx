import { useState } from "react";

export default function Form({ 
    onAddItems = () => {}
}) {
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(1)
    
    function handleSubmit(event) {
        event.preventDefault()

        if (!description) return;
        const newItem = {
            description, quantity,
            packed: false,
            id: Date.now()
        }
        onAddItems(newItem)

        setDescription('');
        setQuantity(1);
    }

    function handleChange(event) {
        setDescription(event.target.value)
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 🥰 trip?</h3>
            <select value={quantity} onChange={(e) => {
                setQuantity(Number(e.target.value))
            }}>
                {Array.from({ length: 20 }, (_, index) => index + 1).map(number => { 
                    return <option key={number} value={number}>{ number}</option>
                })}
            </select>
            <input type="text" placeholder="item" value={description}onChange={handleChange}></input>
            <button>Add</button>
        </form>
    );
}