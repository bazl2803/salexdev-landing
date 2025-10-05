import Image from "next/image";

export const About = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 md:items-center md:gap-4">
        <div className="space-x-2 md:col-start-2">
          <h3 className="mb-4 text-3xl font-bold">¿Quiénes Somos?</h3>
          <p className="text-lg text-gray-600">
            Somos una consultora tecnológica dedicada a ofrecer soluciones
            innovadoras y personalizadas para impulsar el crecimiento de tu
            negocio en la era digital.
          </p>
        </div>

        <Image
          className="h-auto max-h-32 w-fit object-cover md:col-start-1 md:row-start-1"
          src={"/1000002212.png"}
          alt="Un programador en su hábitat natural"
          sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
          width={1}
          height={1}
        />
      </div>
    </section>
  );
};
