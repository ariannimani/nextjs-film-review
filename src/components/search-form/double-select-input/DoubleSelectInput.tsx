import React, { FC } from "react";

interface DoubleSelectInput {
  title: string;
  //FIXME: fix any types
  option1: any;
  option2: any;
}

const DoubleSelectInput: FC<DoubleSelectInput> = ({
  title,
  option1,
  option2,
}) => {
  return (
    <div className="col-md-12 form-it">
      <label>{title}</label>
      <div className="row">
        <div className="col-md-6">
          <select>
            <option value="range">From</option>
            {option1.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <select>
            <option value="range">To</option>
            {option2.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DoubleSelectInput;
