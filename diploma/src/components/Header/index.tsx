import React from "react";
import logoImg from "../../image/logo.png";

import "./style.scss";
import Cart from "../Cart";
import LoginModal from "components/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "store/root";
import RegistrationModal from "components/RegistrationModal";
import { setActiveUser } from "store/slices/authSlice";

function Header() {
  const dispatch = useDispatch();
  const activeUser = useSelector((state: ReduxStore) => state.auth.activeUser);

  const logout = () => {
    dispatch(setActiveUser(null));
  };

  return (
    <div className="header">
      <div className="header__wrapper">
        <img className="header__imglogo" src={logoImg} alt="main logo" />
        <div className="header__actions">
          <Cart />
          {activeUser ? (
            <>
              <div>
                <p>{activeUser.name}</p>&nbsp;&nbsp;<p>{activeUser.lastName}</p>
              </div>
              <button onClick={logout}>Выход</button>
            </>
          ) : (
            <>
              <LoginModal />
              <RegistrationModal />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
