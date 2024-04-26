"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
import HomeReview from "./components/HomeReview";
import AnimatedDiv from "./components/AnimatedDiv";

export default function Home() {
  return (
    <>
      {/* New Book Hero Section */}
      <section className="container_pad mx-auto max-w-screen-2xl bg-global-bg bg-cover bg-fixed bg-center pb-16 pt-[124px] md:pt-[136px]">
        <div className="flex flex-col-reverse items-center justify-center gap-14 overflow-hidden py-6 md:flex-row-reverse lg:gap-16 lg:py-16 xl:gap-20">
          <AnimatedDiv variant="fadeInRight" delay={0.8}>
            <div className="max-w-sm text-white">
              {" "}
              <h3 className="mb-5 max-w-full text-center text-lg font-medium leading-none tracking-tight text-primary md:max-w-[240px] md:text-left md:text-xl xl:text-2xl">
                LATEST RELEASE BY ARNOLD PECKHAM
              </h3>
              <div className="mx-auto mb-4 w-fit border-b-4 border-l-4 border-primary pb-5 pl-5 md:mx-0">
                <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
                  GLOBAL <br /> $OURCING
                </h1>
              </div>
              <p className="mb-6 text-center font-light md:text-left md:text-lg lg:mb-8 lg:text-xl">
                The bottom-line impact of sourcing for funds globally.
              </p>
              <Link
                href="/books/global-sourcing"
                className="mx-auto block w-fit md:mx-0"
              >
                <Button />
              </Link>
            </div>
          </AnimatedDiv>
          <AnimatedDiv variant="fadeInLeft" delay={0.2}>
            <Image
              src="/globalbook.webp"
              alt="Global Sourcing book image"
              width={0}
              height={0}
              sizes="100vw (max-width: 896px) 45vw"
              className="mx-auto h-auto w-full max-w-[240px] md:mx-0 lg:max-w-xs"
              priority={true}
            />
          </AnimatedDiv>
        </div>
      </section>
      {/* New Book Hero Section End */}

      {/* BOOKS Section */}
      <section className="container_pad mt-20 text-center text-darkBlue lg:mt-36">
        <AnimatedDiv variant="fadeInUp" delay={0.2}>
          <h3 className="mb-3 text-lg font-semibold text-primary lg:mb-4 lg:text-2xl">
            FINANCE AND INNOVATION
          </h3>
          <h2 className="text-3xl font-bold underline decoration-primary underline-offset-[40px] md:text-4xl xl:text-5xl">
            BOOKS
          </h2>
        </AnimatedDiv>

        {/* books */}
        <AnimatedDiv variant="fadeInUp" delay={0.6}>
          <div className="mx-auto mt-24 flex max-w-screen-md flex-col items-center justify-center gap-16 md:flex-row md:gap-10 lg:mt-32">
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
              <h4 className="mb-3 mt-8 text-2xl font-medium lg:mt-12">
                Global Sourcing
              </h4>
              <p className="mb-5 text-base font-light lg:text-lg">
                "An insightful guide that demystifies the outsourcing landscape.
                This book not only highlights the benefits but also addresses
                the potential challenges and how to mitigate them. A valuable
                resource for entrepreneurs and managers alike."
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
              <h4 className="mb-3 mt-8 text-2xl font-medium lg:mt-12">
                Future Financiers
              </h4>
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
      {/* BOOKS Section end */}

      {/* ABOUT Section */}
      <section className="container_pad mx-auto mt-20 max-w-screen-2xl bg-global-bg bg-cover bg-fixed bg-center py-16 text-white md:py-20 lg:mt-36">
        <AnimatedDiv variant="fadeInUp" delay={0.2}>
          <h3 className="mb-3 text-center text-lg font-semibold text-primary lg:mb-4 lg:text-2xl">
            ABOUT THE AUTHOR
          </h3>
          <div className="mx-auto mb-10 w-fit border-b-4 border-primary pb-6">
            <h2 className="text-center text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl">
              ARNOLD PECKHAM
            </h2>
          </div>
        </AnimatedDiv>
        {/* <h2 className="text-center text-3xl font-bold underline decoration-primary underline-offset-[40px] md:text-4xl xl:text-5xl">
          ARNOLD PECKHAM
        </h2> */}

        {/* about */}
        <div className="mt-20 grid gap-16 md:grid-cols-12 lg:mt-24">
          <div className="relative mx-auto w-fit md:col-span-4 md:mx-0">
            {/* image */}

            <div className="top-[72px] mx-auto w-fit md:sticky md:mx-0">
              <AnimatedDiv variant="fadeInUp" delay={0.4}>
                <div className="rounded bg-white p-1">
                  <Image
                    src="/arnold.webp"
                    alt="Arnold Peckham's image"
                    width={0}
                    height={0}
                    sizes="100vw (max-width: 896px) 45vw"
                    className="h-auto w-full max-w-[240px] md:mx-0 lg:max-w-xs"
                    // priority={true}
                  />
                </div>
              </AnimatedDiv>
            </div>

            {/* social-icons */}
            <div className="absolute -bottom-10 left-1/2 z-10 flex w-full max-w-44 -translate-x-1/2 justify-center gap-4 rounded bg-white px-3 py-4 shadow-2xl">
              <Link href="#" className="hover:opacity-65 active:opacity-100">
                <Image
                  src="/facebook.svg"
                  alt="Facebook icon"
                  width={40}
                  height={40}
                  // sizes="100vw (max-width: 896px) 45vw"
                  // className="mx-auto h-auto w-full max-w-[240px] md:mx-0 lg:max-w-xs"
                  // priority={true}
                />
              </Link>
              <Link href="#" className="hover:opacity-65 active:opacity-100">
                <Image
                  src="/x.svg"
                  alt="Twitter-X icon"
                  width={40}
                  height={40}
                  // sizes="100vw (max-width: 896px) 45vw"
                  // className="mx-auto h-auto w-full max-w-[240px] md:mx-0 lg:max-w-xs"
                  // priority={true}
                />
              </Link>
              <Link href="#" className="hover:opacity-65 active:opacity-100">
                <Image
                  src="/instagram.svg"
                  alt="Instagram icon"
                  width={40}
                  height={40}
                  // sizes="100vw (max-width: 896px) 45vw"
                  // className="mx-auto h-auto w-full max-w-[240px] md:mx-0 lg:max-w-xs"
                  // priority={true}
                />
              </Link>
            </div>
          </div>

          {/* txt */}
          <div className="overflow-hidden md:col-span-8">
            <AnimatedDiv variant="fadeInRight" delay={1}>
              <h4 className="mb-6 mt-8 text-2xl font-medium lg:mt-12">
                Finance and Innovation Writer
              </h4>
              <p className="mb-5 text-base font-light leading-7">
                Arnold Peckham is a distinguished finance author and innovator
                based in the United States. With a keen interest in global
                outsourcing and innovative financial strategies, Arnold's work
                has empowered businesses and investors to navigate complex
                financial landscapes with confidence.
                <br />
                <br /> Explore Arnold's books and discover how you can redefine
                efficiency and success in the world of finance. Join Arnold on
                his mission to revolutionize finance through innovation and
                strategic thinking. Dive into his books, attend his workshops,
                and embark on a journey towards financial empowerment and growth
                with Arnold Peckham.
              </p>
              <Link href="/about">
                <Button />
              </Link>
            </AnimatedDiv>
          </div>
        </div>
      </section>
      {/* ABOUT Section end */}

      {/* REVIEW Section */}
      <section className="container_pad mt-20 text-center text-darkBlue lg:mt-36">
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
          <AnimatedDiv variant="fadeInUp" delay={0.8}>
            <HomeReview />
          </AnimatedDiv>
        </div>
      </section>
      {/* REVIEW Section end */}
    </>
  );
}
