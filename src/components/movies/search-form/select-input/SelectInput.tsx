import React, { FC } from "react";

interface SelectInputProps {
  title: string;
  filterTitle: string;
  options: string[];
  register: any;
}
const SelectInput: FC<SelectInputProps> = ({
  title,
  filterTitle,
  options,
  register,
}) => {
  return (
    <div className="col-md-12 form-it">
      <label>{title}</label>
      <div className="group-ip">
        <select
          name="skills"
          className="ui fluid dropdown"
          {...register(filterTitle)}
        >
          <option value="">Select to filter {filterTitle}</option>
          {options.map((option: any) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
