import Image from "next/image";
import Link from "next/link";

interface HeaderProps {}
const Logo: React.FC<HeaderProps> = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/LightModeSmsLogoC3.png"
        alt="logo"
        width={110}
        height={34}
        style={{ width: "8rem", height: "5rem", marginLeft: "2rem" }}
        // quality={100}
        priority={true}
        className="dark:hidden"
      />
      <Image
        // src="/images/logo/DarkModeLogo.svg"
        src="/images/logo/DarkModeSmsLogoC3.png"
        alt="logo"
        width={160}
        height={50}
        // width={110}
        // height={34}
        // style={{ width: "auto", height: "auto" }}
        style={{ width: "8rem", height: "5rem", marginLeft: "2rem" }}
        // quality={100}
        className="dark:block hidden"
      />
    </Link>
  );
};

export default Logo;
