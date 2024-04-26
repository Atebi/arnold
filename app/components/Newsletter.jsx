import React from "react";
import Button from "./Button";
import AnimatedDiv from "./AnimatedDiv";

const Newsletter = () => {
  return (
    <div
      id="newsletter"
      className="container_pad mt-20 py-20 text-center text-white lg:mt-36 xl:py-20"
    >
      <div className="mx-auto max-w-xl lg:max-w-2xl">
        <AnimatedDiv variant="fadeInUp">
          <h3 className="mb-3 text-center text-lg font-semibold text-primary lg:mb-4 lg:text-2xl">
            STAY UP TO DATE
          </h3>
          <h2 className="text-center text-3xl font-bold underline decoration-primary underline-offset-[40px] md:text-4xl xl:text-5xl">
            NEWSLETTER
          </h2>

          <p className="mb-8 mt-20 text-base font-light md:text-xl">
            Subscribe to my newsletter and get updates about upcoming books,
            exclusive discounts and events.
          </p>

          {/* sign-up form */}
          <div>
            <form className="flex flex-col gap-3 md:flex-row md:gap-0">
              <input
                className="block w-full rounded border border-gray-400 bg-transparent p-3  text-sm text-white caret-primary outline-none focus:border-primary focus:ring-1 focus:ring-primary sm:rounded-none sm:rounded-l-lg "
                placeholder="Email"
                type="email"
                id="email"
                required={true}
              />
              {/* <Button text="SUBSCRIBE" /> */}
              <button className="rounded bg-primary px-5 py-3 text-base font-medium text-white ring-1 ring-sky-300 hover:bg-darkBlue focus:opacity-100 focus:ring-4 md:rounded-none md:rounded-r">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </AnimatedDiv>
      </div>
    </div>
  );
};

export default Newsletter;
