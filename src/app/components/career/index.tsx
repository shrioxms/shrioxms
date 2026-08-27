"use client";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "motion/react";

function Career() {
  const ref = useRef(null);

  const targetUrl = "https://shrioxms.zohorecruit.in/jobs/Careers";

  const bottomAnimation = {
    initial: { y: "5%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  };

  return (
    <section id="career">
      <section className="flex justify-center">
        <div className="2xl:py-20 py-15">
          <div className="container">
            <div
              ref={ref}
              className="py-1 md:py-18 px-20 border border-dark_black/10 rounded-3xl 
              bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)]"
            >
              {/*  bg-[linear-gradient(to_top,#8e9eab,#eef2f3)]  */}
              <motion.div
                {...bottomAnimation}
                className="flex flex-col gap-6 items-center md:max-w-3xl mx-auto"
              >
                <div className="flex flex-col gap-3 items-center text-center">
                  <h2 className="text-3xl md:text-6xl dark:text-dark_black">
                    {/* Be Part of the ShrioxMS Growth Story */}
                    Join Us
                  </h2>
                  <p className="text-[1.3rem]  dark:text-dark_black">
                    We don’t just offer jobs; we offer pathways to excellence
                    and continuous professional development.
                  </p>
                </div>
                <Link
                  href={targetUrl}
                  className="group w-fit text-white font-medium bg-dark_black rounded-full flex items-center gap-4 py-2 pl-8 pr-3 hover:bg-transparent border border-dark_black"
                >
                  <span className="group-hover:translate-x-9 group-hover:text-dark_black transform transition-transform duration-200 ease-in-out">
                    Explore Career
                  </span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:-translate-x-36 transition-all duration-200 ease-in-out group-hover:rotate-45"
                  >
                    <rect
                      width="32"
                      height="32"
                      rx="16"
                      fill="white"
                      className="fill-white transition-colors duration-200 ease-in-out group-hover:fill-black"
                    />
                    <path
                      d="M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668"
                      stroke="#1B1D1E"
                      strokeWidth="1.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Career;
