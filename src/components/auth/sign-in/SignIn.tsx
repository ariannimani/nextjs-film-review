import { useOnClickOutside } from "@/hooks";

import React, { FC, useRef, useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "../../../../lib/api";

type FormValues = {
  email: string;
  password: string;
};
interface SignInProps {
  onBlur: any;
}
const SignIn: FC<SignInProps> = ({ onBlur }) => {
  const ref = useRef(null);
  useOnClickOutside(ref, () => onBlur());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    try {
      await signIn(data).then(() => onBlur());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-wrapper" id="login-content" ref={ref}>
      <div className="login-content">
        <a href="#" className="close">
          x
        </a>
        <h3>Login</h3>
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <label>
              Email:
              <input
                type="text"
                id="email"
                // pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                {...register("email")}
              />
            </label>
          </div>

          <div className="row">
            <label>
              Password:
              <input
                type="password"
                {...register("password")}
                id="password"
                // pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
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
