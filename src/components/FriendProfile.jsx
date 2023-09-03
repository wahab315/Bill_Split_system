import React from "react";
import Button from "./Button";
const FriendProfile = (props) => {
  return (
    <>
      <li className="selected">
        <img src={props.profile} alt="profile" />
        <h3>{props.name}</h3>

        <p className={props.paidby === "user" ? "green" : "red"}>
          {props.paidby === "user"
            ? `${props.name}  owes you € ${props.balance}`
            : `You owe €${props.balance}`}
        </p>

        <Button onClick={props.onClick}>Close</Button>
      </li>
    </>
  );
};

export default FriendProfile;
