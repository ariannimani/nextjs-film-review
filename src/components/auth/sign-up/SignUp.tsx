import { useOnClickOutside } from "@/hooks";
import React, { FC, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { signUp } from "../../../../lib/api";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
interface SignUpProps {
  onBlur: any;
}
const SignUp: FC<SignUpProps> = ({ onBlur }) => {
  const ref = useRef(null);
  useOnClickOutside(ref, () => onBlur());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log({ data });
    try {
      await signUp(data).then(() => onBlur());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-wrapper" id="signup-content" ref={ref}>
      <div className="login-content">
        <a href="#" className="close">
          x
        </a>
        <h3>sign up</h3>
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          {/* <div className="row">
            <label>
              Username:
              <input
                type="text"
                id="username-2"
                {...register("username")}
                // placeholder="Hugh Jackman"
                // pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
              />
            </label>
          </div> */}

          <div className="row">
            <label>
              First Name:
              <input
                type="text"
                id="username-2"
                {...register("firstName")}
                // placeholder="Hugh Jackman"
                // pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
              />
            </label>
          </div>
          <div className="row">
            <label>
              LastName:
              <input
                type="text"
                id="username-2"
                {...register("lastName")}
                // placeholder="Hugh Jackman"
                // pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
              />
            </label>
          </div>
          <div className="row">
            <label>
              Email:
              <input
                type="email"
                id="email-2"
                {...register("email")}

                // placeholder=""
                // pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              />
            </label>
          </div>
          <div className="row">
            <label>
              Password:
              <input
                type="password"
                id="password-2"
                {...register("password")}

                // placeholder=""
                // pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              />
            </label>
          </div>
          {/* <div className="row">
            <label>
              re-type Password:
              <input
                type="password"
                name="password"
                id="repassword-2"
                {...register("password")}
                // placeholder=""
                // pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              />
            </label>
          </div> */}
          <div className="row">
            <button type="submit">sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
