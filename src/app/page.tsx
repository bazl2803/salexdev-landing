import { Appbar, Hero, Projects, Services } from "@/modules/landing";
import { HeroBg } from "@/modules/landing/hero/hero-bg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col gap-16">
      <header className="grid md:grid-cols-2">
        {/** Main Hero */}
        <div className="flex flex-col gap-12">
          <Appbar />
          <Hero />
        </div>

        <HeroBg />
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-8">
        <Services />
        <Projects />
      </main>

      <footer className="bg-black md:grid md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Image
            className="h-40 w-auto"
            src={"/logo.png"}
            width={100}
            height={100}
            alt="logo"
          />
        </div>
      </footer>
    </div>
  );
}
