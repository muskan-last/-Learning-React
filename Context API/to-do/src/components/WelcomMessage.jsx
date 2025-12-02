
import styles from "./WelcomeMessage.module.css"
const WelcomeMessage = ({ todoItem }) => {

  return (
    !todoItem && <p className={styles.Welcome}>Enjoy Your Day!</p>
  );
}
export default WelcomeMessage;