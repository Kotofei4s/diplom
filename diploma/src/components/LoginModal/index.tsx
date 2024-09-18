import React, { FormEventHandler, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import authImage from "../../image/autorization.png";
import Modal from "../Modal";
import { ReduxStore } from "store/root";
import { setActiveUser } from "store/slices/authSlice";

import "./style.scss";

const LoginModal = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: ReduxStore) => state.auth.users);

  const [isModalOpen, setModalOpen] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const user = users.find(({ login: userLogin }) => userLogin === login);
    const isUserExist = user?.login;

    if (isUserExist) {
      if (user && user.password === password) {
        dispatch(setActiveUser(user));
        toast.success("Вы успешно авторизовались");
        closeModal();
      } else {
        toast.error("Вы ввели некорректные данные");
      }
    } else {
      toast.error("Вы ввели некорректные данные");
    }
  };

  return (
    <div>
      <button className="button__autorization" onClick={openModal}>
        <img className="header__img" src={authImage} alt="auth logo" />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="login__modal">
          <h2 className="login__title">Войти в аккаунт</h2>
          <form onSubmit={onSubmit} className="login__modal__form">
            <input
              className="login__input"
              required
              value={login}
              type="email"
              placeholder="Логин"
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              className="login__input"
              required
              value={password}
              type="password"
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login__button">Войти</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;
