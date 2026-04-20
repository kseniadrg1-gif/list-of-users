import React from "react";
import { Skeleton } from "./Skeleton";
import { User } from "./User";

export const Users = ({
  items,
  isLoading,
  searchValue,
  onChandeSearchValue,
  invites, // ← добавить
  onClickInvite, // ← добавить
}) => {
  console.log(searchValue);

  const filteredItems = items.filter((obj) => {
    const fullName = (obj.first_name + " " + obj.last_name).toLowerCase();
    const email = obj.email.toLowerCase();
    const query = searchValue.toLowerCase();
    return fullName.includes(query) || email.includes(query);
  });

  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          value={searchValue}
          onChange={onChandeSearchValue}
          type="text"
          placeholder="Найти пользователя..."
        />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {filteredItems.length > 0 ? (
            filteredItems.map((obj) => (
              <User
                onClickInvit={onClickInvite}
                key={obj.id}
                user={obj}
                isInvited={invites.includes(obj.id)}
                onClickInvite={onClickInvite}
              />
            ))
          ) : (
            <div className="skeleton-list">Нет пользователей</div>
          )}
        </ul>
      )}
      <button onClick={onClickSendInvites} className="send-invite-btn">
        Отправить приглашение
      </button>
    </>
  );
};
