export default function Statistics({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>
          Start adding some items to your packing list 🚀
        </em>
      </p>
    )
  }

  const numItems = items.length;
  const packed = items.filter((item) => item.packed).length;
  const packedProcent = numItems !== 0 ? ((packed * 100) / numItems) : 0;

  return (
    <footer className="stats">
      <em>
        {packedProcent === 100 ? (
          '👜 You are everything! Ready to go travel'
        ) : (
          `👜 You have ${numItems} items on your list, and you already packed ${packed} (${packedProcent}%)`
        )}
      </em>
    </footer>
  );
}
