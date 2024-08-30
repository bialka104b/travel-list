import Logo from "./components/Logo";
import Form from "./components/Form";
import PackagingList from "./components/PackagingList";
import Statistics from "./components/Statistics";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          item = {...item, packed: !item.packed};
        }
        return item;
      })
    );
  }

  function handleDeleteItems(id) {
    setItems((items) =>
      items.filter((item) => {
        return item.id !== id;
      })
    );
  }
  
  function handleClearList() {
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        listItems={items}
        onDeleteItems={handleDeleteItems}
        onToogleItems={handleToggleItems}
        onClearList={handleClearList}
      />
      <Statistics items={items} />
    </div>
  );
}
