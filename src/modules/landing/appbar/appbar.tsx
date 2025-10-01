import Image from "next/image";
export const Appbar = () => {
  return (
    <>
      <div className="w-full bg-black p-4">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between p-4">
          <Image className="h-16 w-auto" src="/logo.jpg" alt="logo" width={100} height={100} />
        </div>
      </div>
    </>
  );
};
