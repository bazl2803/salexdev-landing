import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { LucideStars } from "lucide-react";
import Image from "next/image";
import { ScheduleProjectDialog } from "./schedule-project-dialog";

export const Hero = () => {
  // Hero spanish dictionary
  const HeroDictionary = {
    badge: "Consultora Tecnológica",
    text: "Soluciones Digitales para impulsar tus Ideas",
    description:
      "Gestiona, Agila y Optimiza los procesos de tu empresa con soluciones tecnológicas de vanguaria",
    ctaButton: "Cotiza Ahora",
    projectsButton: "Agenda tu Proyecto",
  };

  return (
    <div className="flex flex-row items-center justify-between gap-8">
      <div className="flex grow flex-col gap-8 text-balance select-none">
        <div className={"space-y-4"}>
          <div className="flex w-fit flex-nowrap items-center gap-2 rounded-full border border-yellow-600 bg-yellow-50 px-4 py-1 text-xs font-medium text-yellow-600">
            <LucideStars size={16} />
            <span>{HeroDictionary.badge}</span>
          </div>

          <h1 className="text-5xl font-bold text-balance">
            {HeroDictionary.text}
          </h1>
        </div>

        <p className="text-lg">{HeroDictionary.description}</p>

        <div className="flex flex-nowrap gap-2">
          <Button>{HeroDictionary.ctaButton}</Button>
          <ScheduleProjectDialog/>          
        </div>
      </div>

      <div className="grow justify-self-center-safe">
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
      </div>
    </div>
  );
};
