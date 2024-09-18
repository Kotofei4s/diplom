import React, { FormEventHandler, useState } from "react";
import { toast } from "react-toastify";

import "./style.scss";

function Form() {
  const [email, setEmail] = useState("");

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    toast.success("Вы успешно подписались на рассылку новостей!");
    setEmail("");
  };

  return (
    <div className="subscription_form__wrapper">
      <h2 className="subscription_form__title">SUBSCRIBE TO NEWS LETTER</h2>
      <p className="subscription_form__subtitle">
        Be the first to know about new IT books, upcoming relizes exclusive
        offers and more.
      </p>
      <form onSubmit={onSubmit} className="subscription_form">
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className="subscription_form__input"
          type="email"
          id="name"
          placeholder="Your email..."
        />
        <button className="subscription_form__button">
          <p className="button__text">SUBSCRIBE</p>
        </button>
      </form>
    </div>
  );
}

export default Form;
