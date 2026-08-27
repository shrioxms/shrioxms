"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import SingleAchievement from "./SingleAchievement";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [achievementsList, setAchievementsList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setAchievementsList(data?.achievementsList);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const features = [
    {
      title: "ERP as a Partnership",
      description:
        "We work side by side with you, not as outsiders, but as a dedicated team invested in your success.",
      icon: "🤝",
      number: "01",
    },
    {
      title: "Best Practices, always",
      description:
        "Our solutions are rooted in proven industry standards, ensuring compliance, efficiency, and long term value.",
      icon: "✨",
      number: "02",
    },
    {
      title: "Human + AI Synergy",
      description:
        "We blend human insight with AI powered tools, using technology only when it enhances decision making, streamlines processes, or reveals opportunities you might otherwise miss.",
      icon: "⚡",
      number: "03",
    },
    {
      title: "Clarity & Confidence",
      description:
        "We simplify complex ERP systems so you can focus on growth, not confusion.",
      icon: "🎯",
      number: "04",
    },
    {
      title: "Sustainable Success",
      description:
        "Every solution we deliver is designed to be scalable, ethical, and future ready.",
      icon: "🌱",
      number: "05",
    },
  ];

  const bottomAnimation = (index: any) => ({
    initial: { y: "5%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "10%", opacity: 0 },
    transition: { duration: 0.4, delay: 0.4 + index * 0.3 },
  });

  return (
    <section id="whyus">
      <div ref={ref} className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-20">
            {/* <div className="max-w2/3-"></div> */}
            {/* <div className="w-ms text-center mx-auto">
              <h3>
                <TextGenerateEffect
                  words="At Shriox, we don’t just act as your implementation or
                  support partner, we become an extension of your ERP team. 
                  Our approach is designed to give you more than solutions; 
                  we provide clarity, confidence, and industry best practices
                  that make your "
                />
                <TextGenerateEffect
                  words="ERP journey smooth and sustainable."
                  delay={1}
                  className="italic font-normal instrument-font"
                />
              </h3>
            </div> */}
            {/* <div className="max-w-3/4 text-center mx-auto">
              <h3 className="">
                At Shriox, we don’t just act as your implementation or support
                partner, we become an extension of your ERP team.
              </h3>

              <div className="">
                <p className="text-lg md:text-2xl text-slate-700 leading-relaxed md:leading-loose text-center font-medium">
                  Our approach is designed to give you more than solutions; we
                  provide clarity, confidence, and industry best practices that
                  make your ERP journey smooth and sustainable.
                </p>
              </div>
            </div> */}

            <>
              <section className="w-full bg-background py-6 lg:py-10">
                {/* py-16 lg:py-24 */}
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                  <div className="mb-15 max-w-2xl">
                    <h2 className="text-pretty mb-10 text-4xl tracking-tight sm:text-5xl">
                      Why Choose Shriox?
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                      At Shriox, we don't just act as your implementation or
                      support partner — we become an extension of your ERP team.
                      Our approach is designed to give you more than solutions;
                      we provide clarity, confidence, and industry best
                      practices that make your ERP journey smooth and
                      sustainable.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className=" text-3xl tracking-tight  sm:text-3xl">
                      What Sets Us Apart
                    </h3>
                  </div>

                  {/* Vertical Timeline Design */}
                  <div className="space-y-12 lg:space-y-16">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="grid gap-8 md:grid-cols-2 md:gap-12 items-start pb-4 last:pb-0"
                      >
                        {/* Timeline marker and number */}
                        <div className="relative md:sticky md:top-24">
                          <div className="flex items-start gap-6">
                            <div className="flex flex-col items-center">
                              {/* Timeline dot */}
                              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent dark:from-dark_primary dark:to-dark_accent text-white font-bold text-2xl mb-2">
                                {feature.number}
                              </div>
                              {/* Timeline line */}
                              {index < features.length - 1 && (
                                <div className="hidden md:block w-1 h-30 bg-gradient-to-b from-primary/50 to-transparent mt-4"></div>
                              )}
                            </div>
                            {/* Mobile view content start */}
                            <div className="md:hidden">
                              <h3
                                className="text-xl mb-4 
                              font-semibold text-slate-900 dark:text-white"
                              >
                                {feature.title}
                              </h3>
                              <p
                                className="
                              text-slate-600 dark:text-slate-300 text-base leading-relaxed
                              "
                              >
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Desktop view content */}
                        <div className="hidden md:block pt-4">
                          <div className="text-5xl mb-4">{feature.icon}</div>
                          <h3
                            className="text-xl mb-4
                           font-semibold text-slate-900 dark:text-white
                          "
                          >
                            {feature.title}
                          </h3>
                          <p
                            className="
                          text-slate-600 dark:text-slate-300 text-base leading-relaxed
                          "
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom CTA */}
                  {/* <div className="mt-24 rounded-2xl bg-card border border-border p-12 text-center">
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to Partner with Shriox?
                    </h3>
                    <p className=" mb-8 max-w-2xl mx-auto">
                      Let's discuss how we can become an extension of your ERP
                      team and drive sustainable success.
                    </p>
                    <button className="px-8 py-3 bg-primary rounded-lg font-semibold hover:opacity-90 transition-opacity">
                      Get Started Today
                    </button>
                  </div> */}
                </div>
              </section>
            </>

            {/* <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {achievementsList?.map((item: any, index: any) => {
                return (
                  <motion.div {...bottomAnimation(index)} key={index}>
                    <SingleAchievement key={index} achievements={item} />
                  </motion.div>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
