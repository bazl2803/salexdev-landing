import { Collection } from "@/components/ui/collection";
import React from "react";
import { TestimonialCard } from "./testimonial-card";

export const Testimononials = () => {
  return (
    <>
      <section>
        <h3>¿Qué dicen nuestros clientes?</h3>

        <Collection>
          <Collection.Item>
            <TestimonialCard
              testimonial={{
                author: "",
                avatarUrl: "",
                content: "",
              }}
            />
          </Collection.Item>
        </Collection>
      </section>
    </>
  );
};
