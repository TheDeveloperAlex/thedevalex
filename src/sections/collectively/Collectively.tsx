import React from "react";
import Button from "../../components/button";

export default function Collectively() {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <article className="container" id={"collectively"}>
      <h2>LET’S WORK TOGETHER</h2>
      <form onSubmit={onSubmit}>
        <label>
          Your name
          <input />
        </label>
        <label>
          E-mail
          <input />
        </label>
        <label>
          Message
          <textarea></textarea>
        </label>
        <Button className={""} type={"submit"}>
          Send
        </Button>
      </form>
    </article>
  );
}
