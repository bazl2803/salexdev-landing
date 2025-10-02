import { Appbar, Hero, Projects, Services } from "@/modules/landing";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-16">
      <header className="pb-8 md:grid md:grid-cols-2 md:gap-8">
        {/** Main Hero */}
        <div className="flex grow flex-col gap-12 md:col-start-1 md:col-end-2 border border-red-500">
          <Appbar />
          <Hero />
        </div>

        {/** Background */}
        <div
          className="absolute -z-10 h-full w-full grow object-cover md:col-start-2 md:col-end-3 border border-yellow-500"
          style={{
            filter: "brightness(115%) hue-rotate(180deg)",
            backgroundImage: `url('/dark-bg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            WebkitMaskImage:
              "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%)",
          }}
        />
      </header>
      <main className="flex flex-col gap-16">
        <Services />
        <Projects />
      </main>
    </div>
  );
}
