import Link from "next/link";
import Image from "next/image";
import AnimatedDiv from "../components/AnimatedDiv";

const AboutPage = () => {
  return (
    <section className="container_pad mx-auto mt-[60px] max-w-screen-2xl pt-14 text-darkBlue md:mt-[72px] md:pb-12 md:pt-16 xl:pt-24">
      {/* <h3 className="mb-3 text-center text-lg font-semibold text-primary lg:mb-4 lg:text-2xl">
        ABOUT THE AUTHOR
      </h3> */}
      {/* <h2 className="text-center text-3xl font-bold underline decoration-primary underline-offset-[40px] md:text-4xl xl:text-5xl">
        ARNOLD PECKHAM
      </h2> */}

      {/* about */}
      <div className="grid gap-14 md:grid-cols-12 lg:gap-20">
        <div className="relative mx-auto w-fit md:col-span-4 md:mx-0">
          {/* image */}
          <div className="top-[72px] mx-auto w-fit md:sticky md:mx-0">
            <AnimatedDiv variant="fadeInUp" delay={0.2}>
              <div className="rounded bg-white p-2 shadow-2xl shadow-darkBlue/55">
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
            {/* social-icons */}
            <AnimatedDiv variant="fadeInLeft" delay={1}>
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
            </AnimatedDiv>
          </div>
        </div>

        {/* txt */}
        <div className="mt-16 overflow-hidden md:col-span-8 md:mt-8">
          <AnimatedDiv variant="fadeInRight" delay={0.6}>
            <div className="mb-10 w-fit border-b-4 border-primary pb-6">
              <h1 className=" text-4xl font-extrabold leading-none tracking-tight  md:text-5xl xl:text-6xl">
                ABOUT ARNOLD <br /> PECKHAM
              </h1>
            </div>
          </AnimatedDiv>
          <AnimatedDiv variant="fadeInUp" delay={1}>
            <p className="text-base font-light leading-7">
              Arnold Peckham is a seasoned finance expert known for his
              insightful perspectives on modern business practices. Residing in
              the United States, Arnold brings a wealth of experience to the
              table, combining strategic insights with a deep understanding of
              global markets. His journey in finance began decades ago, evolving
              alongside the dynamic shifts in technology and industry trends.
              <br />
              <br />
              Arnold's passion for finance innovation is palpable in his
              writings, where he delves into topics like global outsourcing and
              cutting-edge wealth management strategies. His distinguished
              career spans advising businesses on operational efficiency and
              assisting investors in navigating digital transformations in
              finance.
              <br />
              <br />
              Beyond his professional achievements, Arnold is an avid advocate
              for continuous learning and mentorship, guiding aspiring
              professionals towards success in the finance realm. When not
              writing or consulting, you can find Arnold exploring new
              investment opportunities or enjoying time with his family.
              <br />
              <br />
              Join Arnold on his mission to revolutionize finance through
              innovation and strategic thinking. Dive into his books, attend his
              workshops, and embark on a journey towards financial empowerment
              and growth with Arnold Peckham.
            </p>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
