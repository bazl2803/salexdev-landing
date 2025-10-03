import Image from "next/image";
import { FooterSocial } from "./footer-social";

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
          Salex Dev es una consultora tecnológica dedicada a ofrecer soluciones
          innovadoras y personalizadas para impulsar el crecimiento de tu
          negocio en la era digital.
        </p>

        <FooterSocial />
      </div>
    </>
  );
};
