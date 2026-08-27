"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import { Users, Zap, Brain, Shield, Sparkles } from "lucide-react";
// import aboutUsImage from "../../../../../public/images/home/aboutUs/diverse-business-meeting.png";
import aboutUsImage from "../../../../../public/images/logo/sms_office3.jpg";

// public/images/home/aboutUs/diverse-business-meeting.png"

function WebResult() {
  const [data, setData] = useState<any>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const values = [
    {
      icon: Users,
      title: "Human Connection",
      description:
        "Listening deeply, respecting cultural context, and tailoring solutions to your unique needs.",
    },
    {
      icon: Zap,
      title: "Operational Clarity",
      description:
        "Simplifying complex systems so decision-makers can act with confidence.",
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description:
        "Using intelligent tools only when needed to enhance efficiency, accuracy, and foresight.",
    },
    {
      icon: Shield,
      title: "Ethical Practices",
      description:
        "Ensuring transparency, compliance, and sustainability in every engagement.",
    },
    {
      icon: Sparkles,
      title: "Innovation with Purpose",
      description: "Leveraging technology without losing the human touch.",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setData(data?.WebResultTagList);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="aboutus">
      <div className="2xl:py-20 py-11">
        <div className="container">
          {/* <div className="flex flex-col  lg:gap-16 gap-5">
            <div className="flex flex-col items-center justify-center text-center gap-3">
             

              <h2 className="max-w-6xl">
                <TextGenerateEffect
                  words="Shriox was born from a simple yet powerful idea: consulting should feel human.
                  We believe every company deserves more than technical advice — they deserve a partner
                  who helps them understand their systems at their best and make confident decisions with clarity."
                  duration={0.2}
                />
              </h2>

              <div>
                <h2>
                  {data?.map((items: any, index: any) => (
                    <span
                      key={index}
                      className={`inline-flex m-2 py-1 px-5 gap-3 rounded-full ${items.bg_color} ${items.txt_color} items-center`}
                    >
                      <Image
                        src={items.image}
                        alt={items.name}
                        width={40}
                        height={40}
                        style={{ widp=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC9Y11ZKVqiA28hdzZvfvE3VWms9cztZ7C86NnQr/nh625Ue58jICmtA4ZHNHo7U8t0kdRZdeFDxFSTdzIiY3BLUdi4ITHYnqQKcjbKED4/4+1BsTIDw+yWly3zUBuUyEcfu27yp2e7ZOhE4MIP/pPbsjZqDugJ3tr6XacjMjTyeQIDAQABth: "auto", height: "auto" }}
                      />
                      <span className="instrument-font italic font-normal">
                        {items.name}
                      </span>
                    </span>
                  ))}
                </h2>
              </div>
            </div>
            <div className="flex-col md:flex md:flex-row justify-center items-center text-center">
              <div className="relative 2xl:px-24 px-16 md:py-8 py-4">
                <h2 ref={ref} className="2xl:text-9xl md:text-7xl text-5xl">
                  <sup>+</sup>
                  {inView ? <CountUp start={0} end={40} duration={3} /> : "0"}
                </h2>
                <p className="mt-2 text-dark_black/60 dark:text-white/60">
                  Total Projects Completed
                </p>
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-dark_black/10 dark:bg-white/10" />
              </div>
              <div className="relative 2xl:px-24 px-16 md:py-8 py-4">
                <h2 className="2xl:text-9xl md:text-7xl text-5xl">
                  <sup>+</sup>
                  {inView ? <CountUp start={0} end={15} duration={3} /> : "0"}
                </h2>
                <p className="mt-2 text-dark_black/60 dark:text-white/60">
                  Years of Experience
                </p>
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-dark_black/10 dark:bg-white/10" />
              </div>
              <div className="relative 2xl:px-24 px-16 md:py-8 py-4">
                <h2 className="2xl:text-9xl md:text-7xl text-5xl">
                  <sup>+</sup>
                  {inView ? <CountUp start={0} end={12} duration={3} /> : "0"}
                </h2>
                <p className="mt-2 text-dark_black/60 dark:text-white/60">
                  Design Awards
                </p>
              </div>
            </div>
          </div> */}

          <div>
            <section className="relative overflow-hidden py-18">
              <div className="max-w-6xl mx-auto">
                {/* Flex/Grid logic: order-first moves the heading to the top on mobile */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
                  {/* 1. Heading (Visible only on Mobile, at the top) */}
                  <h2 className="text-4xl lg:hidden text-slate-900 dark:text-white">
                    About Us
                  </h2>

                  {/* 2. Image (Second on mobile, first on desktop) */}
                  <div className="relative w-full h-96 lg:h-[350px] rounded-lg overflow-hidden order-2 lg:order-1">
                    <Image
                      src={aboutUsImage}
                      alt="Diverse team in business meeting"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* 3. Description (Last on mobile, second on desktop) */}
                  <div className="space-y-6 order-3 lg:order-2">
                    {/* Heading (Visible only on Desktop) */}
                    <h2 className="text-4xl mb-10 hidden lg:block text-slate-900 dark:text-white">
                      About Us
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                      Shriox was born from a simple yet powerful idea:
                      consulting should feel human. We believe every company
                      deserves more than technical advice — they deserve a
                      partner who helps them understand their systems at their
                      best and make confident decisions with clarity.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Values Grid Section */}
            {/* <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50"> */}
            {/* py-16 md:py-28 px-6 border border-dark_black/10 rounded-3xl bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] backdrop-blur-[200px] dark:opacity-80 */}
            <section className="w-fit mx-auto py-10 px-6 border border-dark_black/10 rounded-3xl bg-dark_black/5 dark:bg-white/5">
              <div className="max-w-6xl mx-auto">
                <h3 className="text-center mb-10">Our Approach</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div
                        key={index}
                        className="group relative bg-white dark:bg-slate-800/50 backdrop-blur border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:border-blue-400 dark:hover:border-slate-500 transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                      >
                        <div className="mb-4">
                          <Icon className="w-10 h-10 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
                        </div>
                        <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                          {value.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebResult;
