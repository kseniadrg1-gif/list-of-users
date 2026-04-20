import React from "react";
import "./App.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";
import { usersData } from "./components/data";
import confetti from "canvas-confetti"; // ← добавить

function App() {
  const [users, setUsers] = React.useState(usersData);
  const [isLoading, setLoading] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [invites, setInvites] = React.useState([]);
  const [success, setSuccess] = React.useState(false);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } }); // ← добавить
    setSuccess(true);
  };

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} onClickBack={() => setSuccess(false)} />
      ) : (
        <Users
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
}

export default App;
