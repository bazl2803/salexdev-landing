import Image from "next/image";

export const HeroBg = () => {
  return (
    <>
      <Image
        className="h-auto w-auto object-cover md:h-full"
        src="/hero-bg.png"
        alt="Hero Background"
        width={1920}
        height={1080}
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
      />
    </>
  );
};
