import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    expectedReturn: 8,
    annualInvestment: 12000,
    duration: 5,
  });

  function handleDataChanged(key, value) {
    console.log("New value", key, value);
    //setUserInput({ ...userInput, [key]: value });
    setUserInput((prevState) => ({ ...prevState, [key]: +value }));
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleDataChanged={handleDataChanged} />
      <Result userInput={userInput} />
    </>
  );
}

export default App;
