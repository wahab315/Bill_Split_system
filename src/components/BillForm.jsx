import React, { useState } from "react";
import Button from "./Button";
const BillForm = (props) => {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [paidBuy, setPaidBuy] = useState("user");

  const [friendExpense, setFriendExpense] = useState("");

  function handleBill(e) {
    setBill(Number(e.target.value));
  }
  function handleYourExpense(e) {
    setYourExpense(Number(e.target.value));
    setFriendExpense(bill - e.target.value);
  }
  function handlePaidBuy(e) {
    setPaidBuy(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill) return;
    props.setData((obj) =>
      obj.map((item) =>
        item.id === props.selected.id
          ? { ...item, balance: friendExpense, paidBy: paidBuy }
          : item
      )
    );

    setBill("");
    setYourExpense("");
    setPaidBuy("user");
    setFriendExpense("");
  }

  return (
    <>
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>{`Split a bill with ${props.name}`}</h2>

        <label>💰 Bill value</label>
        <input type="text" onChange={handleBill} value={bill} />

        <label>🧍‍♀️ Your expense</label>
        <input type="text" onChange={handleYourExpense} value={yourExpense} />

        <label>👫 's expense</label>
        <input type="text" disabled value={friendExpense} />

        <label>🤑 Who is paying the bill</label>
        <select value={paidBuy} onChange={handlePaidBuy}>
          <option value="user">You</option>
          <option value="friend">{props.name}</option>
        </select>

        <Button>Split bill</Button>
      </form>
    </>
  );
};

export default BillForm;
