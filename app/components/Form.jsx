import React from "react";
import Button from "./Button";

const Form = () => {
  return (
    <form>
      <div className="mb-2">
        <label
          className="mb-1 block hidden text-base text-neutral-500"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className={`w-full appearance-none rounded border border-gray-300 bg-gray-100 px-3 py-4 leading-tight text-darkBlue caret-primary hover:bg-gray-200 focus:border-primary focus:bg-transparent focus:outline-none`}
          // value={name}
          placeholder="Name"
          autoComplete="on"
          id="name"
          type="text"
          // onChange={(e) => setName(e.target.value)}
          required
          // onFocus={toggleColour}
          // onBlur={toggleColour}
        />
      </div>

      <div className="mb-2">
        <label
          className="mb-1 block hidden text-base text-neutral-500"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className={`w-full appearance-none rounded border border-gray-300 bg-gray-100 px-3 py-4 leading-tight text-darkBlue caret-primary hover:bg-gray-200 focus:border-primary focus:bg-transparent focus:outline-none`}
          // value={email}
          placeholder="Email"
          autoComplete="on"
          id="email"
          type="email"
          required
          // onChange={(e) => setEmail(e.target.value)}
          // onFocus={toggleColour}
          // onBlur={toggleColour}
        />
      </div>

      <div className="mb-2">
        <label
          className="mb-1 block hidden text-base text-neutral-500"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className={`w-full appearance-none rounded border border-gray-300 bg-gray-100 px-3 py-4 leading-tight text-darkBlue caret-primary hover:bg-gray-200 focus:border-primary focus:bg-transparent focus:outline-none`}
          // value={message}
          placeholder="Message"
          id="message"
          type="text"
          // cols={4}
          rows={4}
          required
          // onChange={(e) => setMessage(e.target.value)}
          // onFocus={toggleColour}
          // onBlur={toggleColour}
        ></textarea>
      </div>

      <Button text="Send  >>" />
    </form>
  );
};

export default Form;
