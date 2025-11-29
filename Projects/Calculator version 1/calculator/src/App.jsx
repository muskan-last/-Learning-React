import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsConatiner";
import { useState } from "react";

function App() {

  const [calVAl, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
    } else if (buttonText === '=') {
      const result = eval(calVAl);
      setCalVal(result);

    } else {
      const newDisplayVAlue = calVAl + buttonText;
      setCalVal(newDisplayVAlue);
    }
  }
  return (<center>
    <div className={styles.calculator}>
      <Display displayValue={calVAl}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  </center>
  );
}

export default App