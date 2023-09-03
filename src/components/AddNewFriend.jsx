import React, { useState } from "react";
import Button from "./Button";
import uniqid from "uniqid";

const AddNewFriend = (props) => {
  const [name, setName] = useState("");
  const profile = `https://i.pravatar.cc/48?u=${uniqid()}`;
  function handleName(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.setData([
      ...props.data,
      {
        id: uniqid(),
        name,
        image: profile,
      },
    ]);
    setName("");
    props.onClick();
  }
  return (
    <>
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label>👫 Friend name</label>
        <input type="text" onChange={handleName} />
        <label>🌄 Image URL</label>
        <input type="text" defaultValue={profile} />
        <Button>Add</Button>
      </form>
    </>
  );
};

export default AddNewFriend;
