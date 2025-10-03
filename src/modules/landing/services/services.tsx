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
      description:
        "Proporcionamos una gama completa de servicios de desarrollo web.",
    },
    {
      icon: "smartphone",
      title: "Desarrollo Móvil",
      description:
        "Proporcionamos una gama completa de servicios de desarrollo móvil.",
    },
    {
      icon: "pencil-ruler",
      title: "UI/UX Design",
      description:
        "Proporcionamos una gama completa de servicios de diseño UI/UX.",
    },
    {
      icon: "cloudy",
      title: "Cloud Computing",
      description:
        "Proporcionamos una gama completa de servicios de cloud computing.",
    },
    {
      icon: "workflow",
      title: "DevOps",
      description: "Proporcionamos una gama completa de servicios de DevOps.",
    },
    {
      icon: "database",
      title: "Database Management",
      description:
        "Proporcionamos una gama completa de servicios de gestión de bases de datos.",
    },
  ];

  return (
    <>
      <section>
        <div className="space-y-2">
          <h3 className="mb-4 text-3xl font-bold">Nuestros Servicios</h3>
          <p className="mb-8 text-lg text-gray-600">
            Ofrecemos una amplia gama de servicios para ayudar a tu negocio a
            crecer en la era digital.
          </p>
        </div>

        <div className="grid justify-items-start gap-4 sm:grid-cols-2 md:grid-cols-3">
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
