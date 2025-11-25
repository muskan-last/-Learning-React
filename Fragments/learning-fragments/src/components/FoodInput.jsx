import styles from "./FoodInput.module.css"

const FoodInput = ({ handleonKeyDown }) => {
  return (
    <input
      type="text" placeholder="Enter the food item" className={styles.foodInput} onKeyDown={handleonKeyDown} />

  );
}
export default FoodInput;