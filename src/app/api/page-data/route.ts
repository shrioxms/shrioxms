import { NextResponse } from "next/server";

const avatarList = [
  {
    image: "/images/home/avatar_1.jpg",
    title: "Sarah Johnson",
  },
  {
    image: "/images/home/avatar_2.jpg",
    title: "Olivia Miller",
  },
  {
    image: "/images/home/avatar_3.jpg",
    title: "Sophia Roberts",
  },
  {
    image: "/images/home/avatar_4.jpg",
    title: "Isabella Clark",
  },
];

const brandList = [
  {
    image: "/images/home/brand/brand-icon-1.svg",
    darkImg: "/images/home/brand/brand-darkicon-1.svg",
    title: "Adobe",
  },
  {
    image: "/images/home/brand/brand-icon-2.svg",
    darkImg: "/images/home/brand/brand-darkicon-2.svg",
    title: "Figma",
  },
  {
    image: "/images/home/brand/brand-icon-3.svg",
    darkImg: "/images/home/brand/brand-darkicon-3.svg",
    title: "Shopify",
  },
  {
    image: "/images/home/brand/brand-icon-4.svg",
    darkImg: "/images/home/brand/brand-darkicon-4.svg",
    title: "Dribble",
  },
  {
    image: "/images/home/brand/brand-icon-5.svg",
    darkImg: "/images/home/brand/brand-darkicon-5.svg",
    title: "Webflow",
  },
];

const innovationList = [
  {
    image: "/images/home/innovation/brand.svg",
    title: "Brand\nStrategy",
    bg_color: "bg-purple/20",
    txt_color: "text-purple",
  },
  {
    image: "/images/home/innovation/digitalmarketing.svg",
    title: "Digital\nMarketing",
    bg_color: "bg-blue/20",
    txt_color: "text-blue",
  },
  {
    image: "/images/home/innovation/uiux.svg",
    title: "UI/UX\nDesign",
    bg_color: "bg-orange/20",
    txt_color: "text-orange",
  },
  {
    image: "/images/home/innovation/analitics.svg",
    title: "Analytics &\nReporting",
    bg_color: "bg-green/20",
    txt_color: "text-green",
  },
  {
    image: "/images/home/innovation/webdevp.svg",
    title: "Web\nDevelopment",
    bg_color: "bg-pink/20",
    txt_color: "text-pink",
  },
];

const onlinePresenceList = [
  {
    image: "/images/home/onlinePresence/online_img_1.jpg",
    title: "FlowBank",
    tag: ["UX Research", "Interface Design"],
    link: "https://www.wrappixel.com/",
  },
  {
    image: "/images/home/onlinePresence/online_img_2.jpg",
    title: "Academy.co",
    tag: ["Product Design", "Interaction Design"],
    link: "https://www.wrappixel.com/",
  },
  {
    image: "/images/home/onlinePresence/online_img_3.jpg",
    title: "Genome",
    tag: ["Brand identity design", "UX Research"],
    link: "https://www.wrappixel.com/",
  },
  {
    image: "/images/home/onlinePresence/online_img_4.jpg",
    title: "Hotto",
    tag: ["Visual Storytelling", "Web & Mobile Design"],
    link: "https://www.wrappixel.com/",
  },
];

const creativeMindList = [
  {
    image: "/images/home/creative/creative_img_1.png",
    name: "Logan Dang",
    position: "WordPress Developer",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
  {
    image: "/images/home/creative/creative_img_2.png",
    name: "Ana Belić",
    position: "Social Media Specialist",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
  {
    image: "/images/home/creative/creative_img_3.png",
    name: "Brian Hanley",
    position: "Product Designer",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
  {
    image: "/images/home/creative/creative_img_4.png",
    name: "Darko Stanković",
    position: "UI Designer",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
];

const WebResultTagList = [
  {
    image: "/images/home/result/creativity.svg",
    name: "Creativity",
    bg_color: "bg-purple/20",
    txt_color: "text-purple",
  },
  {
    image: "/images/home/result/innovation.svg",
    name: "Innovation",
    bg_color: "bg-blue/20",
    txt_color: "text-blue",
  },
  {
    image: "/images/home/result/strategy.svg",
    name: "Strategy",
    bg_color: "bg-orange/20",
    txt_color: "text-orange",
  },
];

const startupPlanList = [
  {
    plan_bg_color: "bg-pale-yellow",
    text_color: "text-dark_black",
    descp_color: "dark_black/60",
    border_color: "border-dark_black/10",
    plan_name: "Starter",
    plan_descp: "Focused evaluation for core SCM modules",
    plan_price: "$4,500",
    icon_img: "/images/home/startupPlan/white_tick.svg",
    plan_feature: [
      "100 hours of detailed assessment, process review, and optimization guidance for Procurement, Inventory and Quality modules",
      "1 dedicated SPOC session per module (2 hr max per module)",
      "Actionable insights and industry best practices",
      "Recommendations to streamline your SCM operations",

      // '',
    ],
  },
  {
    plan_bg_color: "bg-purple_blue",
    text_color: "text-white",
    descp_color: "white/60",
    border_color: "border-white/10",
    plan_name: "Pro",
    plan_descp: "Comprehensive evaluation for all SCM modules",
    plan_price: "Contact for Quote",
    icon_img: "/images/home/startupPlan/black_tick.svg",
    plan_feature: [
      "Procurement, Inventory, Quality, Order Management, Manufacturing & Logistics",
      "Dedicated SPOC session for each module",
      "End-to-end ERP assessment & risk identification",
      "Compliance checks and strategic roadmap",
      "Tailored pricing based on your system complexity",
    ],
  },
];

const faqList = [
  {
    faq_que: "What are Shrioxms core service offerings for Oracle SCM Cloud?",
    faq_ans:
      "We offer comprehensive, end-to-end services across the entire Oracle Supply Chain Management Cloud suite, including Order Management, Inventory Management, Procurement Cloud, Maintenance Cloud, and other specific modules for Supply Chain Planning (like Demand and Supply Planning Cloud).",
  },
  {
    faq_que: "How does Shrioxms ensure a faster, low-risk ERP migration?",
    faq_ans:
      "We leverage deep industry expertise and proprietary, pre-built PaaS-based accelerators to automate data gathering, migration, and validation. This approach helps reduce the risk, cost, and complexity typically associated with large-scale digital transformations.",
  },
  {
    faq_que: "Does your service include Business Process Transformation?",
    faq_ans:
      "Absolutely. Our approach is not just technical; it is business process-driven. We start with a thorough assessment and gap analysis to define your “to-be” process recommendations, ensuring the new ERP system aligns perfectly with your strategic business goals.",
  },
  {
    faq_que:
      "How does Shrioxms help improve customer satisfaction and delivery with Oracle SCM Cloud?",
    faq_ans:
      "Shrioxms helps organizations implement Oracle SCM Cloud to react faster to business events using real-time visibility and connected supply chain insights. By enabling organizations to streamline operations, accelerate time-to-market, and ensure more efficient delivery, Shrioxms helps enhance customer satisfaction and create a more resilient supply chain.",
  },
  {
    faq_que:
      "What are the major challenge faced by firms, while implementing Oracle ERP cloud?",
    faq_ans:
      "It includes, either underestimating or overestimating the modification in process, overseeing the migration risks, and sometimes the absence of a backup resource. To avoid these major issues, join hands with us. As the Oracle ERP Cloud Partners, we are ready to assist you with End-End digital transformation.",
  },
  {
    faq_que: "Does Oracle ERP use Artificial Intelligence?",
    faq_ans:
      "Oracle ERP is known as a complete ERP with built-in artificial intelligence. The AI capabilities help predict and forecast better, automate and eliminate manual processes, enhance the productivity of different teams, and improve customer churn.",
  },
  {
    faq_que: "What Industries Benefit Most From Oracle Cloud Services?",
    faq_ans:
      "Industries with complex processes and high compliance needs gain significant value, such as Healthcare, Public Sector, Retail, Financial Services, Manufacturing, Higher Education, and Non-Profit. Oracle Cloud enables these sectors to streamline operations and accelerate digital transformation.",
  },
  // , {
  //   faq_que: "",
  //   faq_ans:
  //     "",
  // },
];

const achievementsList = [
  {
    icon: "/images/home/achievement/framer_award.svg",
    dark_icon: "/images/home/achievement/dark_framer_award.svg",
    sub_title: "Framer Awards",
    title:
      "Celebrated for cutting-edge interaction design and seamless user experiences.",
    year: "2024",
    url: "https://www.framer.com/@wrap-pixel/",
  },
  {
    icon: "/images/home/achievement/dribble_award.svg",
    dark_icon: "/images/home/achievement/dribble_award.svg",
    sub_title: "Dribbble Awards",
    title: "Recognized for creative excellence and innovative design solutions",
    year: "2023",
    url: "https://dribbble.com/wrappixel",
  },
  {
    icon: "/images/home/achievement/awward_award.svg",
    dark_icon: "/images/home/achievement/dark_awward_award.svg",
    sub_title: "awwwards Awards",
    title:
      "Honored with the Best Website Design for creativity, usability, and innovation.",
    year: "2022",
    url: "https://www.framer.com/@wrap-pixel/",
  },
];

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};
