import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button";
import GlobalReview from "@/app/components/GlobalReview";
import AnimatedDiv from "@/app/components/AnimatedDiv";

const GlobalPage = () => {
  return (
    <div className="mx-auto max-w-screen-2xl pb-10 md:pb-12 xl:pb-16">
      <section className="container_pad bg-global-bg bg-cover bg-fixed bg-center pb-16 pt-[124px] md:pb-14 md:pt-[152px] lg:pb-16 xl:pb-20 xl:pt-[176px]">
        {/* book */}
        <div className="grid gap-14 text-white md:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* Image and Links */}
          <div className="relative mx-auto w-fit md:col-span-4 md:mx-0">
            {/* image */}
            <div className="top-6 mx-auto w-fit md:sticky md:col-span-4 md:mx-0">
              <AnimatedDiv variant="fadeInLeft" delay={0.2}>
                <Image
                  src="/globalbook.webp"
                  alt="Global Sourcing book image"
                  width={0}
                  height={0}
                  sizes="100vw (max-width: 896px) 45vw"
                  className="mx-auto h-auto w-full max-w-[240px] md:mx-0 lg:max-w-80 xl:max-w-96"
                  priority={true}
                />
              </AnimatedDiv>

              {/* product links */}
              <AnimatedDiv variant="fadeInUp" delay={0.4}>
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
              <h3 className="mb-4 max-w-[240px] text-lg font-semibold text-primary md:text-2xl">
                LATEST RELEASE BY ARNOLD PECKHAM
              </h3>
              <div className="mb-4 w-fit border-b-4 border-l-4 border-primary pb-5 pl-5">
                <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
                  GLOBAL <br /> $OURCING
                </h1>
              </div>
            </AnimatedDiv>
            <AnimatedDiv variant="fadeInUp" delay={0.8}>
              <p className="mb-10 font-medium md:text-lg lg:mb-8 lg:text-xl">
                The bottom-line impact of sourcing for funds globally.
              </p>
            </AnimatedDiv>

            <AnimatedDiv variant="fadeInUp" delay={1}>
              <p className="text-base font-extralight leading-7 lg:text-xl lg:leading-8">
                In "Global Outsourcing," acclaimed finance author explores the
                transformative impact of outsourcing on modern businesses.
                <br />
                <br />
                From cost-effective strategies to harnessing international
                talent pools, this comprehensive guide illuminates how
                outsourcing can streamline operations, enhance competitiveness,
                and drive growth in a globalized economy.
                <br />
                <br />
                Drawing on real-world case studies and expert insights, this
                book is essential reading for executives, entrepreneurs, and
                managers seeking to leverage outsourcing as a strategic
                advantage.
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
            <GlobalReview />
          </AnimatedDiv>
        </div>
      </section>
      {/* REVIEW Section end */}

      {/* BUY SECTION */}
      <section className="container_pad mt-20 text-center text-darkBlue md:mt-28 lg:mt-36">
        <AnimatedDiv variant="fadeInUp">
          <h2 className="text-3xl font-bold underline decoration-primary underline-offset-[40px] md:text-4xl xl:text-5xl">
            BUY THE BOOK
          </h2>{" "}
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

      {/* OTHER BOOKS SECTION */}
      <section className="container_pad mt-28 text-center text-darkBlue md:mt-36 lg:mt-36 xl:mt-44">
        <AnimatedDiv variant="fadeInUp">
          <h2 className="text-3xl font-bold underline decoration-primary underline-offset-[40px] md:text-4xl xl:text-5xl">
            OTHER BOOKS
          </h2>{" "}
          <div className="mt-24 lg:mt-28">
            {/* book-1 */}
            <AnimatedDiv variant="fadeInUp" delay={0.4}>
              <div className="mx-auto max-w-[240px] md:max-w-sm">
                <Image
                  src="/ffbook.webp"
                  alt="Future Financiers book image"
                  width={0}
                  height={0}
                  sizes="100vw (max-width: 896px) 45vw"
                  className="shadow-l-2xl mx-auto h-auto w-full max-w-[200px]"
                />
                <h2 className="mb-3 mt-8 text-2xl font-medium lg:mt-12">
                  Future Financiers
                </h2>
                <p className="mb-5 text-base font-light lg:h-56 lg:text-lg">
                  "This book is a treasure trove of insights for finance
                  professionals. It presents innovative approaches to wealth
                  management with clarity and depth, making complex topics
                  accessible to all readers. Highly recommended for anyone
                  looking to future-proof their financial strategies."
                </p>
                <Link href="/books/future-financiers">
                  <Button />
                </Link>
              </div>
            </AnimatedDiv>
          </div>
        </AnimatedDiv>
      </section>
      {/* OTHERS Section end */}
    </div>
  );
};

export default GlobalPage;
