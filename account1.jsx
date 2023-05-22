// this keeps a running total of deposits and withdrawals

const ATMDeposit = ({ onChange }) => {
  return (
    <label className="label huge">
      <input type="number" onChange={onChange}></input>
    </label>
  );
};

const Account = () => {
  const [accountState, setAccountState] = React.useState(0);
  const [deposit, setDeposit] = React.useState(0);

  const handleChange = event => {
    let input = Number(event.target.value);
    setDeposit(input);
  };
  const handleDeposit = event => {
  let newTotal = deposit + accountState;
  
  setAccountState(newTotal);
  alert(`You have deposited $ ${deposit}`);
  event.preventDefault();
  };
  const handleWithdraw = event => {
  let newTotal = accountState - deposit;
  
  if(newTotal >= 0) {
    setAccountState(newTotal);
    alert(`You have withdrawn $ ${deposit}`);
  } else { alert(`insufficient funds`) }
  event.preventDefault();
  };

  return (
    <form>
      <h2>Account Balance {accountState}</h2>
      <ATMDeposit onChange={handleChange}></ATMDeposit>
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
