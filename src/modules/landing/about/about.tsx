import { Card } from "@/components/ui/card";
import { LucideEye, LucideLightbulb, LucideTarget } from "lucide-react";

export const About = () => {
  return (
    <section>
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-8">
          <div className="w-fit rounded-xl bg-neutral-50 p-4">
            <LucideLightbulb />
          </div>
          <h3 className="mb-2 text-2xl font-bold">¿Quiénes Somos?</h3>
          <p>
            Somos una consultora tecnológica dedicada a ofrecer soluciones
            innovadoras y personalizadas para impulsar el crecimiento de tu
            negocio en la era digital.
          </p>
        </Card>

        <Card className="p-8">
          <div className="w-fit rounded-xl bg-neutral-50 p-4">
            <LucideTarget />
          </div>
          <h3 className="mb-2 text-2xl font-bold">Nuestra Misión</h3>
          <p>
            Transformar desafíos empresariales en oportunidades digitales
            mediante soluciones tecnológicas innovadoras, acompañando a nuestros
            clientes en cada etapa de su transformación digital con excelencia y
            compromiso.
          </p>
        </Card>

        <Card className="p-8">
          <div className="w-fit rounded-xl bg-neutral-50 p-4">
            <LucideEye />
          </div>
          <h3 className="mb-2 text-2xl font-bold">Nuestra Visión</h3>
          <p>
            Ser la consultora tecnológica líder en innovación digital,
            reconocida por impulsar el éxito sostenible de las empresas a través
            de soluciones que marcan la diferencia en la era digital.
          </p>
        </Card>
      </div>
    </section>
  );
};
