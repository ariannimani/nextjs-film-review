import { useOnClickOutside } from "@/hooks";

import React, { FC, useRef } from "react";

interface SignInProps {
  onBlur: any;
}
const SignIn: FC<SignInProps> = ({ onBlur }) => {
  const ref = useRef(null);
  useOnClickOutside(ref, () => onBlur());

  return (
    <div className="login-wrapper" id="login-content" ref={ref}>
      <div className="login-content">
        <a href="#" className="close">
          x
        </a>
        <h3>Login</h3>
        <form method="post" action="#">
          <div className="row">
            <label>
              Username:
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Hugh Jackman"
                pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
              />
            </label>
          </div>

          <div className="row">
            <label>
              Password:
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******"
                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              />
            </label>
          </div>
          <div className="row">
            <div className="remember">
              <div>
                <input type="checkbox" name="remember" value="Remember me" />
                <span>Remember me</span>
              </div>
              <a href="#">Forget password ?</a>
            </div>
          </div>
          <div className="row">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="row">
          <p>Or via social</p>
          <div className="social-btn-2">
            <a className="fb" href="#">
              <i className="ion-social-facebook"></i>Facebook
            </a>
            <a className="tw" href="#">
              <i className="ion-social-twitter"></i>twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
