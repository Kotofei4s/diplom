import React, { FormEventHandler, useState } from "react";
import authImage from "../../image/regestration.png";
import Modal from "../Modal";

import "./style.scss";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "store/slices/authSlice";

const RegistrationModal = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    dispatch(
      addUser({
        name,
        lastName,
        login,
        password,
      })
    );

    toast.success(`Вы успешно зарегистрировались, ${name} ${lastName}`);
    closeModal();
    setName("");
    setLastName("");
    setLogin("");
    setPassword("");
  };

  return (
    <div>
      <button className="button__registration" onClick={openModal}>
        <img className="header__img" src={authImage} alt="auth logo" />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="registration-modal">
          <h2>Зарегистрировать аккаунт</h2>
          <form onSubmit={onSubmit} className="registration-modal__form">
            <input
              required
              value={name}
              type="text"
              placeholder="Имя"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              value={lastName}
              type="text"
              placeholder="Фамилия"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              required
              value={login}
              type="email"
              placeholder="Логин"
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              required
              value={password}
              type="password"
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Зарегистрироваться</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default RegistrationModal;
