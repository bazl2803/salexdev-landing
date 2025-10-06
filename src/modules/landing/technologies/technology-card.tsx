import React from "react";
import Image from "next/image";

interface TechnologyCardProps {
  logo: string;
  name: string;
  description: string;
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  logo,
  name,
  description,
}) => {
  return (
    <div className="space-y-4 rounded-md p-4 shadow transition-[scale] hover:scale-105">
      <div className="aspect-square h-12 w-12">
        <Image
          className="object-contain"
          src={logo}
          alt={name}
          width={100}
          height={100}
          sizes="48px"
        />
      </div>

      <div className="space-y-4">
        <span className="text-md font-bold">{name}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};
