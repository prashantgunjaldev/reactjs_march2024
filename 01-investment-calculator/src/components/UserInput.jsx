// import { useState } from "react";

function UserInput({ userInput, handleDataChanged }) {
  //   const [initialInvestment, setInitialInvestment] = useState(10000);
  //   const [expectedReturn, setExpectedReturn] = useState(8);
  //   const [annualInvestment, setAnnualInvestment] = useState(12000);
  //   const [duration, setDuration] = useState(5);

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => {
              handleDataChanged("initialInvestment", e.target.value);
            }}
          />
        </p>
        <p>
          <label>Expected Return (%)</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => {
              handleDataChanged("expectedReturn", e.target.value);
            }}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) => {
              handleDataChanged("annualInvestment", e.target.value);
            }}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => {
              handleDataChanged("duration", e.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
