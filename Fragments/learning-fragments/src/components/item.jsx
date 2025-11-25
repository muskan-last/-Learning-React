import '../App.css'
const ITEMS = ({ foodItem, handleBuyButtonClicked }) => {

  return (
    <li className="list-group-item">{foodItem}
      <button className="btn-item btn btn-info"
        onClick={handleBuyButtonClicked}

      >Buy</button>
    </li>
  );
};


export default ITEMS;
