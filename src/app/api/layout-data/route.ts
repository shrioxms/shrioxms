import { NextResponse } from "next/server";

const headerData = [
  { label: "Why Us", href: "/#whyus" },
  { label: "Services", href: "/#services" },
  // { label: "Work", href: "/#work" },
  { label: "About us", href: "/#aboutus" },
  { label: "Products", href: "/#products" },
  // { label: "Team", href: "/#team" },
  { label: "Pricing", href: "/#pricing" },
  // { label: 'Awards', href: '/#awards' },
  { label: "Career", href: "/#career" },
  { label: "Contact", href: "/contact" },
];

const footerData = {
  brand: {
    name: "Shrioxms",
    tagline:
      "Empowering businesses with innovative solutions. Let's create something amazing together.",
    socialLinks: [
      {
        icon: "/images/home/footerSocialIcon/twitter.svg",
        dark_icon: "/images/home/footerSocialIcon/twitter_dark.svg",
        link: "https://twitter.com",
      },
      {
        icon: "/images/home/footerSocialIcon/linkedin.svg",
        dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
        link: "https://linkedin.com/in",
      },
      {
        icon: "/images/home/footerSocialIcon/dribble.svg",
        dark_icon: "/images/home/footerSocialIcon/dribble_dark.svg",
        link: "https://dribbble.com",
      },
      {
        icon: "/images/home/footerSocialIcon/instagram.svg",
        dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
        link: "https://instagram.com",
      },
    ],
  },
  sitemap: {
    name: "Sitemap",
    links: [
      { name: "Contact us", url: "/contact" },
      { name: "Why us", url: "/#whyus" },
      { name: "About us", url: "/#aboutus" },
      { name: "Products", url: "/#products" },
      { name: "Work", url: "/#work" },
      { name: "Services", url: "/#services" },
      { name: "Pricing", url: "/#pricing" },
    ],
  },
  otherPages: {
    name: "Other Pages",
    links: [
      { name: "Error 404", url: "/not-found" },
      { name: "Terms & Conditions", url: "/terms-and-conditions" },
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Documentation", url: "/documentation" },
    ],
  },
  contactDetails: {
    name: "Contact Details",
    address: "72, Aashirvad Parisar,",
    address1: "Jaora (M.P.), India",
    email: "Info@Shrioxms.com",
    phone: "1234567890",
  },
  copyright: "©2025 Shrioxms. All Rights Reserved",
};

export const GET = async () => {
  return NextResponse.json({
    headerData,
    footerData,
  });
};
