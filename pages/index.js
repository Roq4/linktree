import Image from "next/image";
import data from "../data.json";

export default function Home() {
  const container = {
    mainContainer: `flex flex-col items-center mx-auto w-full justify-center mt-16 px-8`,
    profileImg: `rounded-full`,
    avatarHeader: `font-bold mt-4  text-xl`,
    avatarTitle: ` font-bold mb-10`,
  };

  const linkCard = {
    cardRef: `bg-[#C6DBBD] flex justify-center items-center p-4 rounded-md hover:scale-105 transition-all border border-black my-3 w-full max-w-3xl`,
    cardTitle: `font-semibold`,
    icon: `flex flex-row justify-center items-center gap-5 `,
  };

  function LinkCard({ href, title }) {
    return (
      <a href={href} target="_blank" className={linkCard.cardRef}>
        <h2 className={linkCard.cardTitle}>{title}</h2>
      </a>
    );
  }

  function SocialIcon({ href, icon }) {
    return (
      <a target="_blank" href={href}>
        <img width={40} height={40} src={icon} />
      </a>
    );
  }

  return (
    <div className={container.mainContainer}>
      <Image
        className={container.profileImg}
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className={container.avatarHeader}>{data.name}</h1>
      <h3 className={container.avatarTitle}>{data.title}</h3>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className={linkCard.icon}>
        {data.socials.map((social) => {
          return <SocialIcon key={social.href} {...social} />;
        })}
      </div>
    </div>
  );
}
