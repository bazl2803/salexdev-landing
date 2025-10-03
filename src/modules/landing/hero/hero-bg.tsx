import Image from "next/image";

export const HeroBg = () => {
  return (
    <>
      <Image
        className="h-auto w-full object-cover"
        src="/hero-bg.png"
        alt="Hero Background"
        width={1920}
        height={1080}
      />
    </>
  );
};
