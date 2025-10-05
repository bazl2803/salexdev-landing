import Image from "next/image";

export const FooterBranding = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Image
          className="h-20 w-fit"
          src={"/logo.png"}
          width={100}
          height={100}
          alt="logo"
        />

        <p className="max-w-sm text-sm text-pretty text-gray-400">
          Una rama de Salex Corporation dedicada al desarrollo de todo tipo de
          soluciones de tecnología
        </p>
      </div>
    </>
  );
};
