import React from "react";
import { TestimonialCard } from "@/modules/landing/testimonials/testimonial-card";
import { Testimonial } from "@/modules/landing/testimonials/testimonial";

export const Testimonials = () => {
  const testimonials: Array<Testimonial> = [
    {
      author: "Juan Pérez",
      role: "CEO de TechCorp",
      comment:
        "Excelente servicio y profesionalismo. Entregaron el proyecto a tiempo y con la calidad esperada.",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      author: "María González",
      role: "Directora de Marketing en Innovatech",
      comment:
        "Superaron nuestras expectativas. El equipo demostró gran compromiso y atención al detalle en cada fase del proyecto.",
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      author: "Carlos Rodríguez",
      role: "CTO de StartupLab",
      comment:
        "Trabajar con ellos fue una experiencia excelente. Su experiencia técnica y capacidad de resolver problemas complejos es sobresaliente.",
      avatarUrl: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ];

  return (
    <>
      <section>
        <h3 className={"text-3xl font-bold"}>¿Qué dicen nuestros clientes?</h3>

        <div className={"grid gap-4 sm:grid-cols-2 md:grid-cols-3"}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </>
  );
};
