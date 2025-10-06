import Image from "next/image";
export const Appbar = () => {
  return (
    <>
      <div className="w-full">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between">
          <Image
            className="h-20 w-auto"
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
          />

          <nav>
            <ul className="flex gap-4">
              <li>
                <a href="#services">Servicios</a>
              </li>
              <li>
                <a href="#technologies">Tecnologías</a>
              </li>
              <li>
                <a href="#projects">Nuestra Experiencia</a>
              </li>
              <li>
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
