import { capitalizeFirstLetter } from "@/utils";
import React, { FC } from "react";
import SelectInput from "./select-input/SelectInput";
import DoubleSelectInput from "./double-select-input/DoubleSelectInput";
import { fetchData } from "@/pages/api/fetchData";
import {
  FieldElement,
  Ref,
  RegisterOptions,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface SearchFormProps {
  title: string;
  //FIXME: fix any type
  firstInput: any[];
  secondInput: any[];
  thirdInput: any[];
}

export type FormValues = {
  genres: string;
  rating: string;
  years: string;
};

const SearchForm: FC<SearchFormProps> = ({
  title,
  firstInput,
  secondInput,
  thirdInput,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div className="searh-form">
      <h4 className="sb-title">Search {title}</h4>
      <form className="form-style-1" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-12 form-it">
            <label>{capitalizeFirstLetter(title)} name</label>
            <input type="text" placeholder="Enter keywords" />
          </div>
          <SelectInput
            title={"Genres & Subgenres"}
            filterTitle="genres"
            options={firstInput}
            register={register}
          />
          <SelectInput
            title={"Rating Range"}
            filterTitle="rating"
            options={firstInput}
            register={register}
          />
          <div className="col-md-12 ">
            <input type="submit" className="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
