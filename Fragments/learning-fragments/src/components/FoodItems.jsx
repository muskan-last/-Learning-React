import ITEMS from "./item";

const FoodItems = ({ items }) => {

  return (
    <ul className="list-group">
      {items.map((item) => (
        <ITEMS key={item} foodItem={item} handleBuyButtonClicked={() => console.log(`${item} bought`)} />
      ))}

    </ul>

  );
}
export default FoodItems