"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";
import {
  Cloud,
  Headphones,
  Lightbulb,
  Zap,
  Code,
  Briefcase,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

function Innovation() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [innovationList, setinnovationList] = useState<any>(null);

  interface ServiceCard {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    colorTheme:
      | "purple"
      | "blue"
      | "amber"
      | "green"
      | "indigo"
      | "rose"
      | "cyan"
      | "teal";
  }

  const servicesData: ServiceCard[] = [
    {
      id: "oracle-cloud",
      title: "Oracle Cloud Implementation",
      description:
        "We specialize in seamless Oracle Cloud ERP implementations tailored to your business. From planning and configuration to deployment and optimization, Shriox ensures every step is aligned with industry best practices. With human expertise supported by AI driven insights, we accelerate timelines, reduce risks, and deliver clarity at every stage.",
      icon: <Cloud className="w-8 h-8" />,
      colorTheme: "purple",
    },
    {
      id: "app-support",
      title: "Application & Service Support",
      description:
        "Our support services go beyond troubleshooting. We act as your extended ERP team, providing proactive monitoring, issue resolution, and performance optimization. Whether it’s day to day queries or complex challenges, Shriox ensures your applications run smoothly and reliably.",
      icon: <Headphones className="w-8 h-8" />,
      colorTheme: "blue",
    },
    {
      id: "second-opinion",
      title: "Second Opinion Services",
      description:
        "Sometimes you just need a fresh perspective. Shriox offers independent reviews of your ERP strategies, implementations, or vendor proposals. With our blend of human judgment and AI assisted analysis, we provide unbiased recommendations that help you make confident, informed decisions.",
      icon: <Lightbulb className="w-8 h-8" />,
      colorTheme: "amber",
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      description:
        "We help businesses embrace the future with confidence. Shriox guides you through automation, AI enabled analytics, and process modernization - always with a human centred approach. Our goal is to make technology work for you, simplifying complexity and unlocking new opportunities.",
      icon: <Zap className="w-8 h-8" />,
      colorTheme: "green",
    },
    {
      id: "app-development",
      title: "Application Development",
      description:
        "Shriox designs and develops custom applications that extend the power of your ERP ecosystem. From integrations to user friendly modules, our solutions are scalable and secure, and tailored to your unique requirements.",
      icon: <Code className="w-8 h-8" />,
      colorTheme: "indigo",
    },
    {
      id: "advisory-consulting",
      title: "Management Advisory & Consulting",
      description:
        "We provide strategic guidance to help you align ERP systems with business goals. Our advisory services cover process optimization, compliance, risk management, and governance. By combining cultural understanding with modern tools, Shriox empowers leaders to make decisions that are both practical and future ready.",
      icon: <Briefcase className="w-8 h-8" />,
      colorTheme: "rose",
    },
    {
      id: "testing-service",
      title: "Testing as a Service",
      description:
        "Quality assurance is critical to ERP success. Our testing services combine human expertise with AI enabled tools to detect issues early and minimize downtime, and ensure flawless performance. We provide end to end testing support, from functional validation to performance benchmarking.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      colorTheme: "cyan",
    },
    {
      id: "training-service",
      title: "Training as a Service",
      description:
        "Knowledge empowers teams. Shriox offers structured training programs to help your workforce understand, adopt, and maximize ERP systems. Our training blends practical, hands on learning with AI assisted tools, ensuring your team gains both confidence and competence.",
      icon: <BookOpen className="w-8 h-8" />,
      colorTheme: "teal",
    },
  ];

  const colorClassMapSetup2: Record<
    ServiceCard["colorTheme"],
    { bg: string; text: string; icon: string }
  > = {
    purple: {
      bg: "bg-purple-200 dark:bg-purple-900",
      text: "text-purple-700 dark:text-purple-200",
      icon: "text-purple-700 dark:text-purple-200",
    },
    blue: {
      bg: "bg-blue-200 dark:bg-blue-900",
      text: "text-blue-700 dark:text-blue-200",
      icon: "text-blue-700 dark:text-blue-200",
    },
    amber: {
      bg: "bg-amber-200 dark:bg-amber-900",
      text: "text-amber-700 dark:text-amber-200",
      icon: "text-amber-700 dark:text-amber-200",
    },
    green: {
      bg: "bg-green-200 dark:bg-green-900",
      text: "text-green-700 dark:text-green-200",
      icon: "text-green-700 dark:text-green-200",
    },
    indigo: {
      bg: "bg-indigo-200 dark:bg-indigo-900",
      text: "text-indigo-700 dark:text-indigo-200",
      icon: "text-indigo-700 dark:text-indigo-200",
    },
    rose: {
      bg: "bg-rose-200 dark:bg-rose-900",
      text: "text-rose-700 dark:text-rose-200",
      icon: "text-rose-700 dark:text-rose-200",
    },
    cyan: {
      bg: "bg-cyan-200 dark:bg-cyan-900",
      text: "text-cyan-700 dark:text-cyan-200",
      icon: "text-cyan-700 dark:text-cyan-200",
    },
    teal: {
      bg: "bg-teal-200 dark:bg-teal-900",
      text: "text-teal-700 dark:text-teal-200",
      icon: "text-teal-700 dark:text-teal-200",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setinnovationList(data?.innovationList);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const bottomAnimation = (index: any) => ({
    initial: { y: "25%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "25%", opacity: 0 },
    transition: { duration: 0.3, delay: 0.3 + index * 0.3 },
  });

  return (
    <section id="services">
      <div ref={ref} className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col justify-center items-center gap-10 lg:gap-16">
              <motion.div {...bottomAnimation(1)} className="text-center">
                <h2 style={{ fontSize: "4rem" }}>
                  {/* Where business vision becomes organizational excellence. */}

                  <TextGenerateEffect
                    words="Where business vision becomes"
                    delay={0.4}
                  />
                  <TextGenerateEffect
                    words="organizational excellence"
                    delay={1}
                    className="italic font-normal instrument-font"
                  />
                </h2>
              </motion.div>

              {/* <div ref={ref} className="w-full">
                <div className="grid auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 w-full">
                  {innovationList?.map((items: any, index: any) => {
                    return (
                      <motion.div
                        key={index}
                        className={`${items.bg_color} flex flex-col p-8 rounded-2xl gap-6 lg:gap-9`}
                        initial={{
                          scale: 1.2,
                          opacity: 0,
                          filter: "blur(8px)",
                        }}
                        animate={
                          inView
                            ? { scale: 1, opacity: 1, filter: "blur(0px)" }
                            : {}
                        }
                        transition={{
                          duration: 0.6,
                          delay: 0.3 + index * 0.2,
                          ease: "easeInOut",
                        }}
                      >
                        <div>
                          <Image
                            src={items.image}
                            alt="image"
                            height={40}
                            width={40}
                          />
                        </div>
                        <div>
                          <h3 className={`text-2xl ${items.txt_color}`}>
                            {items.title
                              .split("\n")
                              ?.map((line: any, i: number) => (
                                <React.Fragment key={i}>
                                  {line}
                                  <br />
                                </React.Fragment>
                              ))}
                          </h3>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div> */}

              {/* Services Grid */}
              {/* <div className="w-full bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300"> */}
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {servicesData.map((service) => {
                    const colors = colorClassMapSetup2[service.colorTheme];
                    return (
                      <div
                        key={service.id}
                        className={cn(
                          "rounded-2xl p-8 flex flex-col justify-start transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer",
                          colors.bg
                        )}
                      >
                        {/* Icon */}
                        <div className={cn("mb-6 w-8 h-8", colors.icon)}>
                          {service.icon}
                        </div>

                        {/* Title */}
                        <h3
                          className={cn(
                            "text-xl sm:text-2xl font-semibold mb-3",
                            colors.text
                          )}
                        >
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p
                          className={cn(
                            "text-[15px] text-foreground/70 leading-relaxed",
                            colors.text
                          )}
                        >
                          {service.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* </div> */}
            </div>
            
            {/* <div className="flex flex-col gap-4 xl:flex xl:flex-row bg-dark_black items-center justify-between dark:bg-white/5 py-8 px-7 sm:px-12 rounded-3xl w-full">
              <h4 className="text-white text-center xl:text-left">
                See Our Work in Action.
                <br /> Start Your Creative Journey with Us!
              </h4>
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <Link
                  href="/contact"
                  className="group gap-2 text-dark_black font-medium bg-white rounded-full flex items-center lg:gap-4 py-2 pl-5 pr-2 border border-white dark:border-opacity-50 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out"
                >
                  <span className="group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out">
                    Let’s Collaborate
                  </span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:-translate-x-36 transition-all duration-200 ease-in-out"
                  >
                    <rect
                      width="32"
                      height="32"
                      rx="16"
                      fill="#1B1D1E"
                      className=" transition-colors duration-200 ease-in-out group-hover:fill-white"
                    />
                    <path
                      d="M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668"
                      stroke="white"
                      strokeWidth="1.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:stroke-black"
                    />
                  </svg>
                </Link>
                <Link
                  href="/#work"
                  className="group border border-white dark:border-white/50 text-white font-medium bg-dark_black gap-2 rounded-full flex items-center justify-between lg:gap-4 py-2 pl-5 pr-2 hover:opacity-95 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out"
                >
                  <span className="group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out">
                    View Portfolio
                  </span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:-translate-x-[125px] transition-all duration-200 ease-in-out "
                  >
                    <rect width="32" height="32" rx="16" fill="white" />
                    <path
                      d="M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668"
                      stroke="#1B1D1E"
                      strokeWidth="1.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Innovation;
