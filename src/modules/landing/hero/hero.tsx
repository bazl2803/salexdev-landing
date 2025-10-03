import { Button } from "@/components/ui/button";
import { LucideStars } from "lucide-react";

export const Hero = () => {
  // Hero spanish dictionary
  const HeroDictionary = {
    badge: "Consultora Tecnológica",
    text: "Soluciones Digitales para impulsar tus Ideas",
    description:
      "Gestiona, Agila y Optimiza los procesos de tu empresa con soluciones tecnológicas de vanguaria",
    ctaButton: "Contáctanos",
    projectsButton: "Ver Proyectos",
  };

  return (
    <>
      <div className="flex flex-col gap-8 px-8 select-none">
        <div className="flex w-fit flex-nowrap items-center gap-2 rounded-full border border-yellow-600 bg-yellow-50 px-4 py-1 font-medium text-yellow-600">
          <LucideStars size={16} />
          <span>{HeroDictionary.badge}</span>
        </div>

        <h1 className="text-5xl font-bold text-balance">
          {HeroDictionary.text}
        </h1>

        <p className="text-lg">{HeroDictionary.description}</p>

        <div className="flex flex-nowrap gap-2">
          <a href="#contact">
            <Button>{HeroDictionary.ctaButton}</Button>
          </a>
          <a href="#projects">
            <Button variant={"outline"}>{HeroDictionary.projectsButton}</Button>
          </a>
        </div>
      </div>
    </>
  );
};
