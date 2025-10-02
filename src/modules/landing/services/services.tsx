import { IconName } from "lucide-react/dynamic";
import { ServiceCard } from "./service-card";

export const Services = () => {
  const services: Array<{
    icon: IconName;
    title: string;
    description: string;
  }> = [
    {
      icon: "globe",
      title: "Desarrollo Web",
      description: "Proporcionamos una gama completa de servicios de desarrollo web.",
    },
    {
      icon: "smartphone",
      title: "Desarrollo Móvil",
      description: "Proporcionamos una gama completa de servicios de desarrollo móvil.",
    },
    {
      icon: "pencil-ruler",
      title: "UI/UX Design",
      description: "Proporcionamos una gama completa de servicios de diseño UI/UX.",
    },
    {
      icon: "cloudy",
      title: "Cloud Computing",
      description: "Proporcionamos una gama completa de servicios de cloud computing.",
    },
    {
      icon: "workflow",
      title: "DevOps",
      description: "Proporcionamos una gama completa de servicios de DevOps.",
    },
    {
      icon: "database",
      title: "Database Management",
      description: "Proporcionamos una gama completa de servicios de gestión de bases de datos.",
    },
  ];

  return (
    <>
      <section>
        <h3 className="mb-4 text-center text-2xl font-semibold">
          Nuestros Servicios
        </h3>
        <div className="grid grid-cols-2 justify-items-start gap-4 px-8 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};
