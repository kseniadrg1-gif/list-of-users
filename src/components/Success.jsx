import React from "react";

export const Success = ({ count, onClickBack }) => {
  return (
    <div className="success-block">
      <img src="/public/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button
        onClick={() => window.location.reload()}
        className="send-invite-btn"
      >
        Назад
      </button>
    </div>
  );
};
