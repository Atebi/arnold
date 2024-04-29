import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import FFReview from "@/app/components/FFReview";
import AnimatedDiv from "@/app/components/AnimatedDiv";

const FFPage = () => {
  return (
    <div className="mx-auto max-w-screen-2xl pb-10 md:pb-12 xl:pb-16">
      <section className="container_pad bg-ff-bg bg-cover bg-fixed bg-center pb-16 pt-[124px] md:pb-14 md:pt-[152px] lg:pb-16 xl:pb-20 xl:pt-[176px]">
        {/* book */}
        <div className="grid gap-14 text-white md:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* Image and Links */}
          <div className="relative mx-auto w-fit md:col-span-4 md:mx-0">
            {/* image */}
            <div className="top-6 mx-auto w-fit md:sticky md:col-span-4 md:mx-0">
              <AnimatedDiv variant="fadeInLeft" delay={0.2}>
                <Image
                  src="/ffbook.webp"
                  alt="Future Financiers book image"
                  width={0}
                  height={0}
                  sizes="100vw (max-width: 896px) 45vw"
                  className="mx-auto h-auto w-full max-w-[240px] md:mx-0 lg:max-w-80 xl:max-w-96"
                  priority={true}
                />
              </AnimatedDiv>

              {/* product links */}
              <AnimatedDiv variant="fadeInUp" delay={1}>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button text="APPLE BOOKS" />
                  <Button text="AUDIBLE" />
                  <Button text="AMAZON" />
                  <Button text="INDIEBOUND" />
                </div>
              </AnimatedDiv>
            </div>
          </div>

          {/* title and synopsis */}
          <div className="mt-6 overflow-hidden md:col-span-8 md:mt-1">
            <AnimatedDiv variant="fadeInRight" delay={0.4}>
              <div className="mb-4 w-fit border-b-4 border-l-4 border-primary pb-5 pl-5">
                <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
                  FUTURE <br /> FINANCIER$
                </h1>
              </div>
            </AnimatedDiv>

            <AnimatedDiv variant="fadeInUp" delay={0.7}>
              <p className="mb-10 font-medium md:text-lg lg:mb-8 lg:text-xl">
                Redefining and Navigating the Future of Wealth Management.
              </p>
            </AnimatedDiv>

            <AnimatedDiv variant="fadeInUp" delay={1}>
              {" "}
              <p className="text-base font-extralight leading-7 lg:text-xl lg:leading-8">
                "Future Financiers" unveils ground-breaking approaches to wealth
                management tailored for the digital age. This forward-thinking
                guide equips readers with cutting-edge tools and methodologies
                to optimize investment portfolios, mitigate risks, and
                capitalize on emerging trends in fintech and innovation.
                <br />
                <br />
                From AI-driven investment algorithms to blockchain applications
                in asset management, this book empowers readers to embrace
                innovation and secure financial success in an ever-evolving
                landscape.
                <br />
                <br />
                Ideal for finance professionals, investors, and anyone
                interested in the future of wealth creation.
              </p>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* REVIEW Section */}
      <section className="container_pad mt-20 text-center text-darkBlue md:mt-28 lg:mt-36">
        <AnimatedDiv variant="fadeInUp" delay={0.2}>
          <h3 className="mb-3 text-lg font-semibold text-primary lg:mb-4 lg:text-2xl">
            WHAT READERS ARE SAYING
          </h3>
          <h2 className="text-3xl font-bold underline decoration-primary underline-offset-[40px] md:text-4xl xl:text-5xl">
            REVIEWS
          </h2>
        </AnimatedDiv>

        {/* reviews */}
        <div className="mx-auto mt-20 lg:mt-24">
          <AnimatedDiv variant="fadeInUp" delay={0.6}>
            {" "}
            <FFReview />
          </AnimatedDiv>
        </div>
      </section>
      {/* REVIEW Section end */}

      {/* BUY SECTION */}
      <section className="container_pad mt-20 text-center text-darkBlue md:mt-28 lg:mt-36">
        <AnimatedDiv variant="fadeInUp">
          {" "}
          <h2 className="text-3xl font-bold underline decoration-primary underline-offset-[40px] md:text-4xl xl:text-5xl">
            BUY THE BOOK
          </h2>
          {/* product links */}
          <div className="mt-20 flex flex-wrap justify-center gap-4 lg:mt-24">
            <Button text="APPLE BOOKS" />
            <Button text="AUDIBLE" />
            <Button text="AMAZON" />
            <Button text="INDIEBOUND" />
          </div>
        </AnimatedDiv>
      </section>
      {/* BUY Section end */}
    </div>
  );
};

export default FFPage;
