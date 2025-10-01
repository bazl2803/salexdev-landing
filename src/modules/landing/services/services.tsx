import { ServiceCard } from "./service-card";

export const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "We provide a full range of web development services.",
    },
    {
      title: "Mobile Development",
      description: "We provide a full range of mobile development services.",
    },
    {
      title: "UI/UX Design",
      description: "We provide a full range of UI/UX design services.",
    },
    {
      title: "Cloud Computing",
      description: "We provide a full range of cloud computing services.",
    },
    {
      title: "DevOps",
      description: "We provide a full range of DevOps services.",
    },
  ];

  return (
    <>
      <h3>Nuestros Servicios</h3>
      <div className="grid grid-cols-2 justify-items-start gap-2">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </>
  );
};
