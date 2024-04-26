import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import AnimatedDiv from "../components/AnimatedDiv";

const BooksPage = () => {
  return (
    <section className="container_pad mx-auto mt-[60px] max-w-screen-2xl pt-14 text-center text-darkBlue md:mt-[72px] md:pt-16 xl:pt-24">
      <AnimatedDiv variant="fadeInUp" delay={0.2}>
        <h3 className="mb-3 text-lg font-semibold text-primary lg:mb-4 lg:text-2xl">
          FINANCE AND INNOVATION
        </h3>

        <div className="mx-auto mb-10 w-fit border-b-4 border-primary pb-6">
          <h1 className=" text-4xl font-extrabold leading-none tracking-tight  md:text-5xl xl:text-6xl">
            ARNOLD'S BOOKS
          </h1>
        </div>
      </AnimatedDiv>

      {/* books */}
      <AnimatedDiv variant="fadeInUp" delay={1}>
        <div className="mx-auto mt-14 flex max-w-screen-md flex-col items-center justify-center gap-16 md:mt-16 md:flex-row md:gap-10 lg:mt-20">
          {/* book-1 */}
          <div className="max-w-[240px] md:max-w-sm">
            <Image
              src="/globalbook.webp"
              alt="Global Sourcing book image"
              width={0}
              height={0}
              sizes="100vw (max-width: 896px) 45vw"
              className="mx-auto h-auto w-full max-w-[200px]"
            />
            <h2 className="mb-3 mt-8 text-2xl font-medium lg:mt-12">
              Global Sourcing
            </h2>
            <p className="mb-5 text-base font-light lg:text-lg">
              "An insightful guide that demystifies the outsourcing landscape.
              This book not only highlights the benefits but also addresses the
              potential challenges and how to mitigate them. A valuable resource
              for entrepreneurs and managers alike."
            </p>
            <Link href="/books/global-sourcing">
              <Button />
            </Link>
          </div>
          {/* book-2 */}
          <div className="max-w-[240px] md:max-w-sm">
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
            <p className="mb-5 text-base font-light lg:text-lg">
              "This book is a treasure trove of insights for finance
              professionals. It presents innovative approaches to wealth
              management with clarity and depth, making complex topics
              accessible to all readers. Highly recommended for anyone looking
              to future-proof their financial strategies."
            </p>
            <Link href="/books/future-financiers">
              <Button />
            </Link>
          </div>
        </div>
      </AnimatedDiv>
    </section>
  );
};

export default BooksPage;
