import React from "react";
import FriendProfile from "./FriendProfile";

const Sidebar = (props) => {
  // const id = props.data.id;

  return (
    <ul>
      {props.data.map((item) => {
        return (
          <FriendProfile
            key={item.id}
            name={item.name}
            profile={item.image}
            balance={item.balance}
            paidby={item.paidBy}
            onClick={() => props.setShowForm(item)}
          />
        );
      })}
    </ul>
  );
};

export default Sidebar;
