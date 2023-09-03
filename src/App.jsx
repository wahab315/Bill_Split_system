import { useState } from "react";
import AddNewFriend from "./components/AddNewFriend";
import BillForm from "./components/BillForm";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";
import { initialData } from "./data";
function App() {
  const [data, setData] = useState(initialData);

  const [showAddFriend, setShowAddFriend] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [selection, setSelection] = useState(null);

  function displayBillForm(item) {
    setSelection(data.find((obj) => obj.id === item.id));
    setShowForm(true);
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <Sidebar data={data} setShowForm={displayBillForm} />
          {showAddFriend && (
            <AddNewFriend
              data={data}
              setData={setData}
              showForm={setShowAddFriend}
              onClick={() => setShowAddFriend(false)}
            />
          )}
          <Button onClick={() => setShowAddFriend(!showAddFriend)}>
            {showAddFriend ? "Close" : "Add friend"}
          </Button>
        </div>
        <div>
          {showForm && (
            <BillForm
              name={selection.name}
              selected={selection}
              setSelected={setSelection}
              setData={setData}
              data={data}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
