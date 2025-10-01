import { Button } from "@/components/ui/button";

export const Hero = () => {
  // Hero spanish dictionary
  const HeroDictionary = {
    badge: "💻 Consultora Tecnológica",
    text: "Soluciones Digitales para impulsar tus Ideas",
    description:
      "Somos una empresa miembro de la Salex Corporation dedicada al desarrollo de todo tipo de soluciones de tecnología",
    ctaButton: "Contáctanos",
    projectsButton: "Ver Proyectos",
  };

  return (
    <>
      <header className="flex flex-col gap-8 px-8 md:items-center">

        <div className="flex w-fit flex-nowrap rounded-full border border-amber-400 bg-amber-50 px-4 py-1">
          <span>{HeroDictionary.badge}</span>
        </div>

        <h1 className="text-5xl font-bold text-balance md:text-center">
          {HeroDictionary.text}
        </h1>

        <p>{HeroDictionary.description}</p>

        <div className="flex flex-nowrap gap-2">
          <Button>{HeroDictionary.ctaButton}</Button>
          <Button variant={"outline"}>{HeroDictionary.projectsButton}</Button>
        </div>
      </header>
    </>
  );
};
