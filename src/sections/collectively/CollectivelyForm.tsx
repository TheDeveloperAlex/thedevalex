import React, { useState, Dispatch, SetStateAction } from "react";

import CustomButton from "../../components/button";
import CustomInput from "../../components/input";
import CustomTextarea from "../../components/textarea";
// import SnackbarStack from "../../components/snackbarStack";

import { testIsValid } from "../../utils/patterns";

import "./CollectivelyForm.css";

interface userFormState {
  name: string;
  message: string;
}
interface userFormValidState {
  name: boolean;
  message: boolean;
}

const validateInput = (
  isValid: boolean,
  id: "name" | "message",
  error: userFormValidState,
  validSetter: Dispatch<SetStateAction<userFormValidState>>
) => {
  if (!isValid) {
    validSetter((s) => ({ ...s, [id]: true }));
    return false;
  } else {
    if (error[id]) {
      validSetter((s) => ({ ...s, [id]: false }));
    }
    return true;
  }
};

export default function CollectivelyForm() {
  const [value, setValue] = useState<userFormState>({
    name: "",
    message: "",
  });

  const [error, setError] = useState<userFormValidState>({
    name: false,
    message: false,
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidName: boolean = validateInput(
      testIsValid(value.name),
      "name",
      error,
      setError
    );
    const isValidMessage: boolean = validateInput(
      testIsValid(value.message),
      "message",
      error,
      setError
    );

    if (isValidName && isValidMessage) {
      const mailtoLink = `mailto:${"semenenkoalex688@gmail.com"}?subject=${encodeURIComponent(
        value.name
      )}&body=${encodeURIComponent(value.message)}`;
      window.open(mailtoLink, "_blank");
    }
  };

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue((s) => ({ ...s, [e.target.id]: e.target.value }));
  };

  return (
    <>
      <form className="collectively-section-form" onSubmit={onSubmit}>
        <CustomInput
          className="collectively-section-input"
          id={"name"}
          value={value.name}
          label={"Your name*"}
          onChange={onChange}
          error={error.name}
        />
        <CustomInput
          className="collectively-section-input"
          id={"email"}
          type={"email"}
          defaultValue={"semenenkoalex688@gmail.com"}
          label={"Recipient"}
          disabled
        />
        <CustomTextarea
          id={"message"}
          label={"Message*"}
          className="collectively-section-textarea"
          value={value.message}
          onChange={onChange}
          error={error.message}
        />
        <CustomButton
          className="collectively-section-submit-button"
          type={"submit"}
        >
          Send
        </CustomButton>
      </form>
    </>
  );
}
