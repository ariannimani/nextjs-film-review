import { useOnClickOutside } from "@/hooks";
import React, { FC, useRef } from "react";

interface SignUpProps {
  onBlur: any;
}
const SignUp: FC<SignUpProps> = ({ onBlur }) => {
  const ref = useRef(null);
  useOnClickOutside(ref, () => onBlur());

  return (
    <div className="login-wrapper" id="signup-content" ref={ref}>
      <div className="login-content">
        <a href="#" className="close">
          x
        </a>
        <h3>sign up</h3>
        <form method="post" action="#">
          <div className="row">
            <label>
              Username:
              <input
                type="text"
                name="username"
                id="username-2"
                placeholder="Hugh Jackman"
                pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
              />
            </label>
          </div>

          <div className="row">
            <label>
              your email:
              <input
                type="password"
                name="email"
                id="email-2"
                placeholder=""
                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              />
            </label>
          </div>
          <div className="row">
            <label>
              Password:
              <input
                type="password"
                name="password"
                id="password-2"
                placeholder=""
                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              />
            </label>
          </div>
          <div className="row">
            <label>
              re-type Password:
              <input
                type="password"
                name="password"
                id="repassword-2"
                placeholder=""
                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              />
            </label>
          </div>
          <div className="row">
            <button type="submit">sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
